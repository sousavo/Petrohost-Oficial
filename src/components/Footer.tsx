import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    hospedagem: ["Hospedagem", "Hospedagem para Wordpress", "Hospedagem CPanel", "Hospedagem de Revenda"],
    solucoes: ["Compra um Domínios", "Todos os Domínios", "Transferência de Domínios", "Certificados SSL", "Hospedagem VPS"],
    apoiar: ["Login do Cliente", "Criar nova conta", "Abrir Ticket de suporte", "Denunciar Abuso", "Status de serviço"],
    empresa: ["Sobre", "Contacto", "Blog", "Base de Conhecimento"]
  };

  return (
    <footer className="bg-gradient-to-br from-[#0a3a63] to-[#045488]">
      {/* Área de Contato */}
      <div className="container mx-auto px-4 pt-16 pb-0 mb-24">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-16 min-h-[340px]">
          {/* Imagem à esquerda com borda branca e sombra */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <img src="/support.png" alt="Atendimento 24h" className="w-[280px] h-[280px] object-cover rounded-[3px]" />
          </div>
          {/* Texto e botão à direita, centralizado verticalmente */}
          <div className="flex flex-col justify-center items-start w-full max-w-xl ml-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Dúvidas?<br />
              <span className="block">Estamos aqui para ajudar.</span>
            </h2>
            <p className="text-white opacity-90 mb-7 max-w-lg text-base md:text-lg">
              Nossa equipe técnica da Petrohost está disponível 24 horas por dia, 7 dias por semana, para ajudar você a entender qual plano funcionará melhor para suas necessidades específicas!
            </p>
            <a href="#" className="bg-yellow-400 text-black px-8 py-3 rounded-[3px] font-bold text-base hover:bg-yellow-300 transition-colors shadow min-w-[200px] text-center">
              Entre em contato
            </a>
          </div>
        </div>
      </div>
<br />
<br />
<br />
<br />
<br />
      {/* Navegação do Rodapé */}
      <div className="container mx-auto px-4 pt-0 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          {/* Logo e Botão */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo2.png" alt="Petrohost" className="mb-6 w-40" />
            <a href="#" className="bg-white text-[#045488] px-7 py-3 rounded-[3px] font-bold hover:bg-gray-100 transition-colors shadow text-center md:text-left min-w-[150px]">
              Entrar agora
            </a>
          </div>
          {/* Hospedagem */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Hospedagem</h4>
            <ul className="space-y-2">
              {footerLinks.hospedagem.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Soluções */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Soluções</h4>
            <ul className="space-y-2">
              {footerLinks.solucoes.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Apoiar */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Apoiar</h4>
            <ul className="space-y-2">
              {footerLinks.apoiar.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Empresa */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barra Inferior do Rodapé */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Redes Sociais & Telefone */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-3">
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
              <div className="text-white text-sm">
                (+244) 923 000 143
              </div>
            </div>
            {/* Links Legais */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                Garantia de Privacidade
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                Política de Uso Aceitável
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                Declaração de Acessibilidade
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                Políticas
              </a>
            </div>
            {/* Copyright */}
            <div className="text-white opacity-80 text-sm text-center md:text-right">
              © 2025 hospedagem.com. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
