
import { TrendingUp } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const InteligenciaEstrategica = () => {
  return (
    <ServicePageTemplate
      title="Planejamento Estratégico"
      icon={<TrendingUp size={32} />}
      description="Análise de mercado, tendências e oportunidades para direcionar investimentos em inovação."
      color="bg-cyan-50 text-cyan-600"
      content={
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">O Que Oferecemos</h2>
            <p className="text-valor-dark/80">
              Nosso serviço de Inteligência Estratégica fornece informações e análises de alto valor para apoiar decisões 
              críticas de negócio, identificando tendências emergentes, movimentos competitivos e oportunidades de mercado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Principais Análises</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li><strong>Monitoramento de Mercado:</strong> Acompanhamento contínuo de tendências e movimentos relevantes</li>
              <li><strong>Análise Competitiva:</strong> Mapeamento e avaliação de concorrentes atuais e potenciais</li>
              <li><strong>Análise Tecnológica:</strong> Identificação de tendências e inovações com potencial impacto</li>
              <li><strong>Inteligência de Clientes:</strong> Compreensão profunda de necessidades e comportamentos de clientes</li>
              <li><strong>Detecção de Early Signals:</strong> Identificação antecipada de mudanças no ambiente de negócios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Metodologia</h2>
            <p className="text-valor-dark/80">
              Combinamos métodos avançados de pesquisa e análise, incluindo:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80 mt-2">
              <li>Data Mining e análise de Big Data</li>
              <li>Pesquisas primárias e secundárias</li>
              <li>Análise de patentes e publicações técnicas</li>
              <li>Redes de especialistas e informantes de mercado</li>
              <li>Ferramentas proprietárias de analysis forecasting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Benefícios</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Antecipação de movimentos de mercado e vantagem competitiva</li>
              <li>Redução de riscos em decisões estratégicas</li>
              <li>Identificação proativa de oportunidades de inovação</li>
              <li>Alocação mais eficiente de recursos de P&D e inovação</li>
              <li>Posicionamento estratégico alinhado às tendências futuras</li>
            </ul>
          </section>
        </div>
      }
    />
  );
};

export default InteligenciaEstrategica;