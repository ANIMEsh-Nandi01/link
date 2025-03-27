
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-4">
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
            
            <p className="text-foreground/70 mb-4 max-w-md">
              LinkGrid is transforming professional networking with AI-powered connections, intelligent matchmaking, and streamlined communications.
            </p>
            
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Network</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Global</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © 2023 LinkGrid. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <a href="#support" className="text-foreground/70 hover:text-primary transition-colors text-sm flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              support@linkgrid.org
            </a>
            <span className="mx-4 text-gray-300">|</span>
            <p className="text-foreground/70 text-sm">
              Connecting professionals globally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
