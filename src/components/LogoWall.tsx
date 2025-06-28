
const LogoWall = () => {
  // Placeholder logos - in a real implementation, these would be actual client logos
  const logos = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Cliente ${i + 1}`,
    placeholder: `Logo ${i + 1}`
  }));

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Empresas que confiam na Petrohost
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centenas de empresas já escolheram nossa plataforma para hospedar 
            seus projetos digitais com segurança e confiabilidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="bg-petrohost-lightGray rounded-2xl p-6 flex items-center justify-center h-24 hover:bg-gray-200 transition-colors"
            >
              <div className="text-gray-500 font-medium text-sm">
                {logo.placeholder}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
