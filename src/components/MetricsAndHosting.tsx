import { Building2, ShoppingCart, BookText, GraduationCap, HeartHandshake, Smile } from "lucide-react";

const metrics = [
  { number: "+ 600", label: "sites hospedados" },
  { number: "1 site", label: "adicionado a cada 15 segundos" },
  { number: "+ 300", label: "clientes valiosos" }
];

const hostingTypes = [
  {
    name: "Hospedagem Empresarial",
    desc: "Hospedagem empresarial rápida, segura e confiável para sites, e-mails e aplicativos de web que se adaptam à sua evolução.",
    icon: <Building2 size={28} className="text-yellow-400 mb-2" />
  },
  {
    name: "Hospedagem de comércio eletrônico",
    desc: "Obtenha tempos de carregamento rápidos, processamento de pagamento seguro e fácil integração com as principais plataformas de comércio eletrônico.",
    icon: <ShoppingCart size={28} className="text-yellow-400 mb-2" />
  },
  {
    name: "Hospedagem de blogs",
    desc: "Hospedagem confiável com fácil integração com WordPress e desempenho rápido que se adapta ao seu público.",
    icon: <BookText size={28} className="text-yellow-400 mb-2" />
  },
  {
    name: "Hospedagem LMS",
    desc: "Desempenho otimizado, confiabilidade e suporte para o melhor software de Sistema de Gestão de Aprendizagem.",
    icon: <GraduationCap size={28} className="text-yellow-400 mb-2" />
  },
  {
    name: "Hospedagem sem fins lucrativos",
    desc: "Serviços de hospedagem de sites ultrarrápidos e confiáveis. Descubra como você pode economizar com nosso desconto exclusivo.",
    icon: <HeartHandshake size={28} className="text-yellow-400 mb-2" />
  },
  {
    name: "Hospedagem de site pessoal",
    desc: "Nossa hospedagem de site pessoal oferece o equilíbrio perfeito entre desempenho, segurança e preço acessível.",
    icon: <Smile size={28} className="text-yellow-400 mb-2" />
  }
];

const MetricsAndHosting = () => {
  return (
    <section className="bg-gradient-to-br from-[#0a3a63] to-[#045488] py-16 pb-24">
      <div className="container mx-auto px-4">
        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl font-bold mb-2">{metric.number}</div>
              <div className="text-base font-bold opacity-90">{metric.label}</div>
            </div>
          ))}
        </div>
<br />
        {/* Título e Descrição */}
        <div className="mb-14 max-w-2xl text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Nós fornecemos hospedagem<br />para qualquer necessidade
          </h2>
          <br />
          <p className="text-white opacity-90 text-base md:text-lg">
            Não sabe qual plano de hospedagem é o ideal para você? Escolha a solução que melhor descreve a sua situação e nós ajudaremos você a encontrar as melhores opções de hospedagem.
          </p>
        </div>
<br />
<br />
<br />
<br />
<br />
        {/* Grade de Tipos de Hospedagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
          {hostingTypes.map((type, index) => (
            <div key={index} className="flex flex-col items-start bg-transparent rounded-none p-0 shadow-none">
              <div className="mb-2">{type.icon}</div>
              <h3 className="text-yellow-400 text-base font-bold mb-1 mt-2">{type.name}</h3>
              <p className="text-white text-sm opacity-90 mb-3">{type.desc}</p>
              <a href="#" className="text-yellow-400 text-sm font-semibold flex items-center gap-1 group">Saiba mas <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsAndHosting;
