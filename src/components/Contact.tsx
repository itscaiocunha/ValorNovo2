
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    details: '(16) 98135-0708',
    link: 'tel:+5516981350708',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'zw@valornovo.com',
    link: 'mailto:zw@valornovo.com',
  },
  {
    icon: MapPin,
    title: 'Região',
    details: 'Atuamos em todo o Sudeste',
    link: '#',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-valor-light/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-title justify-center">
            <div className="section-title-line"></div>
            <p className="section-title-text">ENTRE EM CONTATO</p>
            <div className="section-title-line"></div>
          </div>
          <h2 className="section-heading">Vamos Conversar Sobre Seu Projeto</h2>
          <p className="text-valor-dark/80 max-w-2xl mx-auto">
            Estamos prontos para auxiliar sua empresa no desenvolvimento de projetos inovadores e na 
            captação de recursos para financiá-los. Preencha o formulário abaixo e entraremos em contato.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 reveal">
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
                      <a 
                        href={item.link} 
                        className="text-valor-dark/80 hover:text-valor-secondary transition-colors"
                      >
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
                      className="w-10 h-10 rounded-full bg-valor-primary flex items-center justify-center text-white hover:bg-valor-secondary transition-colors"
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
          
          <div className="lg:col-span-3 reveal" style={{animationDelay: '0.2s'}}>
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-valor-dark/80 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-valor-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-valor-dark/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-valor-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-valor-dark/80 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-valor-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-valor-dark/80 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-valor-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-valor-dark/80 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-valor-primary"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={cn(
                      "valor-button-primary px-6 py-3 flex items-center justify-center",
                      (isSubmitting || isSubmitted) && "opacity-80"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Mensagem enviada!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Enviar mensagem
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
