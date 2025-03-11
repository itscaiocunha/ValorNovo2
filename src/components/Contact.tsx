import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    details: '(16) 98135-0708',
    link: 'tel:+551698135-0708',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'projetos@valornovo.com',
    link: 'mailto:projetos@valornovo.com',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    details: 'Rua Fernando Catapani, 71 – Centro – Cravinhos – São Paulo',
    link: '#',
  },
];

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
        }) => void;
      };
    };
  }
}

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '48062868',
          formId: '4e774f42-9c44-4cab-8381-3d338185357c',
          region: 'na1',
          target: '#hubspot-form',
        });
      }
    };
    document.body.appendChild(script);
  }, []);


  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-valor-light/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Entre em contato conosco</h2>
          <p className="text-valor-dark/80 max-w-2xl mx-auto">
            Estamos prontos para auxiliar o crescimento da sua empresa no desenvolvimento de projetos inovadores e na
            captação de recursos para financiá-los.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-valor-primary">Informações de Contato</h3>
              <div className="space-y-6 mb-8">
                {ContactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-valor-primary/10 flex items-center justify-center text-valor-primary mr-4">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-valor-primary">{item.title}</p>
                      <a href={item.link} className="text-valor-dark/80 hover:text-valor-secondary transition-colors">
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-lg font-medium mb-4 text-valor-primary">Nos siga nas redes sociais</h4>
                <div className="flex space-x-4">
                  {['linkedin', 'instagram', 'youtube'].map((social) => (
                    <a 
                      key={social}
                      href={`#${social}`} 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-white hover:bg-valor-secondary transition-colors"
                    >
                      <img 
                        src={`/${social}.svg`} 
                        alt={social} 
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formulário HubSpot */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-valor-primary">Envie uma mensagem</h3>
              <div id="hubspot-form"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
