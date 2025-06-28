import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui seria implementada a lógica de envio
  };

  return (
    <div className="min-h-screen font-sans bg-petrohost-bg relative">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Esquerda: Texto */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
              Contate-nos
            </h1>
            <p className="text-lg text-petrohost-textGray mb-8">
              Precisa de ajuda? Estamos aqui para ajudar! Se você tiver dúvidas sobre seus serviços atuais, quiser explorar novas opções ou precisar de ajuda com o faturamento, nossa equipe está aqui para ajudar. Prefere falar diretamente com alguém? Ligue para <span className="font-semibold text-petrohost-blue">(+244) 923 000 143</span> ou, se precisar de respostas rápidas, inicie um chat ao vivo com um membro da equipe de suporte agora mesmo!
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-petrohost-blue text-white px-8 py-4 font-bold text-lg hover:bg-petrohost-yellow hover:text-petrohost-blue transition-colors border-none rounded-[3px]"
              style={{ borderRadius: '3px' }}
            >
              Converse conosco
            </button>
          </div>
          {/* Direita: Imagem ilustrativa (opcional) */}
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <img src="/public/support.png" alt="Atendimento" className="max-w-md rounded-xl shadow-lg" />
          </div>
        </div>
        {/* Painel flutuante do formulário estilo chat */}
        {showForm && (
          <div className="fixed bottom-6 right-6 w-[350px] max-w-full max-h-[80vh] bg-white shadow-2xl z-50 flex flex-col border border-petrohost-borderGray rounded-[12px] animate-slideIn">
            <div className="flex justify-between items-center p-4 border-b border-petrohost-borderGray">
              <h2 className="text-xl font-bold text-petrohost-blue">Fale conosco</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-petrohost-blue text-2xl font-bold hover:text-petrohost-yellow transition-colors"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-petrohost-darkText font-medium mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-petrohost-borderGray focus:ring-2 focus:ring-petrohost-blue focus:border-transparent rounded-[3px]"
                    style={{ borderRadius: '3px' }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-petrohost-darkText font-medium mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-petrohost-borderGray focus:ring-2 focus:ring-petrohost-blue focus:border-transparent rounded-[3px]"
                    style={{ borderRadius: '3px' }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-petrohost-darkText font-medium mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-petrohost-borderGray focus:ring-2 focus:ring-petrohost-blue focus:border-transparent rounded-[3px]"
                    style={{ borderRadius: '3px' }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-petrohost-darkText font-medium mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-petrohost-borderGray focus:ring-2 focus:ring-petrohost-blue focus:border-transparent resize-vertical rounded-[3px]"
                    style={{ borderRadius: '3px' }}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-petrohost-yellow text-petrohost-blue px-6 py-3 font-bold text-lg hover:bg-yellow-400 transition-colors rounded-[3px]"
                  style={{ borderRadius: '3px' }}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
