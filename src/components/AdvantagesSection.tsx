
const AdvantagesSection = () => {
  const advantages = [
    "Hospedagem super-rápida com tecnologia SSD",
    "Suporte técnico 24/7 em português",
    "SSL grátis para todos os planos",
    "Backup automático diário",
    "Painel de controle cPanel",
    "99.9% de uptime garantido"
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda (Texto) */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
              Por que escolher a <span className="text-petrohost-blue">Petrohost</span>?
            </h2>
            <p className="text-xl text-petrohost-textGray mb-8">
              Oferecemos a melhor infraestrutura de hospedagem em Angola, com tecnologia de ponta e suporte especializado.
            </p>
            
            <ul className="space-y-4 mb-8">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-petrohost-yellow rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-petrohost-blue font-bold text-sm">✓</span>
                  </div>
                  <span className="text-petrohost-textGray">{advantage}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-petrohost-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors">
              Conheça nossos planos
            </button>
          </div>

          {/* Coluna Direita (Visual) */}
          <div className="text-center">
            <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
              Placeholder: imagem-composicao-3d.png
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
