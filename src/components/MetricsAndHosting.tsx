
const MetricsAndHosting = () => {
  const metrics = [
    { number: "10k+", label: "Sites Hospedados" },
    { number: "99.9%", label: "Uptime Garantido" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  const hostingTypes = [
    { name: "Hospedagem Compartilhada", icon: "🌐" },
    { name: "VPS Cloud", icon: "☁️" },
    { name: "Servidor Dedicado", icon: "🖥️" },
    { name: "WordPress Hosting", icon: "📝" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Revenda de Hospedagem", icon: "🔄" }
  ];

  return (
    <section className="bg-petrohost-blue py-20">
      <div className="container mx-auto px-4">
        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl font-bold text-petrohost-yellow mb-2">
                {metric.number}
              </div>
              <div className="text-xl">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Título e Descrição */}
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Soluções de Hospedagem para Todos os Projetos
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Desde sites pessoais até aplicações empresariais complexas, temos a solução ideal para o seu projeto.
          </p>
        </div>

        {/* Grade de Tipos de Hospedagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostingTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="text-lg font-bold text-petrohost-darkText">{type.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsAndHosting;
