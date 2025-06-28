
const ProductCards = () => {
  const products = [
    {
      title: "Hospedagem Compartilhada",
      startingPrice: "R$ 9,90",
      isHighlighted: false
    },
    {
      title: "Hospedagem WordPress",
      startingPrice: "R$ 19,90",
      isHighlighted: false
    },
    {
      title: "VPS Cloud",
      startingPrice: "R$ 49,90",
      isHighlighted: true
    },
    {
      title: "Servidor Dedicado",
      startingPrice: "R$ 199,90",
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
              className={`rounded-2xl shadow-lg p-8 text-center transition-transform hover:scale-105 ${
                product.isHighlighted 
                  ? 'bg-petrohost-blue text-white' 
                  : 'bg-white text-gray-800'
              }`}
            >
              <h3 className="text-xl font-bold mb-4">{product.title}</h3>
              <p className={`text-sm mb-2 ${product.isHighlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                Começando em
              </p>
              <div className="text-3xl font-bold mb-6 text-petrohost-gold">
                {product.startingPrice}
              </div>
              <a 
                href="#" 
                className={`inline-block font-medium transition-colors ${
                  product.isHighlighted 
                    ? 'text-petrohost-gold hover:text-yellow-300' 
                    : 'text-petrohost-blue hover:text-blue-700'
                }`}
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
