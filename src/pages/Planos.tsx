
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const planos = [
  {
    id: "J",
    nome: "Plano J",
    descricao: "Melhor para um site institucional",
    preco_anual: 45600,
    recursos: [
      "1 Site",
      "10 GB de Espaço",
      "1 E-mail Profissional",
      "SSL Grátis",
      "Suporte 24/7"
    ],
    popular: false
  },
  {
    id: "M",
    nome: "Plano M",
    descricao: "Ideal para pequenos negócios",
    preco_anual: 54000,
    recursos: [
      "2 Sites",
      "25 GB de Espaço",
      "5 E-mails Profissionais",
      "SSL Grátis",
      "Backup Automático",
      "Suporte 24/7"
    ],
    popular: true
  },
  {
    id: "Plus",
    nome: "Plano Plus",
    descricao: "Para empresas em crescimento",
    preco_anual: 190990,
    recursos: [
      "10 Sites",
      "100 GB de Espaço",
      "E-mails Ilimitados",
      "SSL Grátis",
      "Backup Automático",
      "CDN Grátis",
      "Suporte Prioritário 24/7"
    ],
    popular: false
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-AO', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price).replace(',', '.').replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00 Kz';
};

const Planos = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-petrohost-darkText">
              Escolha seu Plano de <span className="text-petrohost-blue">Hospedagem</span>
            </h1>
            <p className="text-lg text-petrohost-textGray max-w-2xl mx-auto">
              Planos profissionais com tudo que você precisa para colocar seu site no ar. 
              Escolha o plano ideal para seu projeto e economize contratando por mais tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planos.map((plano) => (
              <div 
                key={plano.id}
                className={`bg-white rounded-lg p-8 relative transition-all duration-300 hover:scale-105 ${
                  plano.popular 
                    ? 'border-[3px] border-petrohost-blue shadow-xl' 
                    : 'border-[3px] border-gray-200 shadow-md hover:border-petrohost-blue'
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-petrohost-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-petrohost-darkText mb-2">{plano.nome}</h3>
                  <p className="text-petrohost-textGray mb-4">{plano.descricao}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-petrohost-blue">{formatPrice(plano.preco_anual)}</span>
                    <span className="text-petrohost-textGray">/ano</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plano.recursos.map((recurso, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-petrohost-blue mt-0.5 flex-shrink-0" />
                      <span className="text-petrohost-darkText">{recurso}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/configurar-plano?plano=${plano.id}`}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                    plano.popular
                      ? 'bg-petrohost-blue text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-petrohost-darkText hover:bg-petrohost-blue hover:text-white'
                  }`}
                >
                  Selecionar Plano
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-petrohost-textGray">
              Todos os planos incluem garantia de 30 dias. Sem taxa de configuração. 
              <br />Suporte técnico especializado incluído.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Planos;
