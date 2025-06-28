
const MetricsAndHosting = () => {
  const metrics = [
    { number: "+ 600", label: "Clientes satisfeitos" },
    { number: "1 site", label: "Grátis em todos os planos" },
    { number: "+ 300", label: "Projetos hospedados" }
  ];

  const hostingTypes = [
    {
      icon: "🌐",
      title: "Hospedagem Compartilhada",
      description: "Ideal para sites pessoais e pequenos negócios"
    },
    {
      icon: "⚡",
      title: "Hospedagem WordPress",
      description: "Otimizada especificamente para WordPress"
    },
    {
      icon: "☁️",
      title: "VPS Cloud",
      description: "Recursos dedicados com flexibilidade"
    },
    {
      icon: "🔒",
      title: "Servidor Dedicado",
      description: "Máximo desempenho e controle total"
    },
    {
      icon: "📧",
      title: "Email Profissional",
      description: "Contas de email com seu domínio"
    },
    {
      icon: "🛡️",
      title: "SSL Grátis",
      description: "Certificado de segurança incluído"
    }
  ];

  return (
    <section className="bg-petrohost-blue py-20">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                {metric.number}
              </div>
              <div className="text-white text-lg opacity-90">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Title Section */}
        <div className="text-left mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Soluções completas para seu projeto
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            Oferecemos uma ampla gama de serviços de hospedagem para atender 
            todas as suas necessidades online.
          </p>
        </div>

        {/* Hosting Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostingTypes.map((type, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl text-petrohost-gold mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {type.title}
              </h3>
              <p className="text-white opacity-90 mb-4">
                {type.description}
              </p>
              <a href="#" className="text-petrohost-gold hover:text-yellow-300 font-medium transition-colors">
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsAndHosting;
