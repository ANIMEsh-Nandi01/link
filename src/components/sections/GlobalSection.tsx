import { useEffect, useRef, useState } from 'react';

const GlobalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-green-400/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-grid-large opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-sm font-medium text-blue-400">Global Reach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
            Connect Beyond Borders
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
            LinkGrid brings professionals together from around the world, breaking down geographical barriers to networking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* World map visualization */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0"></div>
              
              {/* World map with connection lines */}
              <svg viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-20">
                {/* Simplified world map outline */}
                <path d="M200,200 Q400,100 600,200 T1000,300 L800,500 Q600,600 400,500 T200,400 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                
                {/* Connection points with pulse animation */}
                {[
                  { x: 250, y: 200, delay: 0 },    // North America
                  { x: 450, y: 350, delay: 1 },    // South America
                  { x: 500, y: 200, delay: 0.5 },  // Europe
                  { x: 600, y: 250, delay: 1.5 },  // Africa
                  { x: 700, y: 200, delay: 2 },    // Asia
                  { x: 800, y: 400, delay: 2.5 },  // Australia
                ].map((point, index) => (
                  <g key={index} className={`${isVisible ? 'animate-pulse-slow' : ''}`} style={{ animationDelay: `${point.delay}s` }}>
                    <circle cx={point.x} cy={point.y} r="8" fill="rgba(255,255,255,0.7)" />
                    <circle cx={point.x} cy={point.y} r="16" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                    <circle cx={point.x} cy={point.y} r="24" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                  </g>
                ))}
                
                {/* Connection lines that appear with animation */}
                {isVisible && [
                  { x1: 250, y1: 200, x2: 500, y2: 200, delay: 0.5 },   // NA to EU
                  { x1: 500, y1: 200, x2: 700, y2: 200, delay: 1 },     // EU to Asia
                  { x1: 250, y1: 200, x2: 450, y2: 350, delay: 1.5 },   // NA to SA
                  { x1: 500, y1: 200, x2: 600, y2: 250, delay: 2 },     // EU to Africa
                  { x1: 700, y1: 200, x2: 800, y2: 400, delay: 2.5 },   // Asia to Australia
                  { x1: 600, y1: 250, x2: 800, y2: 400, delay: 3 },     // Africa to Australia
                ].map((line, index) => (
                  <path 
                    key={index}
                    d={`M${line.x1},${line.y1} Q${(line.x1 + line.x2) / 2},${Math.min(line.y1, line.y2) - 50} ${line.x2},${line.y2}`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${line.delay}s` }}
                  />
                ))}
                
                {/* Gradient for lines */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          {/* Stats and information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">1M+</div>
                <div className="text-white/70">Users</div>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-white/70">Countries</div>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">40+</div>
                <div className="text-white/70">Languages</div>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">200+</div>
                <div className="text-white/70">Industries</div>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Access international opportunities and job markets",
                  icon: (
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                {
                  title: "Connect with industry leaders across different regions",
                  icon: (
                    <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Gain insights into global industry trends and practices",
                  icon: (
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Build diverse teams and partnerships across cultures",
                  icon: (
                    <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="text-white/80">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;