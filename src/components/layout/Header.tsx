
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-[2px]"></div>
              <div className="relative z-10 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <span className="font-semibold">
              Link<span className="text-primary">Grid</span><span className="text-xs align-top text-accent ml-0.5">AI</span>
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#features" className="nav-link">Features</a>
          <a href="#security" className="nav-link">Security</a>
          <a href="#network" className="nav-link">Network</a>
          <a href="#global" className="nav-link">Global</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <a href="#login" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md">Login</a>
          <a href="#get-started" className="button-primary flex items-center gap-1">
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          <a href="#features" className="nav-link px-4 py-3" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#security" className="nav-link px-4 py-3" onClick={() => setMobileMenuOpen(false)}>Security</a>
          <a href="#network" className="nav-link px-4 py-3" onClick={() => setMobileMenuOpen(false)}>Network</a>
          <a href="#global" className="nav-link px-4 py-3" onClick={() => setMobileMenuOpen(false)}>Global</a>
          <div className="flex flex-col pt-2 space-y-3">
            <a href="#login" className="px-4 py-3 text-center text-foreground/80 hover:text-foreground transition-colors rounded-md">Login</a>
            <a href="#get-started" className="button-primary mx-4">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
