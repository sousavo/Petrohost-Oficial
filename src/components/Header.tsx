
import { Facebook, Instagram, Linkedin, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-petrohost-blue">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-petrohost-gold transition-colors">
                <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                  <Facebook size={12} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-petrohost-gold transition-colors">
                <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                  <Linkedin size={12} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-petrohost-gold transition-colors">
                <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                  <Instagram size={12} />
                </div>
              </a>
            </div>
            <div className="text-white text-sm">
              (11) 99999-9999
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
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
              <a href="#" className="text-gray-700 hover:text-petrohost-blue font-medium transition-colors">Domínio</a>
              <a href="#" className="text-gray-700 hover:text-petrohost-blue font-medium transition-colors">Hospedagem</a>
              <a href="#" className="text-gray-700 hover:text-petrohost-blue font-medium transition-colors">Email</a>
              <a href="#" className="text-gray-700 hover:text-petrohost-blue font-medium transition-colors">Websites</a>
              <a href="#" className="text-gray-700 hover:text-petrohost-blue font-medium transition-colors">Servidores</a>
              <a href="#" className="text-gray-700 hover:text-petrohost-blue font-medium transition-colors">Sobre</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <ShoppingCart className="text-gray-700 hover:text-petrohost-gold cursor-pointer transition-colors" size={20} />
              <a href="#" className="text-gray-700 hover:text-petrohost-blue font-medium transition-colors">Entrar</a>
              <User className="text-gray-700 hover:text-petrohost-gold cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
