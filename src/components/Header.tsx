
import { Facebook, Instagram, Linkedin, ShoppingCart, User, ChevronDown, Menu, X, Search, Loader2, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  } | null>(null);
  const [showSearchCard, setShowSearchCard] = useState(false);

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

  // Simular pesquisa de domínio (em produção, seria uma chamada API real)
  const searchDomain = async (domain: string) => {
    setIsSearching(true);
    setShowSearchCard(true);
    
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simular resultado (70% chance de estar disponível)
    const available = Math.random() > 0.3;
    const result = {
      domain: domain,
      available: available,
      price: available ? '2.500,00 Kz/ano' : undefined,
      message: available ? undefined : 'Este domínio já está registrado'
    };
    
    setSearchResult(result);
    setIsSearching(false);
  };

  const handleDomainSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (domainQuery.trim()) {
      searchDomain(domainQuery.trim());
    }
  };

  const closeSearchCard = () => {
    setShowSearchCard(false);
    setSearchResult(null);
    setIsSearching(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        {/* 2.1.1. Barra Superior (Top Bar) */}
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

        {/* 2.1.2. Cabeçalho Principal (Main Header) */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/">
                  <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
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
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-petrohost-borderGray rounded-[3px] shadow-lg py-2 z-50">
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
                    <div className="absolute top-full left-0 mt-2 w-[400px] bg-white border border-petrohost-borderGray rounded-[3px] shadow-lg p-6 z-50">
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

                {/* Email - Link simples sem submenu */}
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
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-petrohost-borderGray rounded-[3px] shadow-lg py-2 z-50">
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
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-petrohost-borderGray rounded-[3px] shadow-lg py-2 z-50">
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
              <div className="flex items-center space-x-4">
                <ShoppingCart className="text-petrohost-textGray hover:text-petrohost-yellow cursor-pointer transition-colors" size={20} />
                <Link to="/cliente" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Área do Cliente</Link>
                <Link to="/login" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Entrar</Link>
                <div className="w-8 h-8 border border-petrohost-borderGray rounded-full flex items-center justify-center">
                  <User className="text-petrohost-textGray hover:text-petrohost-yellow cursor-pointer transition-colors" size={16} />
                </div>
                
                {/* Mobile Menu Button */}
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
                  <Link to="/cliente" className="block text-petrohost-textGray hover:text-petrohost-blue font-medium">Área do Cliente</Link>
                  <Link to="/login" className="block text-petrohost-blue font-bold">Entrar</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2.1.3. Barra de Pesquisa de Domínio (Domain Search Bar) - Alinhada à esquerda */}
        <div className="bg-petrohost-blue hidden md:block">
          <div className="container mx-auto px-4">
            <div className="py-6">
              {/* Campo de pesquisa, botão e TLDs em uma única linha */}
              <form onSubmit={handleDomainSearch} className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Registre o seu domínio..."
                  value={domainQuery}
                  onChange={(e) => setDomainQuery(e.target.value)}
                  className="w-[650px] px-4 py-3 rounded-[3px] border-0 text-petrohost-darkText"
                />
                <button 
                  type="submit"
                  className="bg-petrohost-yellow text-petrohost-blue px-8 py-3 rounded-[3px] font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
                >
                  <Search size={18} />
                  Pesquisar
                </button>
                <div className="bg-white rounded-[3px] p-3 min-w-[180px] flex items-center">
                  <img src="/ao.png" alt=".ao" className="h-8 mr-3" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-semibold text-petrohost-darkText leading-tight">Registra já</span>
                    <span className="text-[8px] text-petrohost-textGray leading-tight">disponível para registrar!</span>
                  </div>
                </div>
                <div className="bg-white rounded-[3px] p-3 min-w-[180px] flex items-center">
                  <img src="/net.png" alt=".net" className="h-8 mr-3" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-semibold text-petrohost-darkText leading-tight">Registra já</span>
                    <span className="text-[8px] text-petrohost-textGray leading-tight">disponível para registrar!</span>
                  </div>
                </div>
                <div className="bg-white rounded-[3px] p-3 min-w-[180px] flex items-center">
                  <img src="/com.png" alt=".com" className="h-8 mr-3" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-semibold text-petrohost-darkText leading-tight">Registra já</span>
                    <span className="text-[8px] text-petrohost-textGray leading-tight">disponível para registrar!</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Card de Resultado da Pesquisa - Aparece de baixo para cima */}
      {showSearchCard && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300"
            onClick={closeSearchCard}
          />
          
          {/* Card */}
          <div className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] shadow-2xl z-[70] transition-transform duration-500 ${showSearchCard ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-8 max-w-2xl mx-auto">
              {/* Header do Card */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-petrohost-darkText">Resultado da Pesquisa</h3>
                <button 
                  onClick={closeSearchCard}
                  className="text-petrohost-textGray hover:text-petrohost-darkText transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Conteúdo do Card */}
              <div className="text-center">
                {isSearching ? (
                  <div className="py-12">
                    <Loader2 className="animate-spin mx-auto mb-4 text-petrohost-blue" size={48} />
                    <p className="text-petrohost-textGray text-lg">Verificando disponibilidade de <strong>{domainQuery}</strong>...</p>
                  </div>
                ) : searchResult ? (
                  <div className="py-8">
                    {searchResult.available ? (
                      <div>
                        <Check className="mx-auto mb-4 text-green-500" size={64} />
                        <h4 className="text-2xl font-bold text-green-600 mb-2">Domínio Disponível!</h4>
                        <p className="text-petrohost-textGray text-lg mb-6">
                          <strong>{searchResult.domain}</strong> está disponível para registro.
                        </p>
                        {searchResult.price && (
                          <div className="bg-petrohost-lightGray rounded-[3px] p-6 mb-6">
                            <p className="text-petrohost-darkText text-xl font-bold">
                              Preço: {searchResult.price}
                            </p>
                          </div>
                        )}
                        <div className="flex gap-4 justify-center">
                          <button className="bg-petrohost-blue text-white px-8 py-3 rounded-[3px] font-bold hover:opacity-90 transition-colors">
                            Registrar Agora
                          </button>
                          <button 
                            onClick={closeSearchCard}
                            className="border border-petrohost-borderGray text-petrohost-textGray px-8 py-3 rounded-[3px] font-bold hover:bg-petrohost-lightGray transition-colors"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <AlertCircle className="mx-auto mb-4 text-red-500" size={64} />
                        <h4 className="text-2xl font-bold text-red-600 mb-2">Domínio Indisponível</h4>
                        <p className="text-petrohost-textGray text-lg mb-6">
                          <strong>{searchResult.domain}</strong>: {searchResult.message}
                        </p>
                        <div className="flex gap-4 justify-center">
                          <button 
                            onClick={() => {
                              setSearchResult(null);
                              setDomainQuery('');
                            }}
                            className="bg-petrohost-blue text-white px-8 py-3 rounded-[3px] font-bold hover:opacity-90 transition-colors"
                          >
                            Tentar Outro Domínio
                          </button>
                          <button 
                            onClick={closeSearchCard}
                            className="border border-petrohost-borderGray text-petrohost-textGray px-8 py-3 rounded-[3px] font-bold hover:bg-petrohost-lightGray transition-colors"
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
