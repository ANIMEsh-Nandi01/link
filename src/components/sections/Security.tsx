
import { Shield, AlertTriangle, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

const SecurityCard = ({ icon: Icon, title, description, delay }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  delay: number 
}) => (
  <div 
    className="feature-card bg-gray-950/10 dark:bg-white/5 opacity-0 animate-scale-in" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/80">{description}</p>
  </div>
);

const Security = () => {
  const securityRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-scale-in');
            elements.forEach(el => {
              el.classList.add('animate-scale-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (securityRef.current) {
      observer.observe(securityRef.current);
    }
    
    return () => {
      if (securityRef.current) observer.unobserve(securityRef.current);
    };
  }, []);

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-900/5 to-indigo-900/5" ref={securityRef}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-200/30">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Enterprise-Grade Security</span>
          </div>
          
          <h2 className="heading-lg mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Your Network, Protected</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Security isn't just a feature—it's the foundation of LinkGrid. We've built enterprise-grade protection into
            every layer of our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SecurityCard 
            icon={Shield} 
            title="End-to-End Encryption" 
            description="All your communications and data are encrypted using industry-leading protocols to ensure maximum privacy."
            delay={0.1}
          />
          
          <SecurityCard 
            icon={AlertTriangle} 
            title="AI-Powered Threat Detection" 
            description="Our intelligent systems constantly monitor for suspicious activities and potential security threats."
            delay={0.2}
          />
          
          <SecurityCard 
            icon={Check} 
            title="Compliance Guaranteed" 
            description="We meet and exceed global data protection standards including GDPR, CCPA, and industry-specific regulations."
            delay={0.3}
          />
        </div>
        
        <div className="mt-12 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a href="#learn-more-security" className="inline-flex items-center px-5 py-2.5 rounded-full bg-purple-600/10 hover:bg-purple-600/20 text-purple-700 dark:text-purple-300 transition-colors">
            <Shield className="w-4 h-4 mr-2" />
            Learn More About Our Security
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Security;
