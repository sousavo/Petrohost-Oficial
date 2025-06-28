import { Rocket, MessageSquare, Share2, Clock } from "lucide-react";

const differentials = [
  {
    icon: <Rocket size={36} className="text-petrohost-blue mb-4" />,
    title: "Turbo até 20X mais rápido",
    description: "Isso significa melhores classificações de SEO, menores taxas de rejeição e maiores taxas de conversão!"
  },
  {
    icon: <MessageSquare size={36} className="text-petrohost-blue mb-4" />,
    title: "Suporte da equipe Petrohost",
    description: "Nossa equipe de suporte experiente e amigável está disponível 24 horas por dia, 7 dias por semana, 365 dias por ano para ajudar!"
  },
  {
    icon: <Share2 size={36} className="text-petrohost-blue mb-4" />,
    title: "Migração de conta gratuita",
    description: "Já tem um site? Deixe-nos fazer o trabalho pesado para você e transfira-o gratuitamente! Pergunte-nos como!"
  },
  {
    icon: <Clock size={36} className="text-petrohost-blue mb-4" />,
    title: "Compromisso de 99,9% de tempo de atividade",
    description: "Petrohost é o host em que você pode confiar, com servidores ultraconfiáveis!"
  }
];

const DifferentialsGrid = () => {
  return (
    <section className="bg-gradient-to-br from-[#0a3a63] to-[#045488] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2">
            Experimente a diferença da Petrohost
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {differentials.map((item, index) => (
            <div key={index} className="bg-white rounded-[3px] p-8 text-left flex flex-col items-start shadow-sm">
              {item.icon}
              <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
              <p className="text-black text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsGrid;
