
import { BarChart3, Users, GlobeIcon, Building2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '+ 200',
    label: 'Clientes Atendidos',
    description: 'Empresas que confiaram em nossos serviços'
  },
  {
    icon: Building2,
    value: '+ 50',
    label: 'Setores de Mercado',
    description: 'Experiência em diversos segmentos da indústria'
  },
  {
    icon: GlobeIcon,
    value: '+ 25',
    label: 'Cidades Brasileiras',
    description: 'Alcance nacional em diferentes regiões'
  },
  {
    icon: BarChart3,
    value: '+ R$ 1Bi',
    label: 'Recursos Captados',
    description: 'Capital para projetos de inovação'
  }
];

const CompanyStats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="section-title flex justify-center">
            <div className="section-title-line"></div>
            <p className="section-title-text">NOSSOS NÚMEROS</p>
            <div className="section-title-line"></div>
          </div>
          <h2 className="section-heading">Nosso impacto em empresas como a sua</h2>
          <p className="text-valor-dark/70 max-w-3xl mx-auto">
            Nosso histórico de sucesso reflete o compromisso com a excelência e a entrega de valor real para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center flex flex-col items-center border-t-4 border-valor-primary"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-valor-primary/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon size={30} className="text-valor-primary" />
              </div>
              <h3 className="text-3xl font-bold text-valor-primary mb-2">{stat.value}</h3>
              <h4 className="text-lg font-semibold text-valor-dark mb-2">{stat.label}</h4>
              <p className="text-valor-dark/70 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
