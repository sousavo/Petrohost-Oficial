
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, Globe, Shield, Zap, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Hospedagem = () => {
  const plans = [
    {
      id: 'J',
      name: 'Plano J',
      subtitle: 'Institucional',
      description: 'Perfeito para um site institucional',
      price: '45.600,00',
      features: [
        '1 Site',
        '10 GB SSD',
        '5 Contas de e-mail',
        '2 Bancos de Dados',
        'Domínio .com gratuito por 1 ano',
        'CDN incluído',
        'Migração gratuita',
        'Suporte 24/7',
        'WordPress otimizado',
        'Sitejet Website Builder'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 'M',
      name: 'Plano M',
      subtitle: '2 Sites',
      description: 'Ideal para múltiplos projetos',
      price: '54.000,00',
      features: [
        '2 Sites',
        '50 GB SSD',
        '30 Contas de e-mail',
        '5 Bancos de Dados',
        'Domínio .com gratuito por 1 ano',
        'CDN incluído',
        'Migração gratuita',
        'Suporte 24/7',
        'WordPress otimizado',
        'Certificado SSL',
        'Backup automático'
      ],
      popular: true,
      color: 'green'
    },
    {
      id: 'Plus',
      name: 'Plano Plus',
      subtitle: 'Vários Sites',
      description: 'Para agências e empresas grandes',
      price: '190.990,00',
      features: [
        '10 Sites',
        '85 GB SSD',
        '75 Contas de e-mail',
        '100 Bancos de Dados',
        'Domínio .com gratuito por 1 ano',
        'CDN Premium',
        'Migração gratuita',
        'Suporte 24/7 prioritário',
        'WordPress gerenciado',
        'Certificado SSL wildcard',
        'Backup diário automático',
        'Staging environment'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const advantages = [
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: 'Segurança Avançada',
      description: 'Certificados SSL, firewall e monitoramento 24/7'
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: 'Performance Otimizada',
      description: 'SSD, CDN e cache avançado para máxima velocidade'
    },
    {
      icon: <Headphones className="text-green-500" size={32} />,
      title: 'Suporte Especializado',
      description: 'Equipe técnica disponível 24 horas por dia'
    },
    {
      icon: <Globe className="text-purple-500" size={32} />,
      title: 'Infraestrutura Global',
      description: 'Servidores distribuídos para melhor performance'
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-petrohost-darkText mb-6">
              Escolha o <span className="text-petrohost-blue">plano perfeito</span>
            </h1>
            <p className="text-xl lg:text-2xl text-petrohost-textGray max-w-4xl mx-auto mb-8">
              Para hospedar o seu sistema com performance, segurança e suporte profissional
            </p>
            <div className="bg-gradient-to-r from-petrohost-blue to-blue-600 text-white px-8 py-4 rounded-full inline-block">
              🎉 <strong>Oferta especial:</strong> Domínio .com gratuito por 1 ano em todos os planos!
            </div>
          </div>

          {/* Planos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-xl shadow-lg border-[3px] ${
                  plan.popular ? 'border-green-500 transform scale-105' : 'border-gray-200'
                } transition-all hover:shadow-xl relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      🔥 Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-petrohost-darkText mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-petrohost-textGray mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-petrohost-blue mb-2">
                      {plan.price} Kz
                    </div>
                    <p className="text-sm text-petrohost-textGray">por ano</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="text-green-500 flex-shrink-0" size={20} />
                        <span className="text-petrohost-textGray">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/configurar-plano?plano=${plan.id}`}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all text-center block ${
                      plan.popular 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-petrohost-blue text-white hover:bg-blue-700'
                    }`}
                  >
                    🚀 Selecionar {plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Vantagens */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-petrohost-darkText text-center mb-12">
              🌟 Por que escolher nossa hospedagem?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, idx) => (
                <div key={idx} className="text-center p-6 bg-white rounded-lg border-[3px] border-gray-200 hover:border-petrohost-blue transition-all">
                  <div className="mb-4 flex justify-center">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-petrohost-darkText mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-petrohost-textGray">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-petrohost-blue to-blue-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              🎯 Pronto para começar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Migração gratuita, suporte 24/7 e garantia de 30 dias
            </p>
            <Link 
              to="/configurar-plano"
              className="bg-white text-petrohost-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              🚀 Começar Agora
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hospedagem;
