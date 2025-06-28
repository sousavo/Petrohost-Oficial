import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-petrohost-lightGray to-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="text-center mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-petrohost-blue leading-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-petrohost-darkText mb-4">
              Página não encontrada
            </h2>
            <p className="text-lg text-petrohost-textGray">
              A página que você está procurando não existe ou foi movida.
            </p>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-r from-petrohost-blue to-[#045488] rounded-[3px] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img src="/support.png" alt="Suporte 24h" className="w-24 h-24 object-cover rounded-[3px]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Precisa de ajuda?
                </h3>
                <p className="text-white opacity-90 mb-4 max-w-md">
                  Nossa equipe técnica está disponível 24/7 para ajudar você a encontrar a solução ideal.
                </p>
                <Link 
                  to="/contato" 
                  className="bg-petrohost-yellow text-black px-6 py-3 rounded-[3px] font-bold hover:bg-[#e6a700] transition-colors inline-flex items-center gap-2"
                >
                  Falar com Suporte
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
