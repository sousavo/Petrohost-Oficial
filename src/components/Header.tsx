
import { Facebook, Instagram, Linkedin, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* 2.1.1. Barra Superior (Top Bar) */}
      <div className="bg-petrohost-blue">
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
              <div className="text-2xl font-bold text-petrohost-blue">
                Petrohost
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                Domínio <ChevronDown size={16} className="ml-1" />
              </a>
              <a href="#" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors flex items-center">
                Hospedagem <ChevronDown size={16} className="ml-1" />
              </a>
              <a href="#" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Email</a>
              <a href="#" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Websites</a>
              <a href="#" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Servidores</a>
              <a href="#" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Sobre</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <ShoppingCart className="text-petrohost-textGray hover:text-petrohost-yellow cursor-pointer transition-colors" size={20} />
              <a href="#" className="text-petrohost-textGray hover:text-petrohost-blue font-medium transition-colors">Entrar</a>
              <div className="w-8 h-8 border border-petrohost-borderGray rounded-full flex items-center justify-center">
                <User className="text-petrohost-textGray hover:text-petrohost-yellow cursor-pointer transition-colors" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2.1.3. Barra de Pesquisa de Domínio (Domain Search Bar) */}
      <div className="bg-petrohost-blue">
        <div className="container mx-auto px-4">
          <div className="py-6 flex flex-col items-center space-y-4">
            {/* Campo de pesquisa */}
            <div className="flex items-center space-x-4 w-full max-w-2xl">
              <input
                type="text"
                placeholder="Registre o seu domínio..."
                className="flex-1 px-4 py-3 rounded-lg border-0 text-petrohost-darkText"
              />
              <button className="bg-petrohost-yellow text-petrohost-blue px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Pesquisar
              </button>
            </div>
            
            {/* Cards de TLDs */}
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
