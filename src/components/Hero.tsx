
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="início" 
      className="min-h-[80vh] relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(26, 54, 93, 0.95), rgba(26, 54, 93, 0.95)), url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-valor-light mb-8 max-w-4xl font-heading">
          Transformando Ideias em <span className="text-valor-accent">Projetos Inovadores</span> para Empresas
        </h1>
        
        <p className="text-valor-light/90 text-lg max-w-2xl mb-10">
          Consultoria especializada em captação de recursos e gestão de projetos de inovação, com foco em resultados sustentáveis para o seu negócio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#serviços" className="valor-button-primary px-6 py-3">
            Nossos Serviços
          </a>
          <a href="#contato" className="valor-button-outline bg-transparent border-valor-light text-valor-light px-6 py-3 hover:bg-valor-light/10">
            Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#serviços" className="text-valor-light/80 hover:text-valor-light">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
