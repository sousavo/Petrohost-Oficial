
const HeroSection = () => {
  return (
    <section className="bg-petrohost-blue py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Somos o Parceiro ideal para hospedar seus projetos.
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Oferecemos soluções completas de hospedagem com tecnologia de ponta, 
              suporte 24/7 e a confiabilidade que seu negócio precisa para crescer online.
            </p>
            <button className="bg-petrohost-gold text-petrohost-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors transform hover:scale-105">
              Veja nossos planos
            </button>
          </div>

          {/* Visual Content - 40% */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative">
              {/* Main Image Placeholder */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Profissional sorrindo usando laptop" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
                
                {/* Technology Logos Column */}
                <div className="absolute -left-4 top-4 space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">
                      PL
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                      WP
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-xs">
                      PHP
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
                      MY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
