import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    showPassword: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro fake
    console.log('Registro:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Coluna Esquerda */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-petrohost-darkText min-h-screen">
        <div className="max-w-lg w-full mx-auto">
          <Link to="/" className="inline-block"><img src="/logo2.png" alt="Logo" className="h-10 mb-16" /></Link>
          <h1 className="text-5xl font-bold text-white mb-12">Inscrever-se</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="nome" className="block text-white font-medium mb-2">Primeiro nome <span className="text-petrohost-blue">*</span></label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-petrohost-borderGray bg-transparent text-white rounded-[3px] focus:ring-2 focus:ring-petrohost-blue focus:border-transparent placeholder:text-petrohost-textGray"
                  style={{ borderRadius: '3px' }}
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="sobrenome" className="block text-white font-medium mb-2">Sobrenome <span className="text-petrohost-blue">*</span></label>
                <input
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-petrohost-borderGray bg-transparent text-white rounded-[3px] focus:ring-2 focus:ring-petrohost-blue focus:border-transparent placeholder:text-petrohost-textGray"
                  style={{ borderRadius: '3px' }}
                  placeholder="Digite seu sobrenome"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">E-mail <span className="text-petrohost-blue">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-petrohost-borderGray bg-transparent text-white rounded-[3px] focus:ring-2 focus:ring-petrohost-blue focus:border-transparent placeholder:text-petrohost-textGray"
                style={{ borderRadius: '3px' }}
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-white font-medium mb-2">Senha <span className="text-petrohost-blue">*</span></label>
              <div className="relative">
                <input
                  type={formData.showPassword ? "text" : "password"}
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-petrohost-borderGray bg-transparent text-white rounded-[3px] focus:ring-2 focus:ring-petrohost-blue focus:border-transparent placeholder:text-petrohost-textGray"
                  style={{ borderRadius: '3px' }}
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-petrohost-textGray hover:text-petrohost-blue"
                  onClick={() => setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                  tabIndex={-1}
                  aria-label="Mostrar senha"
                >
                  {formData.showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18M10.584 10.587A2 2 0 0012 16a2 2 0 002-2c0-.414-.126-.8-.34-1.12m-1.08-1.08A2 2 0 0012 8a2 2 0 00-2 2c0 .414.126.8.34 1.12m1.08 1.08zM21 12s-3.6 6-9 6-9-6-9-6 3.6-6 9-6c2.21 0 4.21.72 5.83 1.93"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4c5.4 0 9 6 9 6s-3.6 6-9 6-9-6-9-6 3.6-6 9-6zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-petrohost-blue to-[#045488] text-white px-6 py-3 font-bold text-lg rounded-[3px] hover:opacity-90 transition-colors"
              style={{ borderRadius: '3px' }}
            >
              Inscrever-se
            </button>
          </form>
          <div className="flex flex-col items-center mt-8 gap-2">
            <span className="text-white text-sm">Já tem uma conta? <Link to="/login" className="text-petrohost-yellow hover:underline">Entrar</Link></span>
          </div>
        </div>
      </div>
      {/* Coluna Direita */}
      <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-petrohost-blue via-[#045488] to-petrohost-darkText">
        {/* Espaço para card ou mensagem futura, se desejar */}
      </div>
    </div>
  );
};

export default Registro; 