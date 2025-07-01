
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, ArrowLeft, CreditCard, Shield, Clock, Star, Globe, Mail, Plus } from "lucide-react";

const Checkout = () => {
  const { dominio } = useParams<{ dominio: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registrationYears, setRegistrationYears] = useState(1);
  const [addHosting, setAddHosting] = useState(false);
  const [addEmail, setAddEmail] = useState(false);
  const [selectedHostingPlan, setSelectedHostingPlan] = useState('J');
  const [emailAccounts, setEmailAccounts] = useState(1);
  
  // Simular verificação de usuário logado
  const isUserLoggedIn = true;

  // Dados dos planos de hospedagem
  const hostingPlans = {
    'J': { name: 'Plano J', price: 45600, display: '45.600,00 Kz' },
    'M': { name: 'Plano M', price: 54000, display: '54.000,00 Kz' },
    'Plus': { name: 'Plano Plus', price: 190990, display: '190.990,00 Kz' }
  };

  // Preços do email profissional
  const emailPrice = 12500; // Pacote profissional

  // Dados do domínio
  const [domainData, setDomainData] = useState<{
    domain: string;
    price: string;
    priceValue: number;
    extension: string;
  } | null>(null);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/login');
      return;
    }

    if (dominio) {
      const extension = dominio.split('.').pop()?.toLowerCase() || 'com';
      const prices: { [key: string]: { display: string; value: number } } = {
        'ao': { display: '25.000,00 Kz', value: 25000 },
        'co.ao': { display: '35.000,00 Kz', value: 35000 },
        'edu.ao': { display: '35.000,00 Kz', value: 35000 },
        'it.ao': { display: '5.000,00 Kz', value: 5000 },
        'com': { display: '21.500,00 Kz', value: 21500 },
        'net': { display: '25.500,00 Kz', value: 25500 },
        'org': { display: '35.000,00 Kz', value: 35000 },
        'info': { display: '16.000,00 Kz', value: 16000 }
      };

      const priceData = prices[extension] || prices['com'];
      
      setDomainData({
        domain: dominio,
        price: priceData.display,
        priceValue: priceData.value,
        extension: extension
      });
    }
  }, [dominio, isUserLoggedIn, navigate]);

  const calculateTotal = () => {
    if (!domainData) return 0;
    
    let total = domainData.priceValue * registrationYears;
    
    if (addHosting) {
      total += hostingPlans[selectedHostingPlan as keyof typeof hostingPlans].price;
    }
    
    if (addEmail) {
      total += emailPrice * emailAccounts;
    }
    
    return total;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO').format(price) + ',00 Kz';
  };

  const handlePurchase = async () => {
    setLoading(true);
    
    // Simular processamento do pagamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Processando compra do domínio: ${dominio}`);
    console.log(`Total: ${formatPrice(calculateTotal())}`);
    
    // Simular sucesso
    alert(`🎉 Parabéns! Sua compra foi processada com sucesso!\n\nTotal: ${formatPrice(calculateTotal())}`);
    
    setLoading(false);
    navigate('/cliente');
  };

  if (!domainData) {
    return (
      <div className="min-h-screen font-sans">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-petrohost-darkText mb-4">
                Domínio não encontrado
              </h1>
              <Link to="/dominios" className="text-petrohost-blue hover:underline">
                Voltar para pesquisa de domínios
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/dominios" 
              className="inline-flex items-center gap-2 text-petrohost-blue hover:underline mb-4"
            >
              <ArrowLeft size={20} />
              Voltar para pesquisa
            </Link>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Check size={16} />
                Domínio Disponível
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-4">
                🎉 Finalize sua compra!
              </h1>
              <p className="text-xl text-petrohost-textGray">
                Configure seu pacote completo e inicie sua presença online
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Coluna Principal */}
              <div className="lg:col-span-2 space-y-8">
                {/* Domínio */}
                <div className="bg-white rounded-xl border-[3px] border-petrohost-blue p-8 shadow-lg">
                  <div className="bg-gradient-to-r from-petrohost-blue to-blue-600 rounded-lg p-6 text-white text-center mb-6">
                    <div className="text-3xl font-bold mb-2">
                      🌐 {domainData.domain}
                    </div>
                    <div className="text-lg opacity-90">Seu novo domínio</div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-petrohost-darkText font-semibold mb-3">
                      Período de registro:
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(years => (
                        <button
                          key={years}
                          onClick={() => setRegistrationYears(years)}
                          className={`p-4 rounded-lg border-[3px] text-center transition-all ${
                            registrationYears === years
                              ? 'border-petrohost-blue bg-blue-50 text-petrohost-blue'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-bold">{years} {years === 1 ? 'Ano' : 'Anos'}</div>
                          <div className="text-sm text-petrohost-textGray">
                            {formatPrice(domainData.priceValue * years)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hospedagem Adicional */}
                <div className="bg-white rounded-xl border-[3px] border-gray-200 p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="text-blue-500" size={32} />
                    <div>
                      <h3 className="text-xl font-bold text-petrohost-darkText">
                        Adicionar Hospedagem
                      </h3>
                      <p className="text-petrohost-textGray">
                        Hospede seu site com performance profissional
                      </p>
                    </div>
                    <label className="ml-auto">
                      <input
                        type="checkbox"
                        checked={addHosting}
                        onChange={(e) => setAddHosting(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors ${
                        addHosting ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          addHosting ? 'translate-x-6' : 'translate-x-0.5'
                        } mt-0.5`}></div>
                      </div>
                    </label>
                  </div>

                  {addHosting && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(hostingPlans).map(([key, plan]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedHostingPlan(key)}
                          className={`p-4 rounded-lg border-[3px] text-left transition-all ${
                            selectedHostingPlan === key
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-bold text-petrohost-darkText">{plan.name}</div>
                          <div className="text-petrohost-blue font-semibold">{plan.display}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Email Profissional */}
                <div className="bg-white rounded-xl border-[3px] border-gray-200 p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="text-green-500" size={32} />
                    <div>
                      <h3 className="text-xl font-bold text-petrohost-darkText">
                        Email Profissional
                      </h3>
                      <p className="text-petrohost-textGray">
                        Emails @{domainData.domain.split('.')[0]}.{domainData.extension}
                      </p>
                    </div>
                    <label className="ml-auto">
                      <input
                        type="checkbox"
                        checked={addEmail}
                        onChange={(e) => setAddEmail(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors ${
                        addEmail ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          addEmail ? 'translate-x-6' : 'translate-x-0.5'
                        } mt-0.5`}></div>
                      </div>
                    </label>
                  </div>

                  {addEmail && (
                    <div className="flex items-center gap-4">
                      <span className="text-petrohost-darkText">Quantidade de contas:</span>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setEmailAccounts(Math.max(1, emailAccounts - 1))}
                          className="bg-petrohost-blue text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100 rounded font-bold">{emailAccounts}</span>
                        <button 
                          onClick={() => setEmailAccounts(emailAccounts + 1)}
                          className="bg-petrohost-blue text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-petrohost-textGray">
                        x {formatPrice(emailPrice)} = {formatPrice(emailPrice * emailAccounts)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar - Resumo */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl border-[3px] border-gray-200 p-6 shadow-lg sticky top-8">
                  <h3 className="text-xl font-bold text-petrohost-darkText mb-6">
                    💳 Resumo do Pedido
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-petrohost-textGray">Domínio:</span>
                      <span className="font-semibold text-petrohost-darkText">{domainData.domain}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-petrohost-textGray">Período:</span>
                      <span className="font-semibold text-petrohost-darkText">
                        {registrationYears} {registrationYears === 1 ? 'Ano' : 'Anos'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-petrohost-textGray">Registro:</span>
                      <span className="font-semibold text-petrohost-darkText">
                        {formatPrice(domainData.priceValue * registrationYears)}
                      </span>
                    </div>

                    {addHosting && (
                      <div className="flex justify-between items-center">
                        <span className="text-petrohost-textGray">Hospedagem:</span>
                        <span className="font-semibold text-petrohost-darkText">
                          {hostingPlans[selectedHostingPlan as keyof typeof hostingPlans].display}
                        </span>
                      </div>
                    )}

                    {addEmail && (
                      <div className="flex justify-between items-center">
                        <span className="text-petrohost-textGray">Email ({emailAccounts}x):</span>
                        <span className="font-semibold text-petrohost-darkText">
                          {formatPrice(emailPrice * emailAccounts)}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-petrohost-textGray">SSL Grátis:</span>
                      <span className="font-semibold text-green-600">Incluído</span>
                    </div>
                  </div>

                  <hr className="border-gray-200 mb-6" />

                  <div className="flex justify-between items-center text-xl font-bold text-petrohost-darkText mb-6">
                    <span>Total:</span>
                    <span className="text-petrohost-blue">{formatPrice(calculateTotal())}</span>
                  </div>

                  <button
                    onClick={handlePurchase}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Processando...
                      </>
                    ) : (
                      <>
                        <CreditCard size={20} />
                        🚀 Finalizar Compra
                      </>
                    )}
                  </button>

                  {/* Garantias */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-petrohost-textGray">
                      <Shield size={16} className="text-green-500" />
                      Pagamento 100% seguro
                    </div>
                    <div className="flex items-center gap-2 text-sm text-petrohost-textGray">
                      <Clock size={16} className="text-blue-500" />
                      Ativação instantânea
                    </div>
                    <div className="flex items-center gap-2 text-sm text-petrohost-textGray">
                      <Star size={16} className="text-yellow-500" />
                      Garantia de 30 dias
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
