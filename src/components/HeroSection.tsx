
const HeroSection = () => {
  const techLogos = [
    { name: "Plesk", placeholder: "PL" },
    { name: "PHP", placeholder: "PHP" },
    { name: "WordPress", placeholder: "WP" },
    { name: "MySQL", placeholder: "MY" },
    { name: "Joomla", placeholder: "JM" },
    { name: "CloudLinux", placeholder: "CL" },
    { name: "Drupal", placeholder: "DR" },
    { name: "Python", placeholder: "PY" }
  ];

  return (
    <section className="bg-petrohost-blue py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Coluna Esquerda (Texto) - 60% */}
          <div className="lg:col-span-3 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Somos o Parceiro ideal para hospedar seus projetos.
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Os serviços de hospedagem premium que você precisa para criar um site rápido e de sucesso. 
              Comece a usar a hospedagem web em poucos minutos.
            </p>
            <button className="bg-petrohost-yellow text-petrohost-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105">
              Veja nossos planos
            </button>
          </div>

          {/* Coluna Direita (Visual) - 40% */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative">
              {/* Imagem Principal Placeholder */}
              <div className="relative">
                <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
                  Placeholder: agente-sorrindo.png
                </div>
                
                {/* Coluna de Logos de Tecnologia */}
                <div className="absolute -left-4 top-4 space-y-3">
                  {techLogos.slice(0, 4).map((tech, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-lg">
                      <div className="w-8 h-8 bg-petrohost-blue rounded flex items-center justify-center text-white font-bold text-xs">
                        {tech.placeholder}
                      </div>
                    </div>
                  ))}
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
