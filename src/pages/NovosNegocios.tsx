
import { BarChart4 } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const NovosNegocios = () => {
  return (
    <ServicePageTemplate
      title="Pesquisas Clínicas"
      icon={<BarChart4 size={32} />}
      description="Apoio estratégico para desenvolvimento de novos produtos, serviços e modelos de negócio."
      color="bg-amber-50 text-amber-600"
      content={
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Nossa Abordagem</h2>
            <p className="text-valor-dark/80">
              Auxiliamos empresas a identificar, desenvolver e implementar novas oportunidades de negócio, sejam novos 
              produtos, serviços ou modelos de negócio inovadores, com foco em crescimento sustentável.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Metodologia</h2>
            <ol className="list-decimal pl-5 space-y-2 text-valor-dark/80">
              <li>Análise de mercado e identificação de oportunidades</li>
              <li>Avaliação de competências internas e recursos disponíveis</li>
              <li>Desenvolvimento de conceitos e modelos de negócio</li>
              <li>Prototipagem e validação com clientes potenciais</li>
              <li>Planejamento estratégico para implementação</li>
              <li>Acompanhamento e mentoria durante o lançamento</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Ferramentas Utilizadas</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Business Model Canvas e Value Proposition Canvas</li>
              <li>Design Thinking e Design Sprint</li>
              <li>Lean Startup e Customer Development</li>
              <li>Jobs to be Done Framework</li>
              <li>Análise de cenários e planejamento estratégico</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Casos de Sucesso</h2>
            <p className="text-valor-dark/80">
              Nosso portfólio inclui desenvolvimento de novas linhas de produtos, serviços digitais, 
              spin-offs corporativos e diversificação de áreas de atuação para empresas de diversos setores.
            </p>
          </section>
        </div>
      }
    />
  );
};

export default NovosNegocios;