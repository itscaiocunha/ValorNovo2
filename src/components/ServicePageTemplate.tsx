
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicePageTemplateProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  content: React.ReactNode;
  color: string;
}

const ServicePageTemplate = ({ 
  title, 
  icon, 
  description, 
  content,
  color
}: ServicePageTemplateProps) => {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <Link 
          to="/#serviços" 
          className="flex items-center text-valor-primary hover:text-valor-secondary transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Voltar para Serviços</span>
        </Link>

        <div className="flex flex-col items-center text-center mb-12">
          <div className={`${color} p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6`}>
            {icon}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-valor-primary mb-4">{title}</h1>
          <p className="text-valor-dark/80 max-w-2xl mx-auto mb-8">{description}</p>
        </div>

        <div className="glass-card p-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ServicePageTemplate;