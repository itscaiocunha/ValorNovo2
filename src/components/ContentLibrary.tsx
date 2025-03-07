
import { useState } from 'react';
import { Play, FileText, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['Todos', 'Vídeos', 'Artigos', 'E-books'];

const contentItems = [
  {
    type: 'video',
    title: 'Como estruturar projetos para FINEP',
    description: 'Aprenda os fundamentos para estruturar projetos de captação de recursos junto à FINEP.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    date: '10 set 2023',
  },
  {
    type: 'article',
    title: 'Principais linhas de financiamento para inovação em 2024',
    description: 'Conheça as principais linhas de financiamento disponíveis para projetos de inovação neste ano.',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    date: '22 jan 2024',
  },
  {
    type: 'ebook',
    title: 'Guia completo de gestão de projetos de inovação',
    description: 'Um guia prático com metodologias ágeis e tradicionais para gerenciar projetos de inovação.',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    date: '05 mar 2024',
  },
  {
    type: 'video',
    title: 'Webinar: Inovação como estratégia competitiva',
    description: 'Como implementar a inovação como parte da estratégia competitiva de sua empresa.',
    thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop',
    date: '18 fev 2024',
  },
  {
    type: 'article',
    title: 'Análise de viabilidade técnica e financeira',
    description: 'Metodologias para análise de viabilidade de projetos de inovação.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop',
    date: '03 abr 2024',
  },
  {
    type: 'ebook',
    title: 'Manual de captação de recursos não-reembolsáveis',
    description: 'Estratégias e dicas para aumentar as chances de aprovação de projetos não-reembolsáveis.',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    date: '12 dez 2023',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'video':
      return Play;
    case 'article':
      return FileText;
    case 'ebook':
      return BookOpen;
    default:
      return FileText;
  }
};

const ContentLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredContent = activeCategory === 'Todos'
    ? contentItems
    : contentItems.filter(item => {
        const categoryMap: Record<string, string> = {
          'Vídeos': 'video',
          'Artigos': 'article',
          'E-books': 'ebook',
        };
        return item.type === categoryMap[activeCategory];
      });

  return (
    <section id="conteúdos" className="py-20 bg-gradient-to-b from-valor-light/50 to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-title justify-center">
            <div className="section-title-line"></div>
            <p className="section-title-text">NOSSA BIBLIOTECA</p>
            <div className="section-title-line"></div>
          </div>
          <h2 className="section-heading">Conteúdos Especializados para sua Jornada de Inovação</h2>
          <p className="text-valor-dark/80 max-w-2xl mx-auto">
            Acesse nossa biblioteca de conteúdos sobre inovação, captação de recursos e gestão de projetos, 
            criados por especialistas para auxiliar seu crescimento.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-all text-sm font-medium',
                activeCategory === category
                  ? 'bg-valor-primary text-white'
                  : 'bg-white text-valor-dark/70 hover:bg-valor-primary/10 hover:text-valor-primary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => {
            const Icon = getIcon(item.type);
            return (
              <div
                key={index}
                className="glass-card overflow-hidden hover-card-effect reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-valor-primary/80 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-valor-primary px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Icon size={14} className="mr-1" />
                    <span className="capitalize">{item.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-valor-secondary text-sm mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold mb-3 text-valor-primary line-clamp-2">{item.title}</h3>
                  <p className="text-valor-dark/80 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <a href="#" className="inline-flex items-center text-valor-secondary font-medium text-sm hover:text-valor-primary transition-colors">
                    Saiba mais <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="valor-button-outline px-6 py-3">
            Ver Todos os Conteúdos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
