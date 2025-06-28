import { Mail, Server, Rocket, Layout, Cpu, Database } from "lucide-react";

const cards = [
  {
    icon: <Server size={32} className="text-petrohost-blue" />,
    title: "Hospedagem Compartilhada",
    desc: "A hospedagem mais popular disponível, nossos planos oferecem desempenho e recursos de site excepcionais a preços acessíveis.",
    link: "#"
  },
  {
    icon: <Rocket size={32} className="text-petrohost-blue" />,
    title: "Hospedagem Turbo",
    desc: "Construída com a velocidade em mente, o Turbo Hosting oferece uma das experiências de hospedagem web mais rápidas disponíveis.",
    link: "#"
  },
  {
    icon: <Layout size={32} className="text-petrohost-blue" />,
    title: "Hospedagem para Wordpress",
    desc: "Otimizada para desempenho e segurança, nossos planos de hospedagem para WordPress incluem nosso painel de controle exclusivo para velocidade máxima.",
    link: "#"
  },
  {
    icon: <Mail size={32} className="text-petrohost-blue" />,
    title: "Hospedagem de E-mail",
    desc: "Nossa hospedagem de e-mail oferece um domínio de e-mail personalizado para fortalecer sua marca e gerar confiança para sua organização.",
    link: "#"
  },
  {
    icon: <Cpu size={32} className="text-petrohost-blue" />,
    title: "Hospedagem CPanel",
    desc: "Com nossa hospedagem cPanel, você tem acesso a um dos painéis de controle mais populares do setor.",
    link: "#"
  },
  {
    icon: <Database size={32} className="text-petrohost-blue" />,
    title: "Hospedagem VPS",
    desc: "Atualize para recursos dedicados para maior desempenho de hospedagem, confiabilidade e flexibilidade, tudo a um preço muito competitivo.",
    link: "#"
  }
];

const HostingSection = () => {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-24 gap-16">
          <div className="flex-1 max-w-xl text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-petrohost-darkText">Hospedagem</span> de sites<br />
              criada para o seu sucesso
            </h2>
            <p className="text-lg text-petrohost-textGray mb-4">
              Se você precisa de um blog simples, quer destacar seu negócio, vender produtos por meio de um site de comércio eletrônico ou precisa de um serviço de hospedagem de nível empresarial para um aplicativo personalizado, temos um serviço de hospedagem para você.
            </p>
            <p className="text-petrohost-textGray">
              Mais clientes estão migrando para a hosting.com para aproveitar nossas hospedagem ultrarrápida e suporte de alta qualidade a preços competitivos.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
            <img src="/hospedagem.png" alt="Hospedagem" className="max-w-lg w-full h-auto rounded-[3px] object-cover object-center" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-none border-3 border-gray-200 p-7 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-petrohost-blue">{card.title}</h3>
              <p className="text-petrohost-textGray mb-4 text-sm">{card.desc}</p>
              <a href={card.link} className="text-petrohost-blue text-sm font-medium">Saiba mais &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingSection; 