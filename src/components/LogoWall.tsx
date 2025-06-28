const LogoWall = () => {
  // Defina aqui o caminho de cada logo individualmente
  const partnerLogos = [
    { id: 1, path: "/1.png" },
    { id: 2, path: "/2.png" },
    { id: 3, path: "/3.png" },
    { id: 4, path: "/4.png" },
    { id: 5, path: "/5.png" },
    { id: 6, path: "/6.png" },
    { id: 7, path: "/7.png" },
    { id: 8, path: "/8.png" },
    { id: 9, path: "/9.png" },
    { id: 10, path: "/9.webp" },
    { id: 11, path: "/11.png" },
    { id: 12, path: "/12.png" },
    { id: 13, path: "/13.png" },
    { id: 14, path: "/14.png" },
    { id: 15, path: "/15.png" },
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Background decorativo de pingos pretos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="6" fill="#222" fillOpacity="0.12" />
          <circle cx="30%" cy="80%" r="8" fill="#222" fillOpacity="0.10" />
          <circle cx="50%" cy="50%" r="5" fill="#222" fillOpacity="0.13" />
          <circle cx="80%" cy="30%" r="7" fill="#222" fillOpacity="0.09" />
          <circle cx="90%" cy="70%" r="10" fill="#222" fillOpacity="0.08" />
          <circle cx="60%" cy="10%" r="4" fill="#222" fillOpacity="0.10" />
          <circle cx="15%" cy="60%" r="5" fill="#222" fillOpacity="0.10" />
          <circle cx="25%" cy="35%" r="7" fill="#222" fillOpacity="0.09" />
          <circle cx="40%" cy="75%" r="6" fill="#222" fillOpacity="0.11" />
          <circle cx="70%" cy="60%" r="8" fill="#222" fillOpacity="0.10" />
          <circle cx="85%" cy="15%" r="5" fill="#222" fillOpacity="0.12" />
          <circle cx="75%" cy="85%" r="7" fill="#222" fillOpacity="0.09" />
          <circle cx="55%" cy="25%" r="4" fill="#222" fillOpacity="0.10" />
          <circle cx="35%" cy="10%" r="6" fill="#222" fillOpacity="0.08" />
          <circle cx="95%" cy="50%" r="6" fill="#222" fillOpacity="0.10" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
            Empresas que confiam a Petrohost
          </h2>
          <p className="text-base md:text-lg text-black opacity-80">
            Parceiros que impulsionam seus negócios com nossa infraestrutura confiável.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="bg-gray-200 rounded-[3px] p-6 flex items-center justify-center h-24 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-gray-300 group relative z-10"
            >
              <img
                src={logo.path}
                alt={`Logo ${logo.id}`}
                className="max-h-12 object-contain transition-all duration-200 group-hover:drop-shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
