
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Server, Globe, Mail, CreditCard, Settings, FileText, BarChart3, Calendar } from "lucide-react";

const Cliente = () => {
  const [activeTab, setActiveTab] = useState('visao-geral');

  const services = [
    { name: 'exemplo.com', type: 'Domínio', status: 'Ativo', expiry: '15/12/2024' },
    { name: 'Hospedagem Shared', type: 'Hospedagem', status: 'Ativo', expiry: '20/01/2025' },
    { name: 'contato@exemplo.com', type: 'Email', status: 'Ativo', expiry: '15/12/2024' },
  ];

  const invoices = [
    { id: '#INV-001', date: '15/11/2024', amount: '2.500,00 Kz', status: 'Pago' },
    { id: '#INV-002', date: '15/10/2024', amount: '1.800,00 Kz', status: 'Pago' },
    { id: '#INV-003', date: '15/12/2024', amount: '2.500,00 Kz', status: 'Pendente' },
  ];

  return (
    <div className="min-h-screen font-sans bg-petrohost-lightGray">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-petrohost-darkText mb-2">Área do Cliente</h1>
            <p className="text-petrohost-textGray">Gerencie seus serviços, domínios e faturas em um só lugar.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                <div className="p-6 border-b border-petrohost-borderGray">
                  <h3 className="font-bold text-petrohost-darkText">João Silva</h3>
                  <p className="text-sm text-petrohost-textGray">joao@exemplo.com</p>
                </div>
                <div className="p-2">
                  <nav className="space-y-1">
                    <button
                      onClick={() => setActiveTab('visao-geral')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'visao-geral' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <BarChart3 size={18} />
                      Visão Geral
                    </button>
                    <button
                      onClick={() => setActiveTab('servicos')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'servicos' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <Server size={18} />
                      Meus Serviços
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
                      onClick={() => setActiveTab('faturas')}
                      className={`w-full text-left px-4 py-3 rounded-[3px] flex items-center gap-3 transition-colors ${
                        activeTab === 'faturas' 
                          ? 'bg-petrohost-blue text-white' 
                          : 'text-petrohost-textGray hover:bg-petrohost-lightGray'
                      }`}
                    >
                      <FileText size={18} />
                      Faturas
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
              {activeTab === 'visao-geral' && (
                <div className="space-y-6">
                  {/* Cards de Resumo */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-petrohost-textGray">Serviços Ativos</p>
                          <p className="text-2xl font-bold text-petrohost-darkText">3</p>
                        </div>
                        <Server className="text-petrohost-blue" size={32} />
                      </div>
                    </div>
                    <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-petrohost-textGray">Domínios</p>
                          <p className="text-2xl font-bold text-petrohost-darkText">1</p>
                        </div>
                        <Globe className="text-petrohost-blue" size={32} />
                      </div>
                    </div>
                    <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-petrohost-textGray">Faturas Pendentes</p>
                          <p className="text-2xl font-bold text-red-600">1</p>
                        </div>
                        <CreditCard className="text-red-500" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Serviços Recentes */}
                  <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                    <div className="p-6 border-b border-petrohost-borderGray">
                      <h3 className="text-lg font-bold text-petrohost-darkText">Serviços Recentes</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {services.slice(0, 3).map((service, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border border-petrohost-borderGray rounded-[3px]">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-petrohost-lightGray rounded-[3px] flex items-center justify-center">
                                {service.type === 'Domínio' && <Globe size={20} className="text-petrohost-blue" />}
                                {service.type === 'Hospedagem' && <Server size={20} className="text-petrohost-blue" />}
                                {service.type === 'Email' && <Mail size={20} className="text-petrohost-blue" />}
                              </div>
                              <div>
                                <p className="font-medium text-petrohost-darkText">{service.name}</p>
                                <p className="text-sm text-petrohost-textGray">{service.type}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                service.status === 'Ativo' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {service.status}
                              </span>
                              <p className="text-sm text-petrohost-textGray mt-1">Expira: {service.expiry}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'servicos' && (
                <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                  <div className="p-6 border-b border-petrohost-borderGray">
                    <h3 className="text-lg font-bold text-petrohost-darkText">Meus Serviços</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-6 border border-petrohost-borderGray rounded-[3px]">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-petrohost-lightGray rounded-[3px] flex items-center justify-center">
                              {service.type === 'Domínio' && <Globe size={24} className="text-petrohost-blue" />}
                              {service.type === 'Hospedagem' && <Server size={24} className="text-petrohost-blue" />}
                              {service.type === 'Email' && <Mail size={24} className="text-petrohost-blue" />}
                            </div>
                            <div>
                              <p className="font-bold text-petrohost-darkText">{service.name}</p>
                              <p className="text-petrohost-textGray">{service.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-4 py-2 rounded-[3px] text-sm font-medium ${
                              service.status === 'Ativo' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {service.status}
                            </span>
                            <p className="text-sm text-petrohost-textGray mt-2">Expira em: {service.expiry}</p>
                            <button className="text-petrohost-blue hover:underline text-sm mt-2">
                              Gerenciar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'faturas' && (
                <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray">
                  <div className="p-6 border-b border-petrohost-borderGray">
                    <h3 className="text-lg font-bold text-petrohost-darkText">Faturas</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {invoices.map((invoice, index) => (
                        <div key={index} className="flex items-center justify-between p-6 border border-petrohost-borderGray rounded-[3px]">
                          <div>
                            <p className="font-bold text-petrohost-darkText">{invoice.id}</p>
                            <p className="text-petrohost-textGray">{invoice.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-petrohost-darkText">{invoice.amount}</p>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              invoice.status === 'Pago' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {invoice.status}
                            </span>
                          </div>
                          <button className="text-petrohost-blue hover:underline">
                            Ver Detalhes
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {(activeTab === 'dominios' || activeTab === 'configuracoes') && (
                <div className="bg-white rounded-[3px] shadow-sm border border-petrohost-borderGray p-8 text-center">
                  <h3 className="text-xl font-bold text-petrohost-darkText mb-4">
                    {activeTab === 'dominios' ? 'Gerenciamento de Domínios' : 'Configurações da Conta'}
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

export default Cliente;
