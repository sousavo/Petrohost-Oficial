
const ProductCards = () => {
  const products = [
    {
      title: "E-mail profissional",
      startingPrice: "12 500,00 Kz",
      isHighlighted: false
    },
    {
      title: "Hospedagem Compartilhada",
      startingPrice: "15 000,00 Kz",
      isHighlighted: false
    },
    {
      title: "VPS Cloud",
      startingPrice: "45 000,00 Kz",
      isHighlighted: true
    },
    {
      title: "Servidor Dedicado",
      startingPrice: "120 000,00 Kz",
      isHighlighted: false
    }
  ];

  return (
    <section className="bg-petrohost-lightGray py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 text-center transition-transform hover:scale-105 ${
                product.isHighlighted 
                  ? 'bg-petrohost-blue text-white shadow-xl' 
                  : 'bg-white text-petrohost-darkText border border-petrohost-borderGray shadow-md'
              }`}
            >
              <h3 className="text-xl font-bold mb-4">{product.title}</h3>
              <p className={`text-sm mb-2 ${product.isHighlighted ? 'text-gray-200' : 'text-petrohost-textGray'}`}>
                Começando em
              </p>
              <div className="text-3xl font-bold mb-6 text-petrohost-yellow">
                {product.startingPrice}
              </div>
              <a 
                href="#" 
                className={`inline-block font-medium transition-colors ${
                  product.isHighlighted 
                    ? 'text-petrohost-yellow hover:text-yellow-300' 
                    : 'text-petrohost-blue hover:text-blue-700'
                }`}
              >
                Saiba mas →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
