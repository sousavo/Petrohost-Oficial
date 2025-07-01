import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, Mail, Calendar, Shield, RefreshCw, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Email = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [emailAccounts, setEmailAccounts] = useState(1);

  const plans = [
    {
      id: 'profissional',
      name: 'Pacote Profissional',
      price: 12500,
      priceDisplay: '12.500,00',
      storage: '5 GB',
      additionalPrice: 5000,
      additionalDisplay: '5.000,00',
      color: 'blue',
      popular: false
    },
    {
      id: 'empresarial',
      name: 'Pacote Empresarial',
      price: 35000,
      priceDisplay: '35.000,00',
      storage: '30 GB',
      additionalPrice: 8000,
      additionalDisplay: '8.000,00',
      color: 'green',
      popular: true
    },
    {
      id: 'gold',
      name: 'Pacote Gold',
      price: 50000,
      priceDisplay: '50.000,00',
      storage: '50 GB',
      additionalPrice: 13000,
      additionalDisplay: '13.000,00',
      color: 'yellow',
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

  const calculateTotal = (plan: any) => {
    const basePrice = plan.price;
    const additionalPrice = plan.additionalPrice * (emailAccounts - 1);
    return basePrice + additionalPrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO').format(price) + ',00 Kz';
  };

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

          {/* Configurador */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl border-[3px] border-petrohost-blue p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-petrohost-darkText mb-6 text-center">
                ⚙️ Configure seu plano
              </h2>
              
              <div className="mb-8">
                <label className="block text-petrohost-darkText font-semibold mb-4">
                  Quantas contas de email você precisa?
                </label>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setEmailAccounts(Math.max(1, emailAccounts - 1))}
                    className="bg-petrohost-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    disabled={emailAccounts <= 1}
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-petrohost-darkText px-6 py-2 bg-gray-100 rounded-lg min-w-[80px] text-center">
                    {emailAccounts}
                  </span>
                  <button 
                    onClick={() => setEmailAccounts(emailAccounts + 1)}
                    className="bg-petrohost-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    +
                  </button>
                  <span className="text-petrohost-textGray ml-4">
                    {emailAccounts === 1 ? 'conta' : 'contas'} de email
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Planos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => {
              const total = calculateTotal(plan);
              const isSelected = selectedPlan === plan.id;
              
              return (
                <div 
                  key={plan.id} 
                  className={`bg-white rounded-xl shadow-lg border-[3px] ${
                    plan.popular ? 'border-green-500 transform scale-105' : 
                    isSelected ? 'border-petrohost-blue' : 'border-gray-200'
                  } transition-all hover:shadow-xl relative cursor-pointer`}
                  onClick={() => setSelectedPlan(plan.id)}
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
                      <div className="mb-4">
                        <Mail className={`mx-auto text-${plan.color}-500`} size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-petrohost-darkText mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-petrohost-textGray mb-4">{plan.storage} por conta</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="text-sm text-petrohost-textGray mb-2">Preço base (1 conta):</div>
                        <div className="text-xl font-bold text-petrohost-darkText">
                          {plan.priceDisplay} Kz
                        </div>
                        {emailAccounts > 1 && (
                          <>
                            <div className="text-sm text-petrohost-textGray mt-2">
                              + {emailAccounts - 1} contas adicionais:
                            </div>
                            <div className="text-lg font-semibold text-petrohost-blue">
                              + {formatPrice(plan.additionalPrice * (emailAccounts - 1))}
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="text-3xl font-bold text-petrohost-blue mb-2">
                        {formatPrice(total)}
                      </div>
                      <p className="text-sm text-petrohost-textGray">
                        para {emailAccounts} {emailAccounts === 1 ? 'conta' : 'contas'}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-petrohost-darkText mb-3">Incluído:</h4>
                      <ul className="space-y-2">
                        {features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Check className="text-green-500 flex-shrink-0" size={16} />
                            <span className="text-petrohost-textGray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                        isSelected
                          ? 'bg-green-500 text-white'
                          : plan.popular 
                            ? 'bg-green-500 text-white hover:bg-green-600' 
                            : 'bg-petrohost-blue text-white hover:bg-blue-700'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {isSelected ? '✅ Selecionado' : '📧 Selecionar'}
                    </button>
                  </div>
                </div>
              );
            })}
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
                <div key={idx} className="text-center p-6 bg-white rounded-lg border-[3px] border-gray-200">
                  <div className="text-petrohost-blue mb-3 flex justify-center">{feature.icon}</div>
                  <h3 className="font-bold text-petrohost-darkText mb-2">{feature.title}</h3>
                  <p className="text-sm text-petrohost-textGray">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          {selectedPlan && (
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                🎯 Pronto para começar?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Configure seu email profissional em minutos
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-lg">
                  {plans.find(p => p.id === selectedPlan)?.name} - {emailAccounts} {emailAccounts === 1 ? 'conta' : 'contas'}
                </span>
                <ArrowRight size={24} />
                <span className="text-2xl font-bold">
                  {formatPrice(calculateTotal(plans.find(p => p.id === selectedPlan)!))}
                </span>
              </div>
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors mt-6">
                📧 Contratar Agora
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Email;
