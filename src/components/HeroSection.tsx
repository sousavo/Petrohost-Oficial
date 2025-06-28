import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="bg-petrohost-blue py-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Coluna Esquerda (Texto) - 60% */}
            <div className="lg:col-span-3 text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Somos o Parceiro ideal para hospedar seus projetos.
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Os serviços de hospedagem premium que você precisa para criar um site rápido <br />  
                e de sucesso Comece a usar a hospedagem web em poucos minutos.
              </p>
              <button className="bg-petrohost-yellow text-petrohost-blue px-8 py-4 rounded-[3px] font-bold text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105">
                Veja nossos planos
              </button>
            </div>

            {/* Coluna Direita (Visual) - Imagem PNG sem fundo branco */}
            <div className="lg:col-span-2 flex items-center justify-center relative">
              {/* Apenas a imagem PNG, sem fundo branco */}
              <img
                src="/hero1.png"
                alt="Sua imagem aqui"
                className="w-full h-96 lg:h-[500px] max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Linha branca divisória */}
      <div className="relative w-full h-8">
        <div className="absolute left-0 right-0 top-0 h-8 bg-white"></div>
      </div>

      {/* Cards flutuando */}
      <div className="container mx-auto px-4 relative z-10 -mt-20 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-center">
          <div className="bg-white rounded-[3px] shadow-lg w-[300px] h-[210px] flex flex-col items-start text-left px-7 py-5 justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <div className="font-semibold text-lg mb-2">E-mail profissional</div>
            <div className="text-[13px] text-petrohost-textGray mb-2">Começando em</div>
            <div className="text-2xl font-bold mb-3">12 500,00 Kz</div>
            <a href="#" className="text-petrohost-blue text-sm font-medium no-underline transition-all duration-300 mt-2 flex items-center gap-1 group">
              Saiba mas <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="bg-white rounded-[3px] shadow-lg w-[300px] h-[210px] flex flex-col items-start text-left px-7 py-5 justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <div className="font-semibold text-lg mb-2">Hospedagem web confiável</div>
            <div className="text-[13px] text-petrohost-textGray mb-2">Começando em</div>
            <div className="text-2xl font-bold mb-3">45.600,00 Kz</div>
            <a href="#" className="text-petrohost-blue text-sm font-medium no-underline transition-all duration-300 mt-2 flex items-center gap-1 group">
              Saiba mas <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="bg-petrohost-blue rounded-[3px] shadow-lg w-[300px] h-[210px] flex flex-col items-start text-left px-7 py-5 justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <div className="font-semibold text-lg mb-2 text-white">Domínios Personalizado</div>
            <div className="text-[13px] text-white mb-2">Começando em</div>
            <div className="text-2xl font-bold mb-3 text-white">5.000,00 Kz</div>
            <a href="#" className="text-white text-sm font-medium no-underline transition-all duration-300 mt-2 flex items-center gap-1 group">
              Saiba mas <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="bg-white rounded-[3px] shadow-lg w-[300px] h-[210px] flex flex-col items-start text-left px-7 py-5 justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <div className="font-semibold text-lg mb-2">VPS ultrarrápido</div>
            <div className="text-[13px] text-petrohost-textGray mb-2">Começando em</div>
            <div className="text-2xl font-bold mb-3">10 500,00 Kz</div>
            <a href="#" className="text-petrohost-blue text-sm font-medium no-underline transition-all duration-300 mt-2 flex items-center gap-1 group">
              Saiba mas <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
