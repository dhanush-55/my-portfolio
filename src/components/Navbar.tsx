import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <img 
                src="/DK1.png"
                alt="Logo" 
                className="h-10 w-auto object-contain"
              />
<span className="text-xl font-bold text-purple-400">Portfolio</span>
            </a>
          </div>

         {/* Desktop Navigation */}
{/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <a
      key={item.name}
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(item.href);
      }}
      className={cn(
        'text-sm font-medium transition-all duration-300 relative link-underline',
        activeSection === item.href.substring(1)
          ? 'text-purple-300 after:bg-white' // active link underline white
          : 'text-muted-foreground hover:text-purple-300 hover:after:bg-white' // hover underline white
      )}
    >
      {item.name}
    </a>
  ))}
</div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-purple-300 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-all',
                  activeSection === item.href.substring(1)
                    ? 'text-purple-400 bg-purple-400/10'
                    : 'text-muted-foreground hover:text-purple-400 hover:bg-purple-300/5'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
