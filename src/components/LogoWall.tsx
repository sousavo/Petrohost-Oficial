
const LogoWall = () => {
  // Criando 15 placeholders para logos de parceiros
  const partnerLogos = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    placeholder: `Logo ${index + 1}`,
    path: `/images/parceiros/logo${index + 1}.svg`
  }));

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
            Empresas que confiam na Petrohost
          </h2>
          <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto">
            Parceiros que impulsionam seus negócios com nossa infraestrutura confiável.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partnerLogos.map((logo) => (
            <div key={logo.id} className="bg-petrohost-lightGray rounded-xl p-6 flex items-center justify-center h-24 hover:bg-gray-200 transition-colors">
              <div className="text-petrohost-textGray text-sm font-medium">
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
