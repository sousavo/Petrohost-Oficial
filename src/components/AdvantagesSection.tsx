
const AdvantagesSection = () => {
  const advantages = [
    "Suporte técnico especializado 24/7",
    "Garantia de uptime de 99.9%",
    "Backup automático diário"
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 items-center">
          {/* Text Content - 55% */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Tudo o que seu <strong className="text-petrohost-blue">site</strong> precisa para ter sucesso
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nossa plataforma oferece todas as ferramentas e recursos necessários 
              para que seu projeto online alcance seu máximo potencial.
            </p>
            
            <div className="space-y-6 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-petrohost-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors">
              Saiba mais
            </button>
          </div>

          {/* Image Content - 45% */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Composição visual 3D com elementos de e-commerce" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
