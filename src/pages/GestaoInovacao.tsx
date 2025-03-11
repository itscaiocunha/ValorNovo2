
import { LightbulbIcon } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const GestaoInovacao = () => {
  return (
    <ServicePageTemplate
      title="Gestão de Inovação"
      icon={<LightbulbIcon size={32} />}
      description="Consultoria especializada para implementação e otimização de processos de inovação em sua empresa."
      color="bg-blue-50 text-blue-600"
      content={
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Nossa Abordagem</h2>
            <p className="text-valor-dark/80">
              Nossa abordagem de Gestão de Inovação é estruturada para integrar processos inovadores ao core business da sua empresa, 
              criando uma cultura que valoriza e implementa novas ideias de forma sistemática e estratégica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Serviços Oferecidos</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Diagnóstico e avaliação do nível de maturidade em inovação</li>
              <li>Estruturação de processos e metodologias de inovação</li>
              <li>Implementação de programas de inovação corporativa</li>
              <li>Capacitação e treinamento de equipes em metodologias de inovação</li>
              <li>Desenvolvimento de KPIs e métricas para monitoramento de resultados</li>
              <li>Integração de ferramentas e tecnologias para gestão da inovação</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Benefícios</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Aumento da competitividade e diferenciação no mercado</li>
              <li>Otimização de recursos e redução de riscos em projetos inovadores</li>
              <li>Criação de uma cultura organizacional orientada à inovação</li>
              <li>Desenvolvimento de produtos e serviços alinhados às necessidades do mercado</li>
              <li>Crescimento sustentável baseado em inovação estratégica</li>
            </ul>
          </section>
        </div>
      }
    />
  );
};

export default GestaoInovacao;