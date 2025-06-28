import { Facebook, Instagram, Linkedin, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  return (
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
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Registre o seu domínio..."
                className="w-[650px] px-4 py-3 rounded-[3px] border-0 text-petrohost-darkText"
              />
              <button className="bg-petrohost-yellow text-petrohost-blue px-8 py-3 rounded-[3px] font-bold hover:bg-yellow-400 transition-colors">
                Pesquisar
              </button>
              <div className="bg-white rounded-[3px] p-3 min-w-[180px] flex items-center">
                <img src="/ao.png" alt=".com" className="h-8 mr-3" />
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
                <img src="/com.png" alt=".co.ao" className="h-8 mr-3" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-semibold text-petrohost-darkText leading-tight">Registra já</span>
                  <span className="text-[8px] text-petrohost-textGray leading-tight">disponível para registrar!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
