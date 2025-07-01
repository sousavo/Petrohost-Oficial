
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, Shield, Clock, Star, ArrowLeft, Trash2 } from "lucide-react";

const CarrinhoCheckout = () => {
  const navigate = useNavigate();
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  
  // Simular verificação de usuário logado
  const isUserLoggedIn = true;

  if (!isUserLoggedIn) {
    navigate('/login');
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen font-sans">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold text-petrohost-darkText mb-6">
                🛒 Carrinho Vazio
              </h1>
              <p className="text-petrohost-textGray mb-8">
                Seu carrinho está vazio. Adicione produtos para continuar com a compra.
              </p>
              <button
                onClick={() => navigate('/hospedagem')}
                className="bg-petrohost-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                🚀 Ver Produtos
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO').format(price) + ',00 Kz';
  };

  const handlePurchase = async () => {
    setLoading(true);
    
    // Simular processamento do pagamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Processando compra:', items);
    console.log(`Total: ${formatPrice(total)}`);
    
    // Simular sucesso
    alert(`🎉 Parabéns! Sua compra foi processada com sucesso!\n\nTotal: ${formatPrice(total)}`);
    
    clearCart();
    setLoading(false);
    navigate('/cliente');
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-petrohost-blue hover:underline mb-4"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-4">
                🎉 Finalize sua compra!
              </h1>
              <p className="text-xl text-petrohost-textGray">
                Revise seus itens e complete seu pedido
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Coluna Principal - Itens do Carrinho */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border-[3px] border-petrohost-blue p-8 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-petrohost-darkText mb-6">
                    🛒 Seus Produtos ({items.length})
                  </h2>

                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-petrohost-darkText">
                              {item.name}
                            </h3>
                            {item.description && (
                              <p className="text-petrohost-textGray text-sm mt-1">
                                {item.description}
                              </p>
                            )}
                            <div className="flex gap-4 mt-2 text-sm text-petrohost-textGray">
                              {item.quantity && (
                                <span>Quantidade: {item.quantity}</span>
                              )}
                              {item.years && (
                                <span>Período: {item.years} {item.years === 1 ? 'ano' : 'anos'}</span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-2"
                            title="Remover item"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-petrohost-textGray">
                            {formatPrice(item.price)} x {item.quantity || 1} {item.years && item.years > 1 ? `x ${item.years} anos` : ''}
                          </div>
                          <div className="text-xl font-bold text-petrohost-blue">
                            {formatPrice(item.price * (item.years || 1) * (item.quantity || 1))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Informações Extras */}
                <div className="bg-white rounded-xl border-[3px] border-gray-200 p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-petrohost-darkText mb-4">
                    📋 Informações Importantes
                  </h3>
                  <ul className="space-y-2 text-petrohost-textGray">
                    <li>• Ativação instantânea após confirmação do pagamento</li>
                    <li>• Certificado SSL gratuito incluído</li>
                    <li>• Migração gratuita de sites existentes</li>
                    <li>• Suporte técnico 24/7 em português</li>
                    <li>• Garantia de 30 dias ou dinheiro de volta</li>
                  </ul>
                </div>
              </div>

              {/* Sidebar - Resumo */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl border-[3px] border-gray-200 p-6 shadow-lg sticky top-8">
                  <h3 className="text-xl font-bold text-petrohost-darkText mb-6">
                    💳 Resumo do Pedido
                  </h3>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <span className="text-petrohost-textGray truncate pr-2">
                          {item.name} ({item.quantity || 1}x)
                        </span>
                        <span className="font-semibold text-petrohost-darkText whitespace-nowrap">
                          {formatPrice(item.price * (item.years || 1) * (item.quantity || 1))}
                        </span>
                      </div>
                    ))}

                    <div className="flex justify-between items-center">
                      <span className="text-petrohost-textGray">SSL Grátis:</span>
                      <span className="font-semibold text-green-600">Incluído</span>
                    </div>
                  </div>

                  <hr className="border-gray-200 mb-6" />

                  <div className="flex justify-between items-center text-xl font-bold text-petrohost-darkText mb-6">
                    <span>Total:</span>
                    <span className="text-petrohost-blue">{formatPrice(total)}</span>
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

export default CarrinhoCheckout;
