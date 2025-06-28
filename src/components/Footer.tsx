
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    hospedagem: ["Hospedagem Compartilhada", "Hospedagem WordPress", "VPS Cloud", "Servidor Dedicado"],
    solucoes: ["Domínios", "Email Profissional", "SSL Grátis", "Backup"],
    apoiar: ["Central de Ajuda", "Documentação", "Tutoriais", "Status do Sistema"],
    empresa: ["Sobre Nós", "Carreira", "Imprensa", "Parceiros"]
  };

  return (
    <footer className="bg-petrohost-blue">
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="bg-white rounded-2xl p-6 inline-block relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Agente de suporte" 
                className="w-32 h-40 object-cover rounded-xl"
              />
              <div className="absolute -top-2 -right-2 bg-petrohost-gold text-petrohost-blue px-3 py-1 rounded-full text-xs font-bold">
                24h
              </div>
            </div>
          </div>
          
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Dúvidas?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe está sempre pronta para ajudar você a encontrar 
              a melhor solução para seu projeto.
            </p>
            <button className="bg-petrohost-gold text-petrohost-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
              Entre em contato
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div>
            <div className="text-2xl font-bold text-white mb-6">
              Petrohost
            </div>
            <button className="bg-white text-petrohost-blue px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Entrar agora
            </button>
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

      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media & Phone */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-3">
                <a href="#" className="text-white hover:text-petrohost-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-petrohost-gold transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-petrohost-gold transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
              <div className="text-white text-sm">
                (11) 99999-9999
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                Política de Privacidade
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                Termos de Uso
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                Cookies
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white opacity-80 text-sm">
              © 2024 Petrohost. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
