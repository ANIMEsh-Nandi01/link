
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    // Add meteors with random delays and positions
    const meteorContainer = heroRef.current.querySelector('.meteors-container');
    if (!meteorContainer) return;
    
    const createMeteors = () => {
      for (let i = 0; i < 10; i++) {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor', 'animate-meteor');
        
        // Randomize position
        meteor.style.top = `${Math.random() * 100}%`;
        meteor.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
        meteor.style.animationDelay = `${Math.random() * 10}s`;
        
        meteorContainer.appendChild(meteor);
      }
    };
    
    createMeteors();
    
    // Clean up
    return () => {
      const meteors = meteorContainer.querySelectorAll('.meteor');
      meteors.forEach(meteor => meteor.remove());
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-gray-950"></div>
      
      {/* Animated background effects */}
      <div className="meteors-container">
        {/* Meteors will be added via JS */}
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/30">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">AI-Powered Networking</span>
          </div>
          
          <h1 className="heading-xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building <span className="gradient-text">Professional Connections</span> with Intelligence
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            LinkGrid intelligently connects professionals based on mutual goals, using AI to create meaningful networking opportunities that drive career growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#get-started" className="button-primary flex items-center">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#learn-more" className="button-outline">
              Learn More
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-12 w-full max-w-3xl opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-1">1.2M+</div>
              <div className="text-sm text-foreground/70">Users Worldwide</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-1">85K+</div>
              <div className="text-sm text-foreground/70">Networks Created</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-1">94%</div>
              <div className="text-sm text-foreground/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
