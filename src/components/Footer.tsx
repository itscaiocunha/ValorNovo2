import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-valor-primary text-valor-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <a href="/" className="flex items-center space-x-2">
                <img src="public/logo_markbranco.png" alt="" />
              </a>
            </div>
            <p className="text-valor-light/80 mb-6">
              Especialistas em gestão de inovação e captação de recursos para projetos de P&D,
              ajudando empresas a transformar ideias em projetos viáveis e rentáveis.
            </p>
            <div className="flex space-x-4">
              {['linkedin', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-valor-light hover:bg-valor-accent hover:text-valor-primary transition-colors"
                >
                  <img 
                    src={`/${social}.svg`} 
                    alt={social} 
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Serviços', 'Sobre Nós', 'Conteúdos', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-valor-light/80 hover:text-valor-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                'Gestão de Inovação', 
                'Captação de Recursos FINEP', 
                'Gestão de Projetos', 
                'Planejamento Estratégico', 
                'Pesquisa Clínica'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#serviços"
                    className="text-valor-light/80 hover:text-valor-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-valor-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a 
                  href="mailto:projetos@valornovo.com"
                  className="text-valor-light/80 hover:text-valor-accent transition-colors"
                >
                  projetos@valornovo.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-valor-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a 
                  href="tel:+551698135-0708"
                  className="text-valor-light/80 hover:text-valor-accent transition-colors"
                >
                  (16) 98135-0708
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-valor-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-valor-light/80">
                  Rua Fernando Catapani, 71 – Centro – Cravinhos – São Paulo
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-valor-light/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-valor-light/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Valor Novo. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-valor-accent/20 flex items-center justify-center text-valor-accent hover:bg-valor-accent hover:text-valor-primary transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
