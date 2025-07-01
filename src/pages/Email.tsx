
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Mail, Calendar, RefreshCw, Shield } from "lucide-react";

const Email = () => {
  const plans = [
    {
      id: 'email-professional',
      name: 'Pacote Profissional',
      description: 'Melhor para pequenas empresas',
      price: 12500,
      additionalPrice: 5000,
      storage: '5 GB',
      color: 'blue' as const,
      popular: false
    },
    {
      id: 'email-business',
      name: 'Pacote Empresarial',
      description: 'Ideal para empresas em crescimento',
      price: 35000,
      additionalPrice: 8000,
      storage: '30 GB',
      color: 'green' as const,
      popular: true
    },
    {
      id: 'email-gold',
      name: 'Pacote Gold',
      description: 'Para grandes organizações',
      price: 50000,
      additionalPrice: 13000,
      storage: '50 GB',
      color: 'orange' as const,
      popular: false
    }
  ];

  const features = [
    'E-mails @suaempresa.ao',
    'Calendário integrado',
    'Sincronização com dispositivos',
    'Respostas automáticas',
    'Encaminhamento de emails',
    'Antispam avançado',
    'Backup automático',
    'Suporte técnico'
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
              Para os seus e-mails profissionais com máxima segurança e confiabilidade
            </p>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full inline-block">
              📧 <strong>Email profissional:</strong> Transmita credibilidade com @suaempresa.ao
            </div>
          </div>

          {/* Planos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <ProductCard
                key={plan.id}
                id={plan.id}
                type="email"
                name={plan.name}
                subtitle={`${plan.storage} por conta`}
                description={plan.description}
                price={plan.price}
                features={features}
                popular={plan.popular}
                color={plan.color}
                showQuantitySelector={true}
                maxQuantity={20}
              />
            ))}
          </div>

          {/* Recursos Inclusos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-petrohost-darkText text-center mb-12">
              ✨ O que está incluído em todos os planos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Mail size={24} />, title: 'Email @suaempresa.ao', desc: 'Email profissional personalizado' },
                { icon: <Calendar size={24} />, title: 'Calendário', desc: 'Agenda integrada e compartilhada' },
                { icon: <RefreshCw size={24} />, title: 'Sincronização', desc: 'Acesso em todos os dispositivos' },
                { icon: <Shield size={24} />, title: 'Antispam', desc: 'Proteção avançada contra spam' }
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-6 bg-white rounded-lg border-[3px] border-gray-200 hover:border-petrohost-blue transition-all">
                  <div className="text-petrohost-blue mb-3 flex justify-center">{feature.icon}</div>
                  <h3 className="font-bold text-petrohost-darkText mb-2">{feature.title}</h3>
                  <p className="text-sm text-petrohost-textGray">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              🎯 Pronto para começar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Configure seu email profissional em minutos
            </p>
            <div className="text-lg opacity-90">
              💡 <strong>Dica:</strong> Selecione a quantidade de contas e adicione ao carrinho!
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Email;
