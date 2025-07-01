
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Users, 
  Globe, 
  DollarSign, 
  TrendingUp, 
  Mail, 
  Settings, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const AreaAdmin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dados simulados para o admin
  const adminData = {
    stats: {
      totalUsers: 1250,
      totalDomains: 3420,
      monthlyRevenue: "2.500.000,00 Kz",
      activeServices: 850
    },
    recentSales: [
      { month: 'Jan', vendas: 65000 },
      { month: 'Fev', vendas: 78000 },
      { month: 'Mar', vendas: 82000 },
      { month: 'Abr', vendas: 91000 },
      { month: 'Mai', vendas: 105000 },
      { month: 'Jun', vendas: 125000 }
    ],
    domainTypes: [
      { name: '.com', value: 45, color: '#004269' },
      { name: '.ao', value: 30, color: '#FFB900' },
      { name: '.net', value: 15, color: '#22c55e' },
      { name: '.org', value: 10, color: '#f97316' }
    ],
    recentOrders: [
      { id: 'ORD-001', customer: 'Maria Santos', domain: 'empresa.ao', amount: '25.000,00 Kz', status: 'processando' },
      { id: 'ORD-002', customer: 'João Silva', domain: 'loja.com', amount: '21.500,00 Kz', status: 'completo' },
      { id: 'ORD-003', customer: 'Ana Costa', domain: 'blog.net', amount: '25.500,00 Kz', status: 'pendente' }
    ]
  };

  const TabButton = ({ id, label, icon: Icon, active }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 px-6 py-4 rounded-[3px] font-medium transition-all duration-300 ${
        active 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border-[3px] border-gray-200'
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-slate-100 to-gray-100">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Admin */}
          <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-[3px] p-8 mb-8 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Painel Administrativo 🛡️
                </h1>
                <p className="text-purple-100">Controle total do sistema Petrohost</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-white text-purple-700 px-6 py-3 rounded-[3px] font-bold hover:bg-gray-100 transition-colors">
                  <Mail size={16} className="inline mr-2" />
                  Suporte
                </button>
                <button className="border-[3px] border-white text-white px-6 py-3 rounded-[3px] font-bold hover:bg-white hover:text-purple-700 transition-colors">
                  <Settings size={16} className="inline mr-2" />
                  Sistema
                </button>
              </div>
            </div>
          </div>

          {/* Navegação Admin */}
          <div className="flex flex-wrap gap-4 mb-8">
            <TabButton 
              id="dashboard" 
              label="Dashboard" 
              icon={BarChart} 
              active={activeTab === 'dashboard'} 
            />
            <TabButton 
              id="usuarios" 
              label="Usuários" 
              icon={Users} 
              active={activeTab === 'usuarios'} 
            />
            <TabButton 
              id="dominios" 
              label="Domínios" 
              icon={Globe} 
              active={activeTab === 'dominios'} 
            />
            <TabButton 
              id="financeiro" 
              label="Financeiro" 
              icon={DollarSign} 
              active={activeTab === 'financeiro'} 
            />
            <TabButton 
              id="sistema" 
              label="Sistema" 
              icon={Shield} 
              active={activeTab === 'sistema'} 
            />
          </div>

          {/* Dashboard Content */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Estatísticas Principais */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-[3px] shadow-xl">
                  <Users className="mb-4" size={36} />
                  <h3 className="text-3xl font-bold">{adminData.stats.totalUsers.toLocaleString()}</h3>
                  <p className="opacity-90">Total de Usuários</p>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-[3px] shadow-xl">
                  <Globe className="mb-4" size={36} />
                  <h3 className="text-3xl font-bold">{adminData.stats.totalDomains.toLocaleString()}</h3>
                  <p className="opacity-90">Domínios Registrados</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-[3px] shadow-xl">
                  <DollarSign className="mb-4" size={36} />
                  <h3 className="text-3xl font-bold">{adminData.stats.monthlyRevenue}</h3>
                  <p className="opacity-90">Receita Mensal</p>
                </div>
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 rounded-[3px] shadow-xl">
                  <TrendingUp className="mb-4" size={36} />
                  <h3 className="text-3xl font-bold">{adminData.stats.activeServices}</h3>
                  <p className="opacity-90">Serviços Ativos</p>
                </div>
              </div>

              {/* Gráficos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Gráfico de Vendas */}
                <div className="bg-white rounded-[3px] border-[3px] border-gray-200 p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Vendas Mensais</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={adminData.recentSales}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value.toLocaleString()} Kz`, 'Vendas']} />
                      <Bar dataKey="vendas" fill="#004269" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Gráfico de Domínios */}
                <div className="bg-white rounded-[3px] border-[3px] border-gray-200 p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Distribuição de Domínios</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={adminData.domainTypes}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {adminData.domainTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pedidos Recentes */}
              <div className="bg-white rounded-[3px] border-[3px] border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Pedidos Recentes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 font-bold text-gray-700">ID</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-700">Cliente</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-700">Domínio</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-700">Valor</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminData.recentOrders.map((order, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">{order.id}</td>
                          <td className="py-4 px-4">{order.customer}</td>
                          <td className="py-4 px-4 font-medium text-blue-600">{order.domain}</td>
                          <td className="py-4 px-4 font-bold">{order.amount}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                              order.status === 'completo' 
                                ? 'bg-green-100 text-green-700' 
                                : order.status === 'processando'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {order.status === 'completo' && <CheckCircle size={12} className="inline mr-1" />}
                              {order.status === 'processando' && <Clock size={12} className="inline mr-1" />}
                              {order.status === 'pendente' && <AlertTriangle size={12} className="inline mr-1" />}
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Outras abas podem ser implementadas aqui */}
          {activeTab !== 'dashboard' && (
            <div className="bg-white rounded-[3px] border-[3px] border-gray-200 p-8 shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Seção {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-gray-600">
                Esta seção será implementada em breve com funcionalidades específicas.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AreaAdmin;
