
import { ArrowRight, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { PinContainer } from '../ui/pin-container';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Global Reach Section */}
          <div className="bg-[#0A0B14] rounded-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                <Globe className="w-4 h-4 text-teal-400 mr-2" />
                <span className="text-sm font-medium text-teal-400">Global Reach</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-white">Connect Beyond Borders</h2>
              
              <p className="text-gray-300 mb-10">
                LinkGrid brings professionals together from around the world, breaking down geographical barriers to networking.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Global User Base</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-400 text-sm">Users</p>
                      <p className="text-2xl font-bold text-white">1M+</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm">Countries</p>
                      <p className="text-2xl font-bold text-white">150+</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm">Languages</p>
                      <p className="text-2xl font-bold text-white">40+</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm">Industries</p>
                      <p className="text-2xl font-bold text-white">200+</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Global Benefits</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2"></div>
                      <span className="text-gray-300 text-sm">Access international opportunities and job markets</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2"></div>
                      <span className="text-gray-300 text-sm">Connect with industry leaders across different regions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2"></div>
                      <span className="text-gray-300 text-sm">Gain insights into global industry trends and practices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2"></div>
                      <span className="text-gray-300 text-sm">Build diverse teams and partnerships across cultures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PinContainer Section */}
          <div className="h-full flex items-center justify-center">
            <PinContainer
              title="Join LinkGrid Today"
              href="#create-account"
              containerClassName="w-full max-w-lg mx-auto"
              className="w-full p-8"
            >
              <div className="flex flex-col items-center text-center p-4">
                <h2 className="heading-lg mb-6 gradient-text">Ready to Transform Your Professional Network?</h2>
                <p className="text-lg text-gray-300 max-w-2xl mb-8">
                  Join thousands of professionals who are already experiencing the power of intelligent networking on LinkGrid.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#create-account" className="cyber-button group flex items-center relative overflow-hidden">
                    <span className="relative z-10">Create Account</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-100"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
                  </a>
                  <a href="#view-pricing" className="button-outline group border-purple-500/20 hover:border-purple-500/40 backdrop-blur-md">
                    View Pricing
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </div>
              </div>
            </PinContainer>
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
