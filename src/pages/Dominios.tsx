
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Search, Loader2, Check, AlertCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

const Dominios = () => {
  const [domainQuery, setDomainQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    available: boolean;
    price?: string;
    message?: string;
    status?: string;
  } | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Simular verificação de usuário logado - você pode integrar com seu sistema de auth
  const isUserLoggedIn = true; // Mude para false para testar estado deslogado

  // Função para verificar domínio usando DNS lookup
  const checkDomainAvailability = async (domain: string) => {
    try {
      // Simular verificação DNS - em produção, isso seria feito via backend
      console.log(`Verificando DNS para: ${domain}`);
      
      // Simular delay de verificação DNS
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular resposta baseada em verificação DNS
      // 60% chance de estar disponível para demonstração
      const available = Math.random() > 0.4;
      
      return {
        domain: domain,
        available: available,
        status: available ? 'available' : 'unavailable',
        price: available ? getDomainPrice(domain) : undefined,
        message: available ? undefined : 'Este domínio já está registrado ou possui DNS ativo'
      };
      
    } catch (error) {
      console.error('Erro na verificação DNS:', error);
      return {
        domain: domain,
        available: false,
        status: 'error',
        message: 'Erro na verificação. Tente novamente.'
      };
    }
  };

  // Função para obter preço baseado na extensão
  const getDomainPrice = (domain: string) => {
    const extension = domain.split('.').pop()?.toLowerCase();
    const prices: { [key: string]: string } = {
      'ao': '25.000,00 Kz/ano',
      'com': '15.000,00 Kz/ano', 
      'net': '18.000,00 Kz/ano',
      'org': '20.000,00 Kz/ano',
      'co': '22.000,00 Kz/ano'
    };
    return prices[extension || 'com'] || '15.000,00 Kz/ano';
  };

  const handleDomainSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const cleanDomain = domainQuery.trim().toLowerCase();
    
    // Validação básica
    if (cleanDomain.length < 4 || !cleanDomain.includes('.')) {
      setSearchResult({
        domain: cleanDomain,
        available: false,
        status: 'error',
        message: 'Por favor, digite um nome de domínio válido (ex: meusite.com)'
      });
      setShowResult(true);
      return;
    }
    
    setIsSearching(true);
    setShowResult(true);
    setSearchResult(null);
    
    const result = await checkDomainAvailability(cleanDomain);
    setSearchResult(result);
    setIsSearching(false);
  };

  const closeResult = () => {
    setShowResult(false);
    setSearchResult(null);
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
              Encontre e registre o nome de domínio ideal para a sua marca. Verificação em tempo real!
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
                    placeholder="Digite o domínio que deseja verificar (ex: meusite.com)"
                    className="w-full px-6 py-4 text-lg border-[3px] border-gray-200 rounded-lg focus:border-petrohost-blue focus:outline-none transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="bg-petrohost-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSearching ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                  {isSearching ? 'Verificando...' : 'Verificar'}
                </button>
              </div>

              <div className="mt-4 text-center text-sm text-petrohost-textGray">
                <p>💡 <strong>Dica:</strong> A verificação é feita em tempo real através de consulta DNS</p>
              </div>
            </form>
          </div>

          {/* Extensões Populares */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-petrohost-darkText text-center mb-8">
              Extensões Mais Populares
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { ext: '.ao', price: '25.000,00 Kz', popular: true },
                { ext: '.com', price: '15.000,00 Kz', popular: true },
                { ext: '.net', price: '18.000,00 Kz', popular: false },
                { ext: '.org', price: '20.000,00 Kz', popular: false },
                { ext: '.co', price: '22.000,00 Kz', popular: false }
              ].map((item) => (
                <div 
                  key={item.ext}
                  className={`bg-white rounded-lg border-[3px] p-4 text-center transition-all hover:scale-105 cursor-pointer ${
                    item.popular ? 'border-petrohost-blue shadow-md' : 'border-gray-200'
                  }`}
                  onClick={() => setDomainQuery(`meusite${item.ext}`)}
                >
                  {item.popular && (
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
        </div>
      </main>

      {/* Resultado da Pesquisa - Modal */}
      {showResult && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300"
            onClick={closeResult}
          />
          
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] shadow-2xl z-[70] transition-transform duration-500 border-t-[3px] border-petrohost-blue">
            <div className="p-8 max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-petrohost-darkText">Resultado da Verificação</h3>
                <button 
                  onClick={closeResult}
                  className="text-petrohost-textGray hover:text-petrohost-darkText transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="text-center">
                {isSearching ? (
                  <div className="py-12">
                    <Loader2 className="animate-spin mx-auto mb-4 text-petrohost-blue" size={48} />
                    <p className="text-petrohost-textGray text-lg">
                      🔍 Verificando DNS para <strong>{domainQuery}</strong>...
                    </p>
                    <p className="text-sm text-petrohost-textGray mt-2">
                      Consultando servidores de nome e registros DNS
                    </p>
                  </div>
                ) : searchResult ? (
                  <div className="py-8">
                    {searchResult.status === 'available' ? (
                      <div className="border-[3px] border-green-500 rounded-lg p-6 bg-green-50">
                        <Check className="mx-auto mb-4 text-green-500" size={64} />
                        <h4 className="text-2xl font-bold text-green-600 mb-2">🎉 Disponível!</h4>
                        <p className="text-petrohost-textGray text-lg mb-6">
                          O domínio <strong>{searchResult.domain}</strong> está disponível para registro!
                        </p>
                        {searchResult.price && (
                          <div className="bg-white rounded-lg border-[3px] border-green-200 p-6 mb-6">
                            <p className="text-petrohost-darkText text-xl font-bold">
                              💰 Preço: {searchResult.price}
                            </p>
                          </div>
                        )}
                        <div className="flex gap-4 justify-center">
                          <Link 
                            to={`/checkout/${searchResult.domain}`}
                            className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                          >
                            🛒 Comprar Agora
                          </Link>
                          <button 
                            onClick={closeResult}
                            className="border-[3px] border-gray-300 text-petrohost-textGray px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="border-[3px] border-red-500 rounded-lg p-6 bg-red-50">
                        <AlertCircle className="mx-auto mb-4 text-red-500" size={64} />
                        <h4 className="text-2xl font-bold text-red-600 mb-2">
                          {searchResult.status === 'error' ? '⚠️ Erro' : '🔒 Indisponível'}
                        </h4>
                        <p className="text-petrohost-textGray text-lg mb-6">
                          {searchResult.status === 'error' ? (
                            searchResult.message
                          ) : (
                            <>O domínio <strong>{searchResult.domain}</strong> não está disponível.</>
                          )}
                        </p>
                        {searchResult.message && searchResult.status !== 'error' && (
                          <p className="text-sm text-petrohost-textGray mb-4">{searchResult.message}</p>
                        )}
                        <div className="flex gap-4 justify-center">
                          <button 
                            onClick={() => {
                              setSearchResult(null);
                              setDomainQuery('');
                            }}
                            className="bg-petrohost-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                          >
                            🔍 Tentar Outro
                          </button>
                          <button 
                            onClick={closeResult}
                            className="border-[3px] border-gray-300 text-petrohost-textGray px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Dominios;
