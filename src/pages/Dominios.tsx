import Header from "../components/Header";
import Footer from "../components/Footer";

const Dominios = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-petrohost-darkText mb-6">
              Registre o Seu Domínio
            </h1>
            <p className="text-xl text-petrohost-textGray max-w-3xl mx-auto">
              Encontre e registre o nome de domínio ideal para a sua marca. Garanta sua presença online hoje mesmo.
            </p>
          </div>
          
          <div className="bg-petrohost-lightGray rounded-[3px] p-12 text-center">
            <h2 className="text-2xl font-bold text-petrohost-darkText mb-4">
              Página em Desenvolvimento
            </h2>
            <p className="text-petrohost-textGray">
              Esta página será desenvolvida com ferramenta de pesquisa e registro de domínios.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dominios;
