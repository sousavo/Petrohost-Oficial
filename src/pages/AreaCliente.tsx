
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { 
  Globe, 
  CreditCard, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  History,
  Settings,
  Bell,
  Calendar,
  TrendingUp
} from "lucide-react";

const AreaCliente = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dados simulados do cliente
  const clientData = {
    name: "João Silva",
    email: "joao@exemplo.com",
    domains: [
      { name: "meusite.com", status: "ativo", expiry: "2025-12-15", daysLeft: 320 },
      { name: "empresa.ao", status: "ativo", expiry: "2025-08-20", daysLeft: 200 },
      { name: "blog.net", status: "expirando", expiry: "2025-02-10", daysLeft: 15 }
    ],
    invoices: [
      { id: "INV-001", amount: "45.500,00 Kz", status: "pago", date: "2024-12-01" },
      { id: "INV-002", amount: "25.000,00 Kz", status: "pendente", date: "2024-12-15" }
    ],
    stats: {
      totalDomains: 3,
      activeServices: 5,
      totalSpent: "125.000,00 Kz"
    }
  };

  const TabButton = ({ id, label, icon: Icon, active }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 px-6 py-4 rounded-[3px] font-medium transition-all duration-300 ${
        active 
          ? 'bg-petrohost-blue text-white shadow-lg' 
          : 'bg-white text-petrohost-textGray hover:bg-petrohost-lightGray hover:text-petrohost-blue border-[3px] border-petrohost-borderGray'
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header do Cliente */}
          <div className="bg-white rounded-[3px] border-[3px] border-petrohost-borderGray p-8 mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold text-petrohost-darkText mb-2">
                  Bem-vindo, {clientData.name}! 👋
                </h1>
                <p className="text-petrohost-textGray">{clientData.email}</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-petrohost-blue text-white px-6 py-3 rounded-[3px] font-bold hover:bg-blue-700 transition-colors">
                  <Bell size={16} className="inline mr-2" />
                  Notificações
                </button>
                <button className="border-[3px] border-petrohost-blue text-petrohost-blue px-6 py-3 rounded-[3px] font-bold hover:bg-petrohost-blue hover:text-white transition-colors">
                  <Settings size={16} className="inline mr-2" />
                  Configurações
                </button>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-wrap gap-4 mb-8">
            <TabButton 
              id="dashboard" 
              label="Dashboard" 
              icon={TrendingUp} 
              active={activeTab === 'dashboard'} 
            />
            <TabButton 
              id="dominios" 
              label="Meus Domínios" 
              icon={Globe} 
              active={activeTab === 'dominios'} 
            />
            <TabButton 
              id="faturas" 
              label="Faturas" 
              icon={CreditCard} 
              active={activeTab === 'faturas'} 
            />
            <TabButton 
              id="historico" 
              label="Histórico" 
              icon={History} 
              active={activeTab === 'historico'} 
            />
          </div>

          {/* Conteúdo Dinâmico */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Estatísticas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-[3px] shadow-lg">
                  <Globe className="mb-4" size={32} />
                  <h3 className="text-2xl font-bold">{clientData.stats.totalDomains}</h3>
                  <p className="opacity-90">Domínios Ativos</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-[3px] shadow-lg">
                  <CheckCircle className="mb-4" size={32} />
                  <h3 className="text-2xl font-bold">{clientData.stats.activeServices}</h3>
                  <p className="opacity-90">Serviços Ativos</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-[3px] shadow-lg">
                  <CreditCard className="mb-4" size={32} />
                  <h3 className="text-2xl font-bold">{clientData.stats.totalSpent}</h3>
                  <p className="opacity-90">Total Gasto</p>
                </div>
              </div>

              {/* Alertas */}
              <div className="bg-orange-50 border-[3px] border-orange-200 rounded-[3px] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-orange-500" size={24} />
                  <h3 className="text-xl font-bold text-orange-700">Atenção Necessária</h3>
                </div>
                <p className="text-orange-600 mb-4">
                  O domínio <strong>blog.net</strong> expira em 15 dias. Renove agora para evitar a perda do domínio.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-[3px] font-bold hover:bg-orange-600 transition-colors">
                  Renovar Agora
                </button>
              </div>

              {/* Domínios Resumo */}
              <div className="bg-white rounded-[3px] border-[3px] border-petrohost-borderGray p-6 shadow-lg">
                <h3 className="text-xl font-bold text-petrohost-darkText mb-6">Domínios Recentes</h3>
                <div className="space-y-4">
                  {clientData.domains.map((domain, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-[3px]">
                      <div>
                        <h4 className="font-bold text-petrohost-darkText">{domain.name}</h4>
                        <p className="text-sm text-petrohost-textGray">Expira em: {domain.expiry}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                        domain.status === 'ativo' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {domain.status === 'ativo' ? '✅ Ativo' : '⚠️ Expirando'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dominios' && (
            <div className="bg-white rounded-[3px] border-[3px] border-petrohost-borderGray p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-petrohost-darkText mb-6">Meus Domínios</h2>
              <div className="grid gap-6">
                {clientData.domains.map((domain, index) => (
                  <div key={index} className="border-[3px] border-gray-200 rounded-[3px] p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-petrohost-darkText">{domain.name}</h3>
                        <p className="text-petrohost-textGray">Expira em: {domain.expiry} ({domain.daysLeft} dias)</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="bg-petrohost-blue text-white px-4 py-2 rounded-[3px] font-bold hover:bg-blue-700 transition-colors">
                          Renovar
                        </button>
                        <button className="border-[3px] border-petrohost-blue text-petrohost-blue px-4 py-2 rounded-[3px] font-bold hover:bg-petrohost-blue hover:text-white transition-colors">
                          Gerenciar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faturas' && (
            <div className="bg-white rounded-[3px] border-[3px] border-petrohost-borderGray p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-petrohost-darkText mb-6">Minhas Faturas</h2>
              <div className="space-y-4">
                {clientData.invoices.map((invoice, index) => (
                  <div key={index} className="border-[3px] border-gray-200 rounded-[3px] p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-petrohost-darkText">{invoice.id}</h3>
                        <p className="text-petrohost-textGray">Data: {invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-petrohost-darkText">{invoice.amount}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          invoice.status === 'pago' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {invoice.status === 'pago' ? '✅ Pago' : '⏳ Pendente'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AreaCliente;
