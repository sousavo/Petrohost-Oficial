import { ShieldCheck } from "lucide-react";

const advantages = [
  {
    text: "Desenvolvimento sob medida: construímos seu site do zero, com foco em desempenho, segurança e design personalizado para atender às necessidades do seu negócio."
  },
  {
    text: "Loja online personalizada: se você precisa vender online, criamos soluções de e-commerce sob medida, com recursos otimizados e integração completa."
  },
  {
    text: "Velocidade impressionante: nossos planos contam com a tecnologia Turbo, garantindo carregamento rápido e performance superior em qualquer dispositivo."
  }
];

const AdvantagesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda (Texto) */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Tudo o que seu <span className="text-black font-extrabold">site</span><br />precisa para ter sucesso
            </h2>
            <p className="text-base md:text-lg text-black mb-6">
              Na PetroHost, facilitamos a criação do seu site e oferecemos as ferramentas certas para colocá-lo no ar de forma rápida e profissional.
            </p>
            <ul className="space-y-4 mb-8">
              {advantages.map((adv, index) => (
                <li key={index} className="flex items-start">
                  <ShieldCheck size={20} className="text-black mt-1 mr-3" />
                  <span className="text-black text-base leading-relaxed">{adv.text}</span>
                </li>
              ))}
            </ul>
            <button className="bg-petrohost-blue text-white px-6 py-3 rounded font-bold text-base hover:bg-blue-800 transition-colors">
              Saiba mais
            </button>
          </div>

          {/* Coluna Direita (Visual) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src="/hospedagem2.png" alt="Site de sucesso" className="max-w-md w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
