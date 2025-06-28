
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
    <div className="min-h-screen font-sans">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudar. Fale conosco através do formulário abaixo, telefone ou e-mail.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-petrohost-darkText font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-petrohost-borderGray rounded-lg focus:ring-2 focus:ring-petrohost-blue focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-petrohost-darkText font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-petrohost-borderGray rounded-lg focus:ring-2 focus:ring-petrohost-blue focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="assunto" className="block text-petrohost-darkText font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-petrohost-borderGray rounded-lg focus:ring-2 focus:ring-petrohost-blue focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-petrohost-darkText font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-petrohost-borderGray rounded-lg focus:ring-2 focus:ring-petrohost-blue focus:border-transparent resize-vertical"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-petrohost-yellow text-petrohost-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;
