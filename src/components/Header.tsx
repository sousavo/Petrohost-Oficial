import { Facebook, Instagram, Linkedin, User, ChevronDown, Menu, X, Search, Loader2, Check, AlertCircle, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [domainQuery, setDomainQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    available: boolean;
    price?: string;
    message?: string;
    status?: string;
  } | null>(null);
  const [showSearchCard, setShowSearchCard] = useState(false);
  const { itemCount } = useCart();

  const megaMenuItems = [
    { name: 'Hospedagem para WordPress', href: '/hospedagem/wordpress' },
    { name: 'Hospedagem Gerenciada para WordPress', href: '/hospedagem/wordpress-gerenciada' },
    { name: 'Hospedagem cPanel', href: '/hospedagem/cpanel' }
  ];

  const subMenuItems = {
    'Domínio': [
      { name: 'Comprar um domínio', href: '/dominios/comprar' },
      { name: 'Transferência de Domínio', href: '/dominios/transferir' }
    ],
    'Websites': [
      { name: 'Criação de Site', href: '/websites/criacao' },
      { name: 'Hospedagem para WordPress', href: '/websites/wordpress' }
    ],
    'Servidores': [
      { name: 'Hospedagem VPS Gerenciada', href: '/servidores/vps-gerenciada' },
      { name: 'Hospedagem VPS', href: '/servidores/vps' },
      { name: 'Servidores Dedicados', href: '/servidores/dedicados' },
      { name: 'Servidor Virtual Dedicado', href: '/servidores/virtual-dedicado' }
    ],
    'Sobre': [
      { name: 'Contacto', href: '/contato' },
      { name: 'Programa de Afiliado', href: '/sobre/afiliado' },
      { name: 'Base de conhecimento', href: '/sobre/conhecimento' },
    ]
  };

  const searchDomain = async (domain: string) => {
    if (!domain.trim()) return;
    
    setIsSearching(true);
    setShowSearchCard(true);
    setSearchResult(null);
    
    try {
      console.log(`Verificando domínio: ${domain}`);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const available = Math.random() > 0.3;
      const result = {
        domain: domain,
        available: available,
        status: available ? 'available' : 'unavailable',
        price: available ? getRandomPrice() : undefined,
        message: available ? undefined : 'Este domínio já está registrado ou não está disponível'
      };
      
      setSearchResult(result);
      
      console.log('Resultado da pesquisa:', result);
      
    } catch (error) {
      console.error('Erro na pesquisa:', error);
      setSearchResult({
        domain: domain,
        available: false,
        status: 'error',
        message: 'Erro de conexão. Tente novamente mais tarde.'
      });
    } finally {
      setIsSearching(false);
    }
  };

  const getRandomPrice = () => {
    const prices = ['25.000,00 Kz/ano', '15.000,00 Kz/ano', '35.000,00 Kz/ano', '20.000,00 Kz/ano'];
    return prices[Math.floor(Math.random() * prices.length)];
  };

  const handleDomainSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const cleanDomain = domainQuery.trim().toLowerCase();
    
    if (cleanDomain.length < 4 || !cleanDomain.includes('.')) {
      setSearchResult({
        domain: cleanDomain,
        available: false,
        status: 'error',
        message: 'Por favor, digite um nome de domínio válido (ex: meusite.com)'
      });
      setShowSearchCard(true);
      return;
    }
    
    searchDomain(cleanDomain);
  };

  const closeSearchCard = () => {
    setShowSearchCard(false);
    setSearchResult(null);
    setIsSearching(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        {/* Top Bar */}
        <div className="bg-petrohost-blue hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2">
              <div className="flex space-x-3">
                <a href="#" className="text-white hover:text-petrohost-yellow transition-colors">
                  <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                    <Facebook size={12} />
                  </div>
                </a>
                <a href="#" className="text-white hover:text-petrohost-yellow transition-colors">
                  <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                    <Linkedin size={12} />
                  </div>
                </a>
                <a href="#" className="text-white hover:text-petrohost-yellow transition-colors">
                  <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                    <Instagram size={12} />
                  </div>
                </a>
              </div>
              <div className="text-white text-sm">
                (+244) 923 000 143
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/">
                  <img src="/logo.png" alt="Logo" className="h-10 md:h-14 w-auto" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('Domínio')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to="/dominios" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                    Domínio <ChevronDown size={16} className="ml-1" />
                  </Link>
                  {activeDropdown === 'Domínio' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border-[3px] border-petrohost-borderGray rounded-[3px] shadow-lg py-2 z-50">
                      {subMenuItems.Domínio.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-4 py-2 text-petrohost-textGray hover:bg-petrohost-lightGray hover:text-petrohost-blue">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('Hospedagem')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to="/hospedagem" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                    Hospedagem <ChevronDown size={16} className="ml-1" />
                  </Link>
                  {activeDropdown === 'Hospedagem' && (
                    <div className="absolute top-full left-0 mt-2 w-[400px] bg-white border-[3px] border-petrohost-borderGray rounded-[3px] shadow-lg p-6 z-50">
                      <div className="space-y-3">
                        {megaMenuItems.map((item) => (
                          <Link key={item.name} to={item.href} className="block text-petrohost-textGray hover:text-petrohost-blue">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/email" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">
                  Email
                </Link>

                {['Websites', 'Servidores'].map((menu) => (
                  <div 
                    key={menu}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(menu)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link to={`/${menu.toLowerCase()}`} className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                      {menu} <ChevronDown size={16} className="ml-1" />
                    </Link>
                    {activeDropdown === menu && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white border-[3px] border-petrohost-borderGray rounded-[3px] shadow-lg py-2 z-50">
                        {subMenuItems[menu as keyof typeof subMenuItems]?.map((item) => (
                          <Link key={item.name} to={item.href} className="block px-4 py-2 text-petrohost-textGray hover:bg-petrohost-lightGray hover:text-petrohost-blue">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('Sobre')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to="/sobre" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                    Sobre <ChevronDown size={16} className="ml-1" />
                  </Link>
                  {activeDropdown === 'Sobre' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border-[3px] border-petrohost-borderGray rounded-[3px] shadow-lg py-2 z-50">
                      {subMenuItems.Sobre.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-4 py-2 text-petrohost-textGray hover:bg-petrohost-lightGray hover:text-petrohost-blue">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>

              {/* Actions */}
              <div className="flex items-center space-x-2 md:space-x-4">
                {/* Cart */}
                <Link to="/carrinho-checkout" className="relative">
                  <ShoppingCart className="text-petrohost-textGray hover:text-petrohost-blue cursor-pointer transition-colors" size={20} />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
                
                <Link to="/login" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors hidden sm:block">
                  Entrar
                </Link>
                
                <div className="w-8 h-8 border-[3px] border-petrohost-borderGray rounded-full flex items-center justify-center">
                  <User className="text-petrohost-textGray hover:text-petrohost-yellow cursor-pointer transition-colors" size={16} />
                </div>
                
                <button 
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="text-petrohost-textGray" size={24} />
                  ) : (
                    <Menu className="text-petrohost-textGray" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-petrohost-borderGray">
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-4">
                  <Link to="/dominios" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Domínio</Link>
                  <Link to="/hospedagem" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Hospedagem</Link>
                  <Link to="/email" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Email</Link>
                  <Link to="/websites" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Websites</Link>
                  <Link to="/servidores" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Servidores</Link>
                  <Link to="/sobre" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Sobre</Link>
                  <Link to="/contato" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Contato</Link>
                  <Link to="/login" className="block text-petrohost-blue font-bold">Entrar</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Domain Search Bar */}
        <div className="bg-petrohost-blue hidden md:block">
          <div className="container mx-auto px-4">
            <div className="py-4 md:py-6">
              <form onSubmit={handleDomainSearch} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 w-full max-w-full md:max-w-[650px]">
                  <input
                    type="text"
                    placeholder="Registre o seu domínio..."
                    value={domainQuery}
                    onChange={(e) => setDomainQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-[3px] border-[3px] border-transparent focus:border-petrohost-yellow text-petrohost-darkText outline-none transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="bg-petrohost-yellow text-petrohost-blue px-6 md:px-8 py-3 rounded-[3px] font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2 disabled:opacity-50 w-full md:w-auto justify-center"
                >
                  {isSearching ? <Loader2 className="animate-spin" size={18} /> : <Search size={18} />}
                  {isSearching ? 'Pesquisando...' : 'Pesquisar'}
                </button>
                
                {/* Domain Extensions - Hidden on mobile */}
                <div className="hidden lg:flex space-x-2">
                  <div className="bg-white rounded-[3px] border-[3px] border-white p-3 min-w-[160px] flex items-center">
                    <img src="/ao.png" alt=".ao" className="h-6 md:h-8 mr-2 md:mr-3" />
                    <div className="flex flex-col">
                      <span className="text-[8px] font-semibold text-petrohost-darkText leading-tight">Registra já</span>
                      <span className="text-[8px] text-petrohost-textGray leading-tight">disponível para registrar!</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-[3px] border-[3px] border-white p-3 min-w-[160px] flex items-center">
                    <img src="/net.png" alt=".net" className="h-6 md:h-8 mr-2 md:mr-3" />
                    <div className="flex flex-col">
                      <span className="text-[8px] font-semibold text-petrohost-darkText leading-tight">Registra já</span>
                      <span className="text-[8px] text-petrohost-textGray leading-tight">disponível para registrar!</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-[3px] border-[3px] border-white p-3 min-w-[160px] flex items-center">
                    <img src="/com.png" alt=".com" className="h-6 md:h-8 mr-2 md:mr-3" />
                    <div className="flex flex-col">
                      <span className="text-[8px] font-semibold text-petrohost-darkText leading-tight">Registra já</span>
                      <span className="text-[8px] text-petrohost-textGray leading-tight">disponível para registrar!</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Search Result Card */}
      {showSearchCard && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300"
            onClick={closeSearchCard}
          />
          
          <div className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] shadow-2xl z-[70] transition-transform duration-500 border-t-[3px] border-petrohost-blue ${showSearchCard ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-4 md:p-8 max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-petrohost-darkText">Resultado da Pesquisa</h3>
                <button 
                  onClick={closeSearchCard}
                  className="text-petrohost-textGray hover:text-petrohost-darkText transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="text-center">
                {isSearching ? (
                  <div className="py-8 md:py-12">
                    <Loader2 className="animate-spin mx-auto mb-4 text-petrohost-blue" size={48} />
                    <p className="text-petrohost-textGray text-base md:text-lg">Verificando <strong>{domainQuery}</strong>...</p>
                  </div>
                ) : searchResult ? (
                  <div className="py-6 md:py-8">
                    {searchResult.status === 'available' ? (
                      <div className="border-[3px] border-green-500 rounded-[3px] p-4 md:p-6 bg-green-50">
                        <Check className="mx-auto mb-4 text-green-500" size={48} md:size={64} />
                        <h4 className="text-xl md:text-2xl font-bold text-green-600 mb-2">🎉 Parabéns!</h4>
                        <p className="text-petrohost-textGray text-base md:text-lg mb-4 md:mb-6">
                          O domínio <strong>{searchResult.domain}</strong> está disponível para registro!
                        </p>
                        {searchResult.price && (
                          <div className="bg-white rounded-[3px] border-[3px] border-green-200 p-4 md:p-6 mb-4 md:mb-6">
                            <p className="text-petrohost-darkText text-lg md:text-xl font-bold">
                              Preço: {searchResult.price}
                            </p>
                          </div>
                        )}
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                          <button className="bg-green-500 text-white px-6 md:px-8 py-3 rounded-[3px] border-[3px] border-green-500 font-bold hover:bg-green-600 transition-colors">
                            Registrar Agora
                          </button>
                          <button 
                            onClick={closeSearchCard}
                            className="border-[3px] border-petrohost-borderGray text-petrohost-textGray px-6 md:px-8 py-3 rounded-[3px] font-bold hover:bg-petrohost-lightGray transition-colors"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="border-[3px] border-red-500 rounded-[3px] p-4 md:p-6 bg-red-50">
                        <AlertCircle className="mx-auto mb-4 text-red-500" size={48} md:size={64} />
                        <h4 className="text-xl md:text-2xl font-bold text-red-600 mb-2">
                          {searchResult.status === 'error' ? 'Erro na Pesquisa' : '🙁 Que pena!'}
                        </h4>
                        <p className="text-petrohost-textGray text-base md:text-lg mb-4 md:mb-6">
                          {searchResult.status === 'error' ? (
                            searchResult.message
                          ) : (
                            <>O domínio <strong>{searchResult.domain}</strong> não está disponível.</>
                          )}
                        </p>
                        {searchResult.message && searchResult.status !== 'error' && (
                          <p className="text-sm text-petrohost-textGray mb-4">{searchResult.message}</p>
                        )}
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                          <button 
                            onClick={() => {
                              setSearchResult(null);
                              setDomainQuery('');
                            }}
                            className="bg-petrohost-blue text-white px-6 md:px-8 py-3 rounded-[3px] border-[3px] border-petrohost-blue font-bold hover:opacity-90 transition-colors"
                          >
                            Tentar Outro Domínio
                          </button>
                          <button 
                            onClick={closeSearchCard}
                            className="border-[3px] border-petrohost-borderGray text-petrohost-textGray px-6 md:px-8 py-3 rounded-[3px] font-bold hover:bg-petrohost-lightGray transition-colors"
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
    </>
  );
};

export default Header;
