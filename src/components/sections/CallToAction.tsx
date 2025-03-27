
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ctaRef.current) return;
    
    const addParticles = () => {
      const container = ctaRef.current?.querySelector('.particles-container');
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';
      
      // Add new particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
      }
    };
    
    addParticles();
    
    // Clean up
    return () => {
      const container = ctaRef.current?.querySelector('.particles-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950" ref={ctaRef}>
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        
        {/* Animated background blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-pink-700/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-violet-700/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="absolute inset-0 particles-container">
        {/* Particles will be added via JavaScript */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto neo-glass p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] animate-pulse-glow">
          <div className="flex flex-col items-center text-center">
            <h2 className="heading-lg mb-6 gradient-text">Ready to Transform Your Professional Network?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mb-8">
              Join thousands of professionals who are already experiencing the power of intelligent networking on LinkGrid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#create-account" className="cyber-button group flex items-center relative overflow-hidden">
                <span className="relative z-10">Create Your Account</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
              </a>
              <a href="#view-pricing" className="button-outline group border-purple-500/20 hover:border-purple-500/40 backdrop-blur-md">
                View Pricing
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .particle {
          position: absolute;
          background: linear-gradient(to right, #8b5cf6, #ec4899);
          border-radius: 50%;
          opacity: 0.5;
          animation: float 10s infinite ease-in-out;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3), 0 0 60px rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(236, 72, 153, 0.3);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s infinite ease-in-out;
        }
        `}
      </style>
    </section>
  );
};

export default CallToAction;
