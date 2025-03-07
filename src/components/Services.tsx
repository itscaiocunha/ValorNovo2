
import { LightbulbIcon, TrendingUp, FileText, BarChart4, PieChart, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: LightbulbIcon,
    title: 'Gestão de Inovação',
    description: 'Consultoria especializada para implementação e otimização de processos de inovação em sua empresa.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FileText,
    title: 'Captação de Recursos Finep',
    description: 'Elaboração de projetos para captação de recursos não-reembolsáveis e financiamentos com juros reduzidos.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: ClipboardList,
    title: 'Gestão Híbrida de Projetos',
    description: 'Combinação de metodologias tradicionais e ágeis para gestão eficiente de projetos de inovação.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: BarChart4,
    title: 'Desenvolvimento de Novos Negócios',
    description: 'Apoio estratégico para desenvolvimento de novos produtos, serviços e modelos de negócio.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: PieChart,
    title: 'Análise de Viabilidade',
    description: 'Estudos aprofundados para análise de viabilidade técnica, econômica e financeira de projetos.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: TrendingUp,
    title: 'Inteligência Estratégica',
    description: 'Análise de mercado, tendências e oportunidades para direcionar investimentos em inovação.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

const Services = () => {
  return (
    <section id="serviços" className="py-20 bg-valor-light relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-title justify-center">
            <div className="section-title-line"></div>
            <p className="section-title-text">NOSSOS SERVIÇOS</p>
            <div className="section-title-line"></div>
          </div>
          <h2 className="section-heading">Soluções Especializadas para sua Empresa Inovar</h2>
          <p className="text-valor-dark/80 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para impulsionar a inovação na sua empresa, 
            desde a captação de recursos até a implementação e gestão de projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-card-effect reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn("p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6", service.color)}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-valor-primary">{service.title}</h3>
              <p className="text-valor-dark/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-valor-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-valor-accent/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Services;
