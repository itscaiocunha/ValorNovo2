
import { FileText } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CaptacaoRecursos = () => {
  return (
    <ServicePageTemplate
      title="Captação Finep"
      icon={<FileText size={32} />}
      description="Elaboração de projetos para captação de recursos não-reembolsáveis e financiamentos com juros reduzidos."
      color="bg-emerald-50 text-emerald-600"
      content={
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Nossa Expertise</h2>
            <p className="text-valor-dark/80">
              Ajudamos empresas a acessar recursos financeiros para projetos de inovação através da FINEP e outras agências de fomento. 
              Nossa experiência abrange desde a identificação das linhas mais adequadas até a gestão completa do processo de submissão.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Modalidades de Captação</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Subvenção Econômica (recursos não-reembolsáveis)</li>
              <li>Financiamento com juros subsidiados</li>
              <li>Recursos via Lei do Bem</li>
              <li>Editais específicos para setores estratégicos</li>
              <li>Parcerias com ICTs (Instituições Científicas e Tecnológicas)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Nosso Processo</h2>
            <ol className="list-decimal pl-5 space-y-2 text-valor-dark/80">
              <li>Análise de aderência do projeto às linhas de financiamento disponíveis</li>
              <li>Estruturação técnica e financeira da proposta</li>
              <li>Elaboração de documentação completa conforme requisitos</li>
              <li>Submissão e acompanhamento junto aos órgãos de fomento</li>
              <li>Gestão administrativa e prestação de contas</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Resultados</h2>
            <p className="text-valor-dark/80">
              Nosso histórico inclui mais de R$ 500 milhões em recursos captados para empresas de diversos portes e setores,
              com taxa de aprovação superior à média do mercado.
            </p>
          </section>
        </div>
      }
    />
  );
};

export default CaptacaoRecursos;