import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação fake
    console.log('Login:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Coluna Esquerda */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-petrohost-darkText min-h-screen">
        <div className="max-w-lg w-full mx-auto">
          <Link to="/" className="inline-block"><img src="/logo2.png" alt="Logo" className="h-10 mb-16" /></Link>
          <h1 className="text-5xl font-bold text-white mb-12">Conecte-se</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">Nome de usuário <span className="text-petrohost-yellow">*</span></label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-petrohost-borderGray bg-transparent text-white rounded-[3px] focus:ring-2 focus:ring-petrohost-yellow focus:border-transparent placeholder:text-petrohost-textGray"
                style={{ borderRadius: '3px' }}
                placeholder="Digite seu usuário ou e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-white font-medium mb-2">Senha <span className="text-petrohost-yellow">*</span></label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-petrohost-borderGray bg-transparent text-white rounded-[3px] focus:ring-2 focus:ring-petrohost-yellow focus:border-transparent placeholder:text-petrohost-textGray"
                  style={{ borderRadius: '3px' }}
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-petrohost-textGray hover:text-petrohost-yellow"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label="Mostrar senha"
                >
                  {showPassword ? (
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
              Conecte-se
            </button>
          </form>
          <div className="flex flex-col items-center mt-8 gap-2">
            <span className="text-white text-sm">Novo no site? <Link to="/registro" className="text-petrohost-yellow hover:underline">Crie uma conta</Link> para começar</span>
            <Link to="#" className="text-white hover:underline text-sm mt-2">Esqueceu sua senha?</Link>
          </div>
        </div>
      </div>
      {/* Coluna Direita */}
      <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-petrohost-blue via-[#045488] to-petrohost-darkText">
        <div className="bg-petrohost-darkText bg-opacity-95 rounded-xl shadow-xl p-10 max-w-lg w-full mx-8">
          <img src="/logo2.png" alt="Logo" className="h-10 mb-8 mx-auto" />
          <div className="text-white text-base mb-8 text-left">
            <div className="font-semibold mb-6">Bem-vindo de volta e diga olá ao seu novo e atualizado painel de clientes.</div>
            <div className="mb-8">Não se preocupe, tudo o que você precisa está exatamente onde você deixou.</div>
            <ul className="text-white text-base space-y-5 mb-8">
              <li className="flex items-start gap-3">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Seus dados de login não foram alterados</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Seus produtos e serviços são os mesmos</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Nossa equipe de suporte continua aqui 24 horas por dia, 7 dias por semana</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Sua conta permanece segura e protegida</span>
              </li>
            </ul>
            <div className="text-white text-base mt-8">
              Acabamos de tornar as coisas um pouco mais fáceis de encontrar e mais agradáveis de usar. Sem surpresas. Apenas um design mais inteligente.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 