
import { ClipboardList } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const GestaoHibrida = () => {
  return (
    <ServicePageTemplate
      title="Gestão de Projetos"
      icon={<ClipboardList size={32} />}
      description="Combinação de metodologias tradicionais e ágeis para gestão eficiente de projetos de inovação."
      color="bg-purple-50 text-purple-600"
      content={
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Metodologia Híbrida</h2>
            <p className="text-valor-dark/80">
              Nossa abordagem híbrida combina o melhor das metodologias tradicionais (como PMBOK e Prince2) com frameworks 
              ágeis (como Scrum e Kanban), adaptando-se às necessidades específicas de cada projeto e organização.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Aplicações</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Projetos de desenvolvimento de novos produtos e tecnologias</li>
              <li>Implementação de sistemas complexos</li>
              <li>Programas de transformação organizacional</li>
              <li>Projetos de PD&I (Pesquisa, Desenvolvimento e Inovação)</li>
              <li>Iniciativas que exigem conformidade regulatória e flexibilidade</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Nossa Oferta</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Avaliação e design da metodologia mais adequada para cada projeto</li>
              <li>Implementação de ferramentas e processos de gestão</li>
              <li>Capacitação de equipes nos frameworks selecionados</li>
              <li>Acompanhamento e mentoria durante a execução</li>
              <li>Gestão de portfólio de projetos</li>
              <li>Desenvolvimento de indicadores de desempenho e governança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Diferenciais</h2>
            <p className="text-valor-dark/80">
              Nossa experiência em mais de 200 projetos nos permite identificar rapidamente qual combinação metodológica trará 
              os melhores resultados para cada contexto, equilibrando previsibilidade e capacidade de adaptação.
            </p>
          </section>
        </div>
      }
    />
  );
};

export default GestaoHibrida;