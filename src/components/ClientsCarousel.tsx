
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Client logos - in a real project, these would be imported images
const clients = [
  { name: 'Empresa ABC', industry: 'Tecnologia' },
  { name: 'Grupo XYZ', industry: 'Manufatura' },
  { name: 'Corporação 123', industry: 'Finanças' },
  { name: 'Indústrias DEF', industry: 'Energia' },
  { name: 'Soluções GHI', industry: 'Saúde' },
  { name: 'Consórcio JKL', industry: 'Infraestrutura' },
  { name: 'Laboratórios MNO', industry: 'Químico' },
  { name: 'Grupo PQR', industry: 'Agronegócio' },
];

const ClientsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const maxSlide = Math.ceil(clients.length / 4) - 1;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? maxSlide : prev - 1));
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]);

  // Generate a placeholder logo with the company initial
  const getInitial = (name: string) => {
    return name.charAt(0);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="section-title flex justify-center">
            <div className="section-title-line"></div>
            <p className="section-title-text">CLIENTES</p>
          </div>
          <h2 className="section-heading">Empresas que Confiam em Nós</h2>
          <p className="text-valor-dark/70 max-w-3xl mx-auto">
            Trabalhamos com empresas líderes em seus setores, ajudando-as a alcançar excelência através da inovação.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* We'll create groups of 4 clients for each slide */}
              {Array(Math.ceil(clients.length / 4)).fill(0).map((_, groupIndex) => (
                <div key={groupIndex} className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                  {clients.slice(groupIndex * 4, (groupIndex + 1) * 4).map((client, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-6 flex flex-col items-center justify-center hover-card-effect text-center h-40"
                    >
                      <div className="w-20 h-20 rounded-full bg-valor-primary/10 flex items-center justify-center text-3xl font-bold text-valor-primary mb-3">
                        {getInitial(client.name)}
                      </div>
                      <h4 className="font-medium text-valor-dark">{client.name}</h4>
                      <p className="text-valor-dark/60 text-sm">{client.industry}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6 text-valor-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6 text-valor-primary" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6">
            {Array(maxSlide + 1).fill(0).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 mx-1 rounded-full ${currentSlide === index ? 'bg-valor-primary' : 'bg-valor-primary/30'}`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
