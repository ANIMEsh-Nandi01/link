
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-purple-950/90 backdrop-blur-xl shadow-sm' : 'py-5 bg-purple-950'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-[2px]"></div>
              <div className="relative z-10 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <span className="font-semibold text-white">
              Link<span className="text-primary">Grid</span><span className="text-xs align-top text-accent ml-0.5">AI</span>
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-purple-900 text-white">What we do</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-purple-950 text-white">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-800/50 to-purple-900 p-6 no-underline outline-none focus:shadow-md"
                          href="#features"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Features
                          </div>
                          <p className="text-sm leading-tight text-purple-100">
                            Discover our AI-powered networking solutions
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <a href="#security" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-800 hover:text-white">
                        <div className="text-sm font-medium leading-none">Security</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-300">
                          Enterprise-grade protection for your network
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#network" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-800 hover:text-white">
                        <div className="text-sm font-medium leading-none">Network</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-300">
                          See how LinkGrid connects you globally
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-purple-900 text-white">Working with us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-purple-950 text-white">
                    <li>
                      <a href="#global" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-800 hover:text-white">
                        <div className="text-sm font-medium leading-none">Global Reach</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-300">
                          Connect with professionals worldwide
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-800 hover:text-white">
                        <div className="text-sm font-medium leading-none">Testimonials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-300">
                          See what our clients say about us
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-purple-900 text-white">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-purple-950 text-white">
                    <li>
                      <a href="#partners" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-800 hover:text-white">
                        <div className="text-sm font-medium leading-none">Partners</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-300">
                          See our trusted partners and integrations
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#comparison" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-800 hover:text-white">
                        <div className="text-sm font-medium leading-none">Comparison</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-300">
                          See how we stack up against the competition
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="button-primary rounded-full flex items-center gap-2 px-6 py-2">
            Contact
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-purple-950/95 backdrop-blur-xl shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          <a href="#what-we-do" className="nav-link px-4 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>What we do</a>
          <a href="#working-with-us" className="nav-link px-4 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>Working with us</a>
          <a href="#resources" className="nav-link px-4 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>Resources</a>
          <div className="flex flex-col pt-2 space-y-3">
            <a href="#contact" className="button-primary mx-4 rounded-full flex items-center justify-center gap-2">
              Contact
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
