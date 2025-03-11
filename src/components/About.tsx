
import { Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: '+ 18', label: 'Anos de Experiência' },
  { value: '+ 200', label: 'Projetos Aprovados' },
  { value: '+ R$ 1Bi', label: 'Em Captação de Recursos' },
];

const advantages = [
  {
    icon: Award,
    title: 'Gestão de Inovação',
    description: 'Nossa equipe possui vasta experiência em desenvolvimento e implementação de estratégias de inovação para empresas de diversos segmentos.'
  },
  {
    icon: TrendingUp,
    title: 'Captação de Recursos Finep',
    description: 'Somos especialistas na elaboração de projetos para captação de recursos junto à FINEP, com alta taxa de aprovação.'
  },
  {
    icon: Users,
    title: 'Gestão de Projetos',
    description: 'Utilizamos metodologias ágeis e tradicionais para garantir a entrega de projetos complexos no prazo e dentro do orçamento.'
  },
];

const About = () => {
  return (
    <section id="sobre-nós" className="py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="section-title">
              <div className="section-title-line"></div>
              <p className="section-title-text">SOBRE NÓS</p>
            </div>
            <h2 className="section-heading">Impulsionando a Inovação nas Empresas Brasileiras</h2>
            
            <p className="text-valor-dark/80 mb-6 text-base text-justify">
              VALORNOVO® possui um processo simplificado para fazer a Inovação acontecer. Há 18 anos desenvolvemos e validamos um PROCESSO DE INOVAÇÃO SIMPLIFICADO e EFICIENTE. Com o processo de inovação VALORNOVO® sua empresa terá maior assertividade na escolha e priorização dos projetos de desenvolvimento. 
            </p>
            
            <p className="text-valor-dark/80 mb-8 text-base text-justify">
              Além disso, na implementação deste processo, os TALKs (treinamentos periódicos) promovem a cultura de inovação enquanto os Comitês garantem a definição e manutenção da estratégia de inovação. Sua empresa ganha ritmo e um fluxo lógico de desenvolvimento de novos faturamentos, com indicadores e metas.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 glass-card">
                  <h3 className="text-2xl font-bold text-valor-secondary mb-2">{stat.value}</h3>
                  <p className="text-sm text-valor-dark/70">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="valor-button-primary px-6 py-2.5">
              Entre em Contato
            </a>
          </div>
          
          <div className="space-y-4 reveal" style={{animationDelay: '0.2s'}}>
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4 glass-card p-5 hover-card-effect">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-valor-primary/10 flex items-center justify-center text-valor-primary">
                  <advantage.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-valor-primary">{advantage.title}</h3>
                  <p className="text-valor-dark/80 text-base">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
