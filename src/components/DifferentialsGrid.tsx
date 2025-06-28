
const DifferentialsGrid = () => {
  const differentials = [
    {
      icon: "⚡",
      title: "Turbo 20x mais rápido",
      description: "Tecnologia SSD NVMe e cache avançado para máxima performance do seu site."
    },
    {
      icon: "🛡️",
      title: "Suporte Premium 24/7",
      description: "Equipe técnica especializada sempre disponível para ajudar você."
    },
    {
      icon: "🔒",
      title: "Segurança Máxima",
      description: "SSL grátis, firewall avançado e backup automático para proteger seus dados."
    },
    {
      icon: "💎",
      title: "Infraestrutura Premium",
      description: "Servidores de última geração em datacenters certificados internacionalmente."
    }
  ];

  return (
    <section className="bg-petrohost-blue py-20">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que nos torna únicos
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Combinamos tecnologia de ponta com atendimento humanizado para oferecer a melhor experiência em hospedagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-petrohost-darkText mb-4">{item.title}</h3>
              <p className="text-petrohost-textGray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsGrid;
