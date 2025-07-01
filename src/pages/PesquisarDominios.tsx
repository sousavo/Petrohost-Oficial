
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Search, Loader2, Check, AlertCircle, Globe, Sparkles } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const PesquisarDominios = () => {
  const [domainQuery, setDomainQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    domainName: string;
    extensions: {
      extension: string;
      available: boolean;
      price: string;
      priceValue: number;
      popular?: boolean;
    }[];
  } | null>(null);
  const [showCard, setShowCard] = useState(false);
  const [cardAnimation, setCardAnimation] = useState('');
  const { addItem } = useCart();

  const extensions = [
    { ext: '.ao', price: '25.000,00 Kz', value: 25000, popular: true },
    { ext: '.co.ao', price: '35.000,00 Kz', value: 35000 },
    { ext: '.edu.ao', price: '35.000,00 Kz', value: 35000 },
    { ext: '.it.ao', price: '5.000,00 Kz', value: 5000 },
    { ext: '.com', price: '21.500,00 Kz', value: 21500, popular: true },
    { ext: '.net', price: '25.500,00 Kz', value: 25500 },
    { ext: '.org', price: '35.000,00 Kz', value: 35000 },
    { ext: '.info', price: '16.000,00 Kz', value: 16000 }
  ];

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const cleanDomain = domainQuery.trim().toLowerCase();
    
    if (cleanDomain.length < 2) {
      toast.error('Digite pelo menos 2 caracteres');
      return;
    }

    // Animação do card subindo
    setCardAnimation('animate-slide-in-from-bottom');
    setShowCard(true);
    
    setTimeout(() => {
      setCardAnimation('');
      setIsSearching(true);
    }, 800);

    // Simular pesquisa DNS
    setTimeout(async () => {
      const results = extensions.map(ext => ({
        extension: ext.ext,
        available: Math.random() > 0.4,
        price: ext.price,
        priceValue: ext.value,
        popular: ext.popular
      }));
      
      setSearchResults({
        domainName: cleanDomain,
        extensions: results
      });
      setIsSearching(false);
    }, 2000);
  };

  const handleAddToCart = (domain: string, extension: string, price: string, priceValue: number) => {
    addItem({
      id: `${domain}${extension}`,
      name: `${domain}${extension}`,
      price: priceValue,
      type: 'domain',
      years: 1
    });
    
    toast.success(`${domain}${extension} adicionado ao carrinho!`, {
      description: `Preço: ${price}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-petrohost-blue/10 text-petrohost-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Pesquisa Inteligente de Domínios
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-petrohost-darkText mb-6">
              Encontre o <span className="text-petrohost-blue">Domínio Perfeito</span>
            </h1>
            <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto">
              Digite apenas o nome desejado e descubra todas as extensões disponíveis em tempo real
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex gap-4 p-2 bg-white rounded-[3px] border-[3px] border-petrohost-blue shadow-2xl">
                <div className="flex-1">
                  <input
                    type="text"
                    value={domainQuery}
                    onChange={(e) => setDomainQuery(e.target.value)}
                    placeholder="Digite o nome do domínio (ex: meusite)"
                    className="w-full px-6 py-6 text-xl rounded-[3px] focus:outline-none font-medium"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="bg-petrohost-blue text-white px-8 py-6 rounded-[3px] font-bold text-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {isSearching ? <Loader2 className="animate-spin" size={24} /> : <Search size={24} />}
                  {isSearching ? 'Pesquisando...' : 'Pesquisar'}
                </button>
              </div>
            </form>
          </div>

          {/* Results Card */}
          {showCard && (
            <div className={`max-w-6xl mx-auto ${cardAnimation} transition-all duration-800`}>
              <div className="bg-white rounded-[3px] border-[3px] border-petrohost-borderGray shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-petrohost-blue to-blue-600 text-white p-8 text-center">
                  <Globe className="mx-auto mb-4" size={48} />
                  <h2 className="text-3xl font-bold mb-2">
                    {searchResults ? `Resultados para "${searchResults.domainName}"` : 'Pesquisando...'}
                  </h2>
                  <p className="text-blue-100">
                    {isSearching ? 'Verificando disponibilidade em tempo real...' : 'Todas as extensões verificadas'}
                  </p>
                </div>

                <div className="p-8">
                  {isSearching ? (
                    <div className="text-center py-16">
                      <Loader2 className="animate-spin mx-auto mb-6 text-petrohost-blue" size={64} />
                      <p className="text-xl text-petrohost-textGray">
                        Consultando servidores DNS...
                      </p>
                    </div>
                  ) : searchResults ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {searchResults.extensions.map((result, idx) => (
                        <div 
                          key={idx}
                          className={`relative p-6 rounded-[3px] border-[3px] transition-all duration-300 hover:scale-105 ${
                            result.available 
                              ? 'border-green-500 bg-green-50 hover:shadow-xl' 
                              : 'border-red-300 bg-red-50 opacity-60'
                          }`}
                        >
                          {result.popular && result.available && (
                            <div className="absolute -top-2 -right-2 bg-petrohost-yellow text-petrohost-blue px-3 py-1 rounded-full text-xs font-bold">
                              Popular
                            </div>
                          )}
                          
                          <div className="text-center">
                            {result.available ? (
                              <Check className="mx-auto mb-4 text-green-500" size={40} />
                            ) : (
                              <AlertCircle className="mx-auto mb-4 text-red-500" size={40} />
                            )}
                            
                            <h3 className="text-2xl font-bold mb-2 text-petrohost-darkText">
                              {searchResults.domainName}{result.extension}
                            </h3>
                            
                            <p className={`text-lg font-semibold mb-4 ${
                              result.available ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {result.available ? '✅ Disponível' : '❌ Indisponível'}
                            </p>
                            
                            {result.available && (
                              <>
                                <div className="bg-white rounded-[3px] border-[2px] border-green-200 p-4 mb-6">
                                  <p className="text-petrohost-darkText text-xl font-bold">
                                    {result.price}
                                  </p>
                                  <p className="text-sm text-petrohost-textGray">por ano</p>
                                </div>
                                <button
                                  onClick={() => handleAddToCart(
                                    searchResults.domainName,
                                    result.extension,
                                    result.price,
                                    result.priceValue
                                  )}
                                  className="w-full bg-green-500 text-white px-6 py-3 rounded-[3px] font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                                >
                                  Adicionar ao Carrinho
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          {/* Extensions Preview */}
          {!showCard && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-petrohost-darkText text-center mb-8">
                Extensões Populares
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {extensions.filter(ext => ext.popular).map((item) => (
                  <div 
                    key={item.ext}
                    className="bg-white rounded-[3px] border-[3px] border-petrohost-blue p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
                    onClick={() => setDomainQuery(`example${item.ext}`)}
                  >
                    <div className="font-bold text-xl text-petrohost-darkText mb-2">{item.ext}</div>
                    <div className="text-sm text-petrohost-textGray">{item.price}</div>
                    <div className="mt-2">
                      <span className="bg-petrohost-yellow text-petrohost-blue text-xs px-2 py-1 rounded-full font-bold">
                        Popular
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PesquisarDominios;
