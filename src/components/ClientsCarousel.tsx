import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  { name: 'Unimed', industry: 'Saúde', img: '/logos/unimed.png' },
  { name: 'Agrivalle', industry: 'Agronegócio', img: '/logos/agrivalle.png' },
  { name: 'AgroGoods', industry: 'Agronegócio', img: '/logos/agrogoods.png' },
  { name: 'Holliday', industry: 'Energia', img: '/logos/holliday.png' },
  { name: 'Embrapa', industry: 'Pesquisa e Desenvolvimento', img: '/logos/embrapa.png' },
  { name: 'Nooa', industry: 'Infraestrutura', img: '/logos/nooa.png' },
  { name: 'Organnact', industry: 'Veterinária', img: '/logos/organnact.png' },
  { name: 'Vetnil', industry: 'Veterinária', img: '/logos/vetnil.png' },
];

const ClientsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const maxSlide = Math.ceil(clients.length / 4) - 1;

  const nextSlide = () => setCurrentSlide(prev => (prev === maxSlide ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? maxSlide : prev - 1));

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const resumeAutoPlay = () => setIsAutoPlaying(true);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 4000);
    }
    return () => autoPlayRef.current && clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentSlide]);

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Cases de Sucessos</h2>
        </div>
        <div className="relative" onMouseEnter={pauseAutoPlay} onMouseLeave={resumeAutoPlay}>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {Array.from({ length: maxSlide + 1 }, (_, groupIndex) => (
                <div key={groupIndex} className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                  {clients.slice(groupIndex * 4, (groupIndex + 1) * 4).map((client, index) => (
                    <div key={index} className="glass-card p-6 flex flex-col items-center justify-center text-center h-40">
                      <img src={client.img} alt={client.name} className="w-40 h-40 object-contain mb-3" />
                      {/* <h4 className="font-medium text-valor-dark">{client.name}</h4>
                      <p className="text-valor-dark/60 text-sm">{client.industry}</p> */}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10">
            <ChevronLeft className="h-6 w-6 text-valor-primary" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10">
            <ChevronRight className="h-6 w-6 text-valor-primary" />
          </button>
          <div className="flex justify-center mt-6">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 mx-1 rounded-full ${currentSlide === index ? 'bg-valor-primary' : 'bg-valor-primary/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
