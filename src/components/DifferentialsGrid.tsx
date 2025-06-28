
const DifferentialsGrid = () => {
  const differentials = [
    {
      icon: "⚡",
      title: "Performance Superior",
      description: "Servidores otimizados para máxima velocidade e eficiência"
    },
    {
      icon: "🛡️",
      title: "Segurança Avançada",
      description: "Proteção completa com firewall e monitoramento 24/7"
    },
    {
      icon: "🎧",
      title: "Suporte Especializado",
      description: "Equipe técnica disponível 24 horas para te ajudar"
    },
    {
      icon: "📈",
      title: "Escalabilidade",
      description: "Recursos que crescem junto com seu projeto"
    }
  ];

  return (
    <section className="bg-petrohost-blue py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          Experimente a diferença da Petrohost
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl text-petrohost-blue mb-6">
                {differential.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {differential.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsGrid;
