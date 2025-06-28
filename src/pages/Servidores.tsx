
import Header from "../components/Header";
import Footer from "../components/Footer";

const Servidores = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
              Servidores Dedicados e VPS
            </h1>
            <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto">
              Máxima performance e controle total com nossos servidores dedicados e VPS. Ideal para projetos de grande porte.
            </p>
          </div>
          
          <div className="bg-petrohost-lightGray rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-petrohost-darkText mb-4">
              Página em Desenvolvimento
            </h2>
            <p className="text-petrohost-textGray">
              Esta página será desenvolvida com todos os planos de servidores.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Servidores;
