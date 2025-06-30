
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Check } from "lucide-react";

interface Plano {
  id: string;
  nome: string;
  descricao: string;
  preco_anual: number;
  recursos: string[];
}

const planosData: { [key: string]: Plano } = {
  J: {
    id: "J",
    nome: "Plano J",
    descricao: "Melhor para um site institucional",
    preco_anual: 45600,
    recursos: [
      "1 Site", "10 GB de Espaço", "1 E-mail Profissional", 
      "SSL Grátis", "Suporte 24/7"
    ]
  },
  M: {
    id: "M",
    nome: "Plano M",
    descricao: "Ideal para pequenos negócios",
    preco_anual: 54000,
    recursos: [
      "2 Sites", "25 GB de Espaço", "5 E-mails Profissionais", 
      "SSL Grátis", "Backup Automático", "Suporte 24/7"
    ]
  },
  Plus: {
    id: "Plus",
    nome: "Plano Plus",
    descricao: "Para empresas em crescimento",
    preco_anual: 190990,
    recursos: [
      "10 Sites", "100 GB de Espaço", "E-mails Ilimitados", 
      "SSL Grátis", "Backup Automático", "CDN Grátis", "Suporte Prioritário 24/7"
    ]
  }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-AO', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price).replace(',', '.').replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00 Kz';
};

const ConfigurarPlano = () => {
  const [searchParams] = useSearchParams();
  const planoId = searchParams.get('plano') || 'J';
  const plano = planosData[planoId];

  const [periodo, setPeriodo] = useState(1);
  const [dominio, setDominio] = useState('');

  // Cálculo dos preços para diferentes períodos
  const calcularPreco = (anos: number) => {
    return plano.preco_anual * anos;
  };

  const precoAtual = calcularPreco(periodo);

  const periodos = [
    { anos: 1, label: "1 Ano", preco: calcularPreco(1) },
    { anos: 2, label: "2 Anos", preco: calcularPreco(2) },
    { anos: 3, label: "3 Anos", preco: calcularPreco(3) }
  ];

  if (!plano) {
    return (
      <div className="min-h-screen font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-petrohost-darkText mb-4">Plano não encontrado</h1>
          <Link to="/planos" className="text-petrohost-blue hover:underline">
            Voltar para os planos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/planos" className="inline-flex items-center gap-2 text-petrohost-blue hover:underline">
              <ArrowLeft size={20} />
              Voltar para os planos
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna da Esquerda: Personalização */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border-[3px] border-gray-200 p-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-petrohost-darkText mb-2">
                    Personalizar {plano.nome}
                  </h1>
                  <p className="text-petrohost-textGray">{plano.descricao}</p>
                </div>

                <div className="space-y-6">
                  {/* Período de Contratação */}
                  <div>
                    <label className="block text-lg font-semibold text-petrohost-darkText mb-3">
                      Período de Contratação
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {periodos.map((item) => (
                        <button
                          key={item.anos}
                          onClick={() => setPeriodo(item.anos)}
                          className={`p-4 rounded-lg border-[3px] text-center transition-all ${
                            periodo === item.anos
                              ? 'border-petrohost-blue bg-blue-50'
                              : 'border-gray-200 hover:border-petrohost-blue'
                          }`}
                        >
                          <div className="font-semibold text-petrohost-darkText">{item.label}</div>
                          <div className="text-petrohost-blue font-bold">{formatPrice(item.preco)}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Domínio */}
                  <div>
                    <label className="block text-lg font-semibold text-petrohost-darkText mb-3">
                      Domínio (Opcional)
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={dominio}
                        onChange={(e) => setDominio(e.target.value)}
                        placeholder="Digite seu domínio (ex: meusite.com)"
                        className="flex-1 px-4 py-3 border-[3px] border-gray-200 rounded-lg focus:border-petrohost-blue focus:outline-none"
                      />
                      <button className="px-6 py-3 bg-petrohost-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Verificar
                      </button>
                    </div>
                    <p className="text-sm text-petrohost-textGray mt-2">
                      Você pode registrar um domínio agora ou configurar depois
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Resumo do Pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border-[3px] border-petrohost-blue p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-petrohost-darkText mb-6">Resumo do Pedido</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-petrohost-textGray">Plano:</span>
                    <span className="font-semibold text-petrohost-darkText">{plano.nome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-petrohost-textGray">Período:</span>
                    <span className="font-semibold text-petrohost-darkText">
                      {periodo} {periodo === 1 ? 'Ano' : 'Anos'}
                    </span>
                  </div>
                  {dominio && (
                    <div className="flex justify-between">
                      <span className="text-petrohost-textGray">Domínio:</span>
                      <span className="font-semibold text-petrohost-darkText">{dominio}</span>
                    </div>
                  )}
                </div>

                <hr className="border-gray-200 mb-6" />

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-petrohost-textGray">Subtotal:</span>
                    <span className="font-semibold text-petrohost-darkText">{formatPrice(precoAtual)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-petrohost-darkText">Total:</span>
                    <span className="text-petrohost-blue">{formatPrice(precoAtual)}</span>
                  </div>
                </div>

                <button className="w-full bg-petrohost-blue text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mb-4">
                  Continuar para Pagamento
                </button>

                <div className="space-y-2">
                  <h3 className="font-semibold text-petrohost-darkText">Recursos Inclusos:</h3>
                  {plano.recursos.map((recurso, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-petrohost-blue" />
                      <span className="text-petrohost-textGray">{recurso}</span>
                    </div>
                  ))}
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

export default ConfigurarPlano;
