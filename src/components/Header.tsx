
import { Facebook, Instagram, Linkedin, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const megaMenuItems = {
    'Hospedagem Web': [
      { name: 'Hospedagem Compartilhada', href: '/hospedagem/compartilhada' },
      { name: 'Hospedagem WordPress', href: '/hospedagem/wordpress' },
      { name: 'Hospedagem SSD', href: '/hospedagem/ssd' }
    ],
    'Hospedagem Profissional': [
      { name: 'VPS Cloud', href: '/hospedagem/vps' },
      { name: 'Servidor Dedicado', href: '/hospedagem/dedicado' },
      { name: 'Cloud Hosting', href: '/hospedagem/cloud' }
    ],
    'Recursos Inclusos': [
      { name: 'SSL Grátis', href: '/hospedagem/ssl' },
      { name: 'Backup Automático', href: '/hospedagem/backup' },
      { name: 'Suporte 24/7', href: '/hospedagem/suporte' }
    ]
  };

  const subMenuItems = {
    'Domínio': [
      { name: 'Registrar Domínio', href: '/dominios/registrar' },
      { name: 'Transferir Domínio', href: '/dominios/transferir' },
      { name: 'Pesquisar Domínio', href: '/dominios/pesquisar' }
    ],
    'Email': [
      { name: 'Email Profissional', href: '/email/profissional' },
      { name: 'Gmail para Empresas', href: '/email/gmail' },
      { name: 'Webmail', href: '/email/webmail' }
    ],
    'Websites': [
      { name: 'Criador de Sites', href: '/websites/criador' },
      { name: 'Templates', href: '/websites/templates' },
      { name: 'E-commerce', href: '/websites/ecommerce' }
    ],
    'Servidores': [
      { name: 'VPS', href: '/servidores/vps' },
      { name: 'Dedicados', href: '/servidores/dedicados' },
      { name: 'Cloud', href: '/servidores/cloud' }
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
              <Link to="/" className="text-2xl font-bold text-petrohost-blue">
                Petrohost
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('Domínio')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/dominios" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                  Domínio <ChevronDown size={16} className="ml-1" />
                </Link>
                {activeDropdown === 'Domínio' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-petrohost-borderGray rounded-lg shadow-lg py-2 z-50">
                    {subMenuItems.Domínio.map((item) => (
                      <Link key={item.name} to={item.href} className="block px-4 py-2 text-petrohost-textGray hover:bg-petrohost-lightGray hover:text-petrohost-blue">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('Hospedagem')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/hospedagem" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                  Hospedagem <ChevronDown size={16} className="ml-1" />
                </Link>
                {activeDropdown === 'Hospedagem' && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-petrohost-borderGray rounded-lg shadow-lg p-6 z-50">
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(megaMenuItems).map(([category, items]) => (
                        <div key={category}>
                          <h4 className="font-bold text-petrohost-darkText mb-3">{category}</h4>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link to={item.href} className="text-petrohost-textGray hover:text-petrohost-blue flex items-center">
                                  <span className="w-2 h-2 bg-petrohost-yellow rounded-full mr-2"></span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {['Email', 'Websites', 'Servidores'].map((menu) => (
                <div 
                  key={menu}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(menu)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={`/${menu.toLowerCase()}`} className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                    {menu} <ChevronDown size={16} className="ml-1" />
                  </Link>
                  {activeDropdown === menu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-petrohost-borderGray rounded-lg shadow-lg py-2 z-50">
                      {subMenuItems[menu as keyof typeof subMenuItems]?.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-4 py-2 text-petrohost-textGray hover:bg-petrohost-lightGray hover:text-petrohost-blue">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link to="/sobre" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Sobre</Link>
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
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2.1.3. Barra de Pesquisa de Domínio (Domain Search Bar) - Alinhada à esquerda */}
      <div className="bg-petrohost-blue hidden md:block">
        <div className="container mx-auto px-4">
          <div className="py-6">
            {/* Campo de pesquisa alinhado à esquerda */}
            <div className="flex items-center justify-start space-x-4 mb-4">
              <input
                type="text"
                placeholder="Registre o seu domínio..."
                className="w-80 px-4 py-3 rounded-lg border-0 text-petrohost-darkText"
              />
              <button className="bg-petrohost-yellow text-petrohost-blue px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Pesquisar
              </button>
            </div>
            
            {/* Cards de TLDs alinhados à esquerda */}
            <div className="flex space-x-4">
              <div className="bg-white rounded-lg p-3 text-center min-w-[120px]">
                <div className="font-bold text-petrohost-darkText">.com</div>
                <div className="text-xs text-petrohost-textGray">1 Ano / Grátis disponível para registro!</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center min-w-[120px]">
                <div className="font-bold text-petrohost-darkText">.net</div>
                <div className="text-xs text-petrohost-textGray">1 Ano / Grátis disponível para registro!</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center min-w-[120px]">
                <div className="font-bold text-petrohost-darkText">.co.ao</div>
                <div className="text-xs text-petrohost-textGray">1 Ano / Grátis disponível para registro!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
