
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Search, Loader2, Check, AlertCircle, X, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Dominios = () => {
  const [domainQuery, setDomainQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    domainName: string;
    extensions: {
      extension: string;
      available: boolean;
      price: string;
      priceValue: number;
    }[];
  } | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Simular verificação de usuário logado
  const isUserLoggedIn = true;

  // Lista de extensões e preços
  const extensions = [
    { ext: '.ao', price: '25.000,00 Kz', value: 25000 },
    { ext: '.co.ao', price: '35.000,00 Kz', value: 35000 },
    { ext: '.edu.ao', price: '35.000,00 Kz', value: 35000 },
    { ext: '.it.ao', price: '5.000,00 Kz', value: 5000 },
    { ext: '.com', price: '21.500,00 Kz', value: 21500 },
    { ext: '.net', price: '25.500,00 Kz', value: 25500 },
    { ext: '.org', price: '35.000,00 Kz', value: 35000 },
    { ext: '.info', price: '16.000,00 Kz', value: 16000 }
  ];

  // Função para verificar múltiplas extensões
  const checkMultipleDomains = async (domainName: string) => {
    try {
      console.log(`Verificando domínio: ${domainName} com múltiplas extensões`);
      
      // Simular delay de verificação DNS para cada extensão
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular verificação para cada extensão
      const results = extensions.map(ext => ({
        extension: ext.ext,
        available: Math.random() > 0.4, // 60% chance de estar disponível
        price: ext.price,
        priceValue: ext.value
      }));
      
      return {
        domainName: domainName,
        extensions: results
      };
      
    } catch (error) {
      console.error('Erro na verificação DNS:', error);
      return {
        domainName: domainName,
        extensions: extensions.map(ext => ({
          extension: ext.ext,
          available: false,
          price: ext.price,
          priceValue: ext.value
        }))
      };
    }
  };

  const handleDomainSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const cleanDomain = domainQuery.trim().toLowerCase();
    
    // Validação básica - apenas nome do domínio, sem extensão
    if (cleanDomain.length < 2 || cleanDomain.includes('.')) {
      alert('Digite apenas o nome do domínio, sem extensão (ex: meusite)');
      return;
    }
    
    setIsSearching(true);
    setShowResults(true);
    setSearchResults(null);
    
    const result = await checkMultipleDomains(cleanDomain);
    setSearchResults(result);
    setIsSearching(false);
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchResults(null);
    setIsSearching(false);
  };

  if (!isUserLoggedIn) {
    return (
      <div className="min-h-screen font-sans">
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
                Registre o Seu Domínio
              </h1>
              <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto mb-8">
                Encontre e registre o nome de domínio ideal para a sua marca.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border-[3px] border-petrohost-blue p-12 text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-20 h-20 bg-petrohost-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-white" size={40} />
                </div>
                <h2 className="text-2xl font-bold text-petrohost-darkText mb-4">
                  Acesso Restrito
                </h2>
                <p className="text-petrohost-textGray mb-6">
                  Para verificar e registrar domínios, você precisa estar logado em sua conta.
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Link 
                  to="/login"
                  className="bg-petrohost-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Fazer Login
                </Link>
                <Link 
                  to="/registro"
                  className="border-[3px] border-petrohost-blue text-petrohost-blue px-8 py-3 rounded-lg font-semibold hover:bg-petrohost-blue hover:text-white transition-colors"
                >
                  Criar Conta
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
              Registre o Seu <span className="text-petrohost-blue">Domínio</span>
            </h1>
            <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto">
              Digite apenas o nome do domínio e verificaremos todas as extensões disponíveis!
            </p>
          </div>

          {/* Formulário de Pesquisa */}
          <div className="max-w-4xl mx-auto mb-12">
            <form onSubmit={handleDomainSearch} className="bg-white rounded-lg border-[3px] border-petrohost-blue p-8 shadow-lg">
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={domainQuery}
                    onChange={(e) => setDomainQuery(e.target.value)}
                    placeholder="Digite apenas o nome (ex: meusite)"
                    className="w-full px-6 py-4 text-lg border-[3px] border-gray-200 rounded-lg focus:border-petrohost-blue focus:outline-none transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="bg-petrohost-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSearching ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                  {isSearching ? 'Verificando...' : 'Verificar Todas'}
                </button>
              </div>

              <div className="mt-4 text-center text-sm text-petrohost-textGray">
                <p>🔍 <strong>Verificação inteligente:</strong> Digite apenas o nome e verificaremos todas as extensões automaticamente</p>
              </div>
            </form>
          </div>

          {/* Extensões Populares */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-petrohost-darkText text-center mb-8">
              Extensões Disponíveis e Preços
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {extensions.map((item) => (
                <div 
                  key={item.ext}
                  className={`bg-white rounded-lg border-[3px] p-4 text-center transition-all hover:scale-105 cursor-pointer ${
                    item.ext === '.ao' || item.ext === '.com' ? 'border-petrohost-blue shadow-md' : 'border-gray-200'
                  }`}
                  onClick={() => setDomainQuery(`exemplo${item.ext}`)}
                >
                  {(item.ext === '.ao' || item.ext === '.com') && (
                    <span className="bg-petrohost-blue text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">
                      Popular
                    </span>
                  )}
                  <div className="font-bold text-lg text-petrohost-darkText">{item.ext}</div>
                  <div className="text-sm text-petrohost-textGray">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Links para outros produtos */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/hospedagem" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
                <Globe className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Hospedagem</h3>
                <p>Escolha o plano perfeito para hospedar o seu sistema</p>
              </Link>
              <Link to="/email" className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all">
                <Mail className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Email Profissional</h3>
                <p>Planos de email profissional para sua empresa</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Resultado da Pesquisa - Modal */}
      {showResults && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300"
            onClick={closeResults}
          />
          
          <div className="fixed inset-4 bg-white rounded-[20px] shadow-2xl z-[70] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-petrohost-darkText">
                  🔍 Resultado da Verificação
                </h3>
                <button 
                  onClick={closeResults}
                  className="text-petrohost-textGray hover:text-petrohost-darkText transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              {isSearching ? (
                <div className="text-center py-12">
                  <Loader2 className="animate-spin mx-auto mb-4 text-petrohost-blue" size={64} />
                  <p className="text-petrohost-textGray text-xl">
                    🔍 Verificando <strong>{domainQuery}</strong> em todas as extensões...
                  </p>
                  <p className="text-sm text-petrohost-textGray mt-2">
                    Consultando servidores de nome e registros DNS
                  </p>
                </div>
              ) : searchResults ? (
                <div>
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-petrohost-darkText mb-2">
                      Domínio: <span className="text-petrohost-blue">{searchResults.domainName}</span>
                    </h4>
                    <p className="text-petrohost-textGray">Resultados para todas as extensões:</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.extensions.map((result, idx) => (
                      <div 
                        key={idx} 
                        className={`p-6 rounded-lg border-[3px] ${
                          result.available 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-red-500 bg-red-50'
                        }`}
                      >
                        <div className="text-center">
                          {result.available ? (
                            <Check className="mx-auto mb-3 text-green-500" size={32} />
                          ) : (
                            <AlertCircle className="mx-auto mb-3 text-red-500" size={32} />
                          )}
                          
                          <h5 className="text-xl font-bold mb-2">
                            {searchResults.domainName}{result.extension}
                          </h5>
                          
                          <p className={`text-lg font-semibold mb-4 ${
                            result.available ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {result.available ? '✅ Disponível' : '❌ Indisponível'}
                          </p>
                          
                          {result.available && (
                            <>
                              <div className="bg-white rounded-lg border-[2px] border-green-200 p-4 mb-4">
                                <p className="text-petrohost-darkText text-lg font-bold">
                                  💰 {result.price}
                                </p>
                              </div>
                              <Link 
                                to={`/checkout/${searchResults.domainName}${result.extension}`}
                                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors inline-block w-full"
                              >
                                🛒 Comprar Agora
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <button 
                      onClick={closeResults}
                      className="bg-petrohost-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      Fazer Nova Pesquisa
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Dominios;
