
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, ArrowLeft, CreditCard, Shield, Clock, Star } from "lucide-react";

const Checkout = () => {
  const { dominio } = useParams<{ dominio: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Simular verificação de usuário logado
  const isUserLoggedIn = true; // Integre com seu sistema de auth

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
        'com': { display: '15.000,00 Kz', value: 15000 },
        'net': { display: '18.000,00 Kz', value: 18000 },
        'org': { display: '20.000,00 Kz', value: 20000 },
        'co': { display: '22.000,00 Kz', value: 22000 }
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

  const handlePurchase = async () => {
    setLoading(true);
    
    // Simular processamento do pagamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui você integraria com seu sistema de pagamento
    console.log(`Processando compra do domínio: ${dominio}`);
    
    // Simular sucesso
    alert(`🎉 Parabéns! O domínio ${dominio} foi registrado com sucesso!`);
    
    setLoading(false);
    navigate('/cliente'); // Redirecionar para área do cliente
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

          <div className="max-w-4xl mx-auto">
            {/* Header animado */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Check size={16} />
                Domínio Disponível
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-4">
                🎉 Quase lá! 
              </h1>
              <p className="text-xl text-petrohost-textGray">
                Você está a um clique de registrar seu domínio perfeito
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Coluna Principal - Detalhes do Domínio */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border-[3px] border-petrohost-blue p-8 shadow-lg">
                  {/* Domínio em destaque */}
                  <div className="bg-gradient-to-r from-petrohost-blue to-blue-600 rounded-lg p-6 text-white text-center mb-8">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">
                      🌐 {domainData.domain}
                    </div>
                    <div className="text-lg opacity-90">
                      Seu novo domínio está quase pronto!
                    </div>
                  </div>

                  {/* Benefícios */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-petrohost-darkText mb-4">
                      ✨ O que você recebe:
                    </h3>
                    
                    {[
                      { icon: "🔒", title: "SSL Grátis", desc: "Certificado de segurança incluído" },
                      { icon: "📧", title: "Redirecionamento de Email", desc: "Configure emails profissionais" },
                      { icon: "🛡️", title: "Proteção de Privacidade", desc: "Seus dados protegidos no WHOIS" },
                      { icon: "⚡", title: "DNS Gerenciado", desc: "Configuração automática dos servidores" },
                      { icon: "🔄", title: "Renovação Automática", desc: "Nunca perca seu domínio" }
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl">{benefit.icon}</div>
                        <div>
                          <div className="font-semibold text-petrohost-darkText">{benefit.title}</div>
                          <div className="text-sm text-petrohost-textGray">{benefit.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Garantia */}
                  <div className="bg-yellow-50 border-[3px] border-yellow-200 rounded-lg p-4 text-center">
                    <div className="text-yellow-600 font-semibold mb-2">
                      🛡️ Garantia de 30 dias
                    </div>
                    <div className="text-sm text-yellow-700">
                      Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Resumo e Pagamento */}
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
                      <span className="font-semibold text-petrohost-darkText">1 Ano</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-petrohost-textGray">Registro:</span>
                      <span className="font-semibold text-petrohost-darkText">{domainData.price}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-petrohost-textGray">SSL Grátis:</span>
                      <span className="font-semibold text-green-600">Incluído</span>
                    </div>
                  </div>

                  <hr className="border-gray-200 mb-6" />

                  <div className="flex justify-between items-center text-xl font-bold text-petrohost-darkText mb-6">
                    <span>Total:</span>
                    <span className="text-petrohost-blue">{domainData.price}</span>
                  </div>

                  {/* Botão de Compra */}
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
                        🚀 Registrar Agora
                      </>
                    )}
                  </button>

                  {/* Informações de Segurança */}
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
                      Suporte 24/7 incluído
                    </div>
                  </div>

                  {/* Métodos de Pagamento */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-petrohost-textGray text-center mb-3">
                      Métodos de pagamento aceitos:
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-semibold">VISA</div>
                      <div className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs font-semibold">MASTER</div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-semibold">MULTICAIXA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testemunhos */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-petrohost-darkText mb-8">
                💬 O que nossos clientes dizem
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "João Silva", text: "Processo super rápido e fácil. Recomendo!", rating: 5 },
                  { name: "Maria Santos", text: "Suporte excelente e preços justos.", rating: 5 },
                  { name: "Pedro Costa", text: "Meu domínio ficou ativo em minutos!", rating: 5 }
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border-[3px] border-gray-200 shadow-sm">
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-petrohost-textGray mb-3">"{testimonial.text}"</p>
                    <p className="font-semibold text-petrohost-darkText">{testimonial.name}</p>
                  </div>
                ))}
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
