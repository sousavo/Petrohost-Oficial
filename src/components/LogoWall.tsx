
const LogoWall = () => {
  // Placeholders para 15 logos de parceiros (5 colunas x 3 linhas)
  const logos = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Parceiro ${i + 1}`,
    placeholder: `Logo ${i + 1}`
  }));

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
            Empresas que confiam a Petrohost
          </h2>
          <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto">
            Parceiros que impulsionam seus negócios com nossa infraestrutura confiável.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="bg-petrohost-lightGray rounded-2xl p-6 flex items-center justify-center h-24 hover:bg-gray-200 transition-colors"
            >
              <div className="text-petrohost-textGray font-medium text-sm">
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
