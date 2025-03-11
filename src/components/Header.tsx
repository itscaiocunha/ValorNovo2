
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo_type.svg" alt="" className="h-8 pt-2 pb-1"/>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Serviços', 'Sobre Nós', 'Conteúdos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                'text-base font-medium transition-colors',
                scrolled ? 'text-valor-dark hover:text-valor-primary' : 'text-valor-dark hover:text-valor-light/80'
              )}
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            className="valor-button-primary px-5 py-2.5 text-base"
          >
            Entre em Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-valor-dark' : 'text-valor-light'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-valor-dark' : 'text-valor-light'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-valor-primary z-40 flex flex-col items-center justify-center md:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          {['Início', 'Serviços', 'Sobre Nós', 'Conteúdos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-valor-light text-lg font-medium hover:text-valor-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            className="valor-button-primary px-6 py-3 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Entre em Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
