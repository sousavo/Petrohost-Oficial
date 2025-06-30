
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Users, Server, Globe, Mail, CreditCard, Settings, BarChart3, AlertTriangle, TrendingUp, Eye } from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total de Clientes', value: '1,247', icon: Users, color: 'text-blue-600' },
    { label: 'Servidores Ativos', value: '23', icon: Server, color: 'text-green-600' },
    { label: 'Domínios Registrados', value: '3,456', icon: Globe, color: 'text-purple-600' },
    { label: 'Receita Mensal', value: '2.340.500 Kz', icon: CreditCard, color: 'text-yellow-600' },
  ];

  const recentCustomers = [
    { name: 'João Silva', email: 'joao@exemplo.com', status: 'Ativo', joined: '15/11/2024' },
    { name: 'Maria Santos', email: 'maria@exemplo.com', status: 'Ativo', joined: '14/11/2024' },
    { name: 'Pedro Costa', email: 'pedro@exemplo.com', status: 'Pendente', joined: '13/11/2024' },
  ];

  const systemAlerts = [
    { type: 'warning', message: 'Servidor SRV-03 com 85% de uso de CPU', time: '10 min atrás' },
    { type: 'info', message: 'Backup automático concluído com sucesso', time: '1 hora atrás' },
    { type: 'error', message: 'Falha na conexão com gateway de pagamento', time: '2 horas atrás' },
  ];

  return (
    <div className="min-h-screen font-sans bg-petrohost-lightGray">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-petrohost-darkText mb-2">Painel Administrativo</h1>
            <p className="text-petrohost-textGray">Gerencie clientes, serviços e monitore a performance do sistema.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                <div className="p-6 border-b border-petrohost-borderGray">
                  <h3 className="font-bold text-petrohost-darkText">Administrador</h3>
                  <p className="text-sm text-petrohost-textGray">admin@petrohost.ao</p>
                </div>
                <div className="p-2">
                  <nav className="space-y-1">
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'dashboard' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <BarChart3 size={18} />
                      Dashboard
                    </button>
                    <button
                      onClick={() => setActiveTab('clientes')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'clientes' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <Users size={18} />
                      Clientes
                    </button>
                    <button
                      onClick={() => setActiveTab('servidores')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'servidores' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <Server size={18} />
                      Servidores
                    </button>
                    <button
                      onClick={() => setActiveTab('dominios')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'dominios' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <Globe size={18} />
                      Domínios
                    </button>
                    <button
                      onClick={() => setActiveTab('financeiro')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'financeiro' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <CreditCard size={18} />
                      Financeiro
                    </button>
                    <button
                      onClick={() => setActiveTab('configuracoes')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'configuracoes' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <Settings size={18} />
                      Configurações
                    </button>
                  </nav>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-petrohost-textGray">{stat.label}</p>
                            <p className="text-2xl font-bold text-petrohost-darkText">{stat.value}</p>
                          </div>
                          <stat.icon className={`${stat.color}`} size={32} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Alerts */}
                  <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                    <div className="p-6 border-b border-petrohost-borderGray">
                      <h3 className="text-lg font-bold text-petrohost-darkText flex items-center gap-2">
                        <AlertTriangle size={20} />
                        Alertas do Sistema
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {systemAlerts.map((alert, index) => (
                          <div key={index} className={`p-4 rounded-[3px] border-l-4 ${
                            alert.type === 'error' ? 'bg-red-50 border-red-500' :
                            alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                            'bg-blue-50 border-blue-500'
                          }`}>
                            <div className="flex justify-between items-start">
                              <p className="text-petrohost-darkText">{alert.message}</p>
                              <span className="text-sm text-petrohost-textGray">{alert.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Recent Customers */}
                  <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                    <div className="p-6 border-b border-petrohost-borderGray">
                      <h3 className="text-lg font-bold text-petrohost-darkText">Clientes Recentes</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {recentCustomers.map((customer, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border border-petrohost-borderGray rounded-[3px]">
                            <div>
                              <p className="font-medium text-petrohost-darkText">{customer.name}</p>
                              <p className="text-sm text-petrohost-textGray">{customer.email}</p>
                            </div>
                            <div className="text-right">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                customer.status === 'Ativo' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {customer.status}
                              </span>
                              <p className="text-sm text-petrohost-textGray mt-1">{customer.joined}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'clientes' && (
                <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                  <div className="p-6 border-b border-petrohost-borderGray flex justify-between items-center">
                    <h3 className="text-lg font-bold text-petrohost-darkText">Gestão de Clientes</h3>
                    <button className="bg-petrohost-blue text-white px-4 py-2 rounded-[3px] font-medium hover:opacity-90 transition-colors">
                      Novo Cliente
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentCustomers.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-6 border border-petrohost-borderGray rounded-[3px]">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-petrohost-lightGray rounded-full flex items-center justify-center">
                              <Users size={24} className="text-petrohost-blue" />
                            </div>
                            <div>
                              <p className="font-bold text-petrohost-darkText">{customer.name}</p>
                              <p className="text-petrohost-textGray">{customer.email}</p>
                              <p className="text-sm text-petrohost-textGray">Registrado em: {customer.joined}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-4 py-2 rounded-[3px] text-sm font-medium ${
                              customer.status === 'Ativo' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {customer.status}
                            </span>
                            <button className="text-petrohost-blue hover:underline flex items-center gap-1">
                              <Eye size={16} />
                              Ver Detalhes
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {(activeTab === 'servidores' || activeTab === 'dominios' || activeTab === 'financeiro' || activeTab === 'configuracoes') && (
                <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray p-8 text-center">
                  <h3 className="text-xl font-bold text-petrohost-darkText mb-4">
                    {activeTab === 'servidores' && 'Gestão de Servidores'}
                    {activeTab === 'dominios' && 'Gestão de Domínios'}
                    {activeTab === 'financeiro' && 'Relatórios Financeiros'}
                    {activeTab === 'configuracoes' && 'Configurações do Sistema'}
                  </h3>
                  <p className="text-petrohost-textGray">
                    Esta seção está em desenvolvimento e será implementada em breve.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
