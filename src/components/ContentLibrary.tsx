
import { useState } from 'react';
import { Play, FileText, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['Todos', 'Podcast', 'E-books'];

const contentItems = [
  {
    type: 'podcast',
    title: 'Podcast 8 - NOVA SMAR, com Guilherme Moretti(Governança e Inovação) e Libânio Souza (CEO-Presidente)',
    description: 'Em breve',
    thumbnail: '/EmBreve08.png',
    date: '04 abr 2025',
  },
  {
    type: 'podcast',
    title: 'Podcast 9 - SHULL SEMENTES, com Sócrates Dell´Omo (CFO) e Evandrei Rossi (Gerente de Inovação - Corn Breeder)',
    description: 'Em breve',
    thumbnail: '/EmBreve09.png',
    date: '04 abr 2025',
  },
  {
    type: 'podcast',
    title: 'Podcast 10 - AgroGoods, com Marcelo Alexandre (Sócio e CEO) e Eduardo Marques (Investidor e especialista em IA)',
    description: 'Em breve',
    thumbnail: '/EmBreve10.png',
    date: '04 abr 2025',
  },
  {
    type: 'podcast',
    title: 'Podcast 1: Fomento a Inovação com captação recurso subsidiado pela VALORNOVO®. - Parte 1 de 3',
    description: 'Descubra como a VALORNOVO® promove o crescimento da empresa e aumento da rentabilidade do negócio, através de projetos de inovação e captação de recursos subsidiados em FINEP e BNDES.  Aprenda a acessar recursos subsidiados para impulsionar a captação de recursos para inovação. Com José Walter e Marcelo Correia, e insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast11.jpg',
    date: '04 set 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 1: Fomento a Inovação com captação recurso subsidiado pela VALORNOVO®. - Parte 2 de 3',
    description: 'Descubra como a VALORNOVO® promove o crescimento da empresa e aumento da rentabilidade do negócio, através de projetos de inovação e captação de recursos subsidiados em FINEP e BNDES.  Aprenda a acessar recursos subsidiados para impulsionar a captação de recursos para inovação. Com José Walter e Marcelo Correia, e insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast12.jpg',
    date: '04 set 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 1: Fomento a Inovação com captação recurso subsidiado pela VALORNOVO®. - Parte 3 de 3',
    description: 'Descubra como a VALORNOVO® promove o crescimento da empresa e aumento da rentabilidade do negócio, através de projetos de inovação e captação de recursos subsidiados em FINEP e BNDES.  Aprenda a acessar recursos subsidiados para impulsionar a captação de recursos para inovação. Com José Walter e Marcelo Correia, e insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast13.jpg',
    date: '04 set 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 2: Inovação na Evolua Educação com Luciano Nogueira -parte 1',
    description: 'Descubra como a Evolua Educação junto com a VALORNOVO® estão inovando para transformar o ensino no Brasil, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast21.jpg',
    date: '17 out 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 2: Inovação na Evolua Educação com Luciano Nogueira -parte 2',
    description: 'Descubra como a Evolua Educação junto com a VALORNOVO® estão inovando para transformar o ensino no Brasil, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast22.jpg',
    date: '17 out 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 2: Inovação na Evolua Educação com Luciano Nogueira -parte 3',
    description: 'Descubra como a Evolua Educação junto com a VALORNOVO® estão inovando para transformar o ensino no Brasil, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast23.jpg',
    date: '17 out 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 3: Inovação na Gestora de Recursos Tarpon 10b com Edsmar Resende- parte 1',
    description: 'Veja como a Tarpon 10b junto com a VALORNOVO® estão liderando a inovação na gestão de recursos e criando soluções disruptivas para o Agronegócio e setor de alimentos, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast31.jpg',
    date: '26 nov 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 3: Inovação na Gestora de Recursos Tarpon 10b com Edsmar Resende- parte 2',
    description: 'Veja como a Tarpon 10b junto com a VALORNOVO® estão liderando a inovação na gestão de recursos e criando soluções disruptivas para o Agronegócio e setor de alimentos, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast32.jpg',
    date: '26 nov 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 3: Inovação na Gestora de Recursos Tarpon 10b com Edsmar Resende- parte 3',
    description: 'Veja como a Tarpon 10b junto com a VALORNOVO® estão liderando a inovação na gestão de recursos e criando soluções disruptivas para o Agronegócio e setor de alimentos, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast33.jpg',
    date: '26 nov 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 4: Inovação na IdeeLab Biotecnologia com Ronaldo Dálio e Gilson Manfio - parte 1',
    description: 'Conheça a IdeeLab Biotecnologia e saiba com a VALORNOVO® auxiliou a empresa a captar mais de 10 milhões em dinheiro de fundo perdido (subvenção econômica) junto a FINEP, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast41.jpg',
    date: '09 dez 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 4: Inovação na IdeeLab Biotecnologia com Ronaldo Dálio e Gilson Manfio- parte 2',
    description: 'Conheça a IdeeLab Biotecnologia e saiba com a VALORNOVO® auxiliou a empresa a captar mais de 10 milhões em dinheiro de fundo perdido (subvenção econômica) junto a FINEP, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast42.jpg',
    date: '09 dez 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 4: Inovação na IdeeLab Biotecnologia com Ronaldo Dálio e Gilson Manfio- parte 3',
    description: 'Conheça a IdeeLab Biotecnologia e saiba com a VALORNOVO® auxiliou a empresa a captar mais de 10 milhões em dinheiro de fundo perdido (subvenção econômica) junto a FINEP, com insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast43.jpg',
    date: '09 dez 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 5: Captação FINEP com juros subsidiados para Crescimento do Negócio e Inovação.',
    description: 'Descubra como promover o crescimento da sua empresa e aumentar a rentabilidade do seu negócio através de projetos de inovação desenvolvidos pela VALORNOVO®. Aprenda a acessar recursos subsidiados para impulsionar a captação de recursos para inovação. Com José Walter e Marcelo Correia, e insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast5.jpg',
    date: '19 dez 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 6: Inovação na Santa Clara Agrociência com Vinicius Mazza e Giuliano Pauli',
    description: 'Saiba como a Santa Clara Agrociência junto a VALORNOVO® está inovando no agronegócio com estratégias transformadoras. Entenda a transformação da agricultura sustentável através de bioinumos e biodefensivo agrícolas de 3ª (terceira) e 4 (quarta) geração. Com José Walter e insights inspiradores de Juliana Munaro.',
    thumbnail: '/foto_podcast6.jpg',
    date: '23 dez 2024',
  },
  {
    type: 'podcast',
    title: 'Podcast 7 VALORNOVO - Inovação que gera resultado: o que todo CEO (ou líder, gestor) precisa saber!',
    description: 'Inovar é uma necessidade, mas como transformar a inovação em crescimento real? No Podcast VALORNOVO , os consultores Marcelo Alexandre e José Walter enfrentaram uma sabatina com Juliana Munaro para discutir inovação sob a ótica de resultados. Como os CEOs podem contribuir para a inovação sem comprometer a operação? Quais são os erros mais comuns ao inovar – e como evitá-los? O que diferencia empresas que inovam com impacto daquelas que ficam para trás?',
    thumbnail: '/foto_podcast7.jpg',
    date: '25 fev 2025',
  },
  {
    type: 'ebook',
    title: 'Guia completo de gestão de projetos de inovação',
    description: 'Um guia prático com metodologias ágeis e tradicionais para gerenciar projetos de inovação.',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    date: '05 mar 2024',
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
    case 'podcast':
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
          'Podcast': 'podcast',
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
          <h2 className="section-heading">Biblioteca de conteúdos</h2>
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
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-valor-primary px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Icon size={14} className="mr-1" />
                    <span className="capitalize">{item.type}</span>
                  </div> */}
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
