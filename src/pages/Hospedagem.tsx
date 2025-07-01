
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Shield, Zap, Headphones, Globe } from "lucide-react";

const Hospedagem = () => {
  const plans = [
    {
      id: 'hosting-j',
      name: 'Plano J',
      subtitle: 'Institucional',
      description: 'Perfeito para um site institucional',
      price: 45600,
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
      color: 'blue' as const
    },
    {
      id: 'hosting-m',
      name: 'Plano M',
      subtitle: '2 Sites',
      description: 'Ideal para múltiplos projetos',
      price: 54000,
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
      color: 'green' as const
    },
    {
      id: 'hosting-plus',
      name: 'Plano Plus',
      subtitle: 'Vários Sites',
      description: 'Para agências e empresas grandes',
      price: 190990,
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
      color: 'purple' as const
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
              <ProductCard
                key={plan.id}
                id={plan.id}
                type="hosting"
                name={plan.name}
                subtitle={plan.subtitle}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
                color={plan.color}
              />
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
            <div className="text-lg opacity-90">
              💡 <strong>Dica:</strong> Adicione produtos ao carrinho e finalize sua compra!
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hospedagem;
