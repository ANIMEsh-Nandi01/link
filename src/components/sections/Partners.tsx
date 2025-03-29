
import { useEffect, useRef, useState } from 'react';

const partnerCompanies = [
  {
    id: 1,
    name: "Persist Ventures",
    logo: "/lovable-uploads/042b536b-f391-4845-a8d1-d42ed8088f78.png", 
    tags: ["Venture Capital", "Startup Funding"]
  },
  {
    id: 2,
    name: "Ovadrive",
    logo: "/lovable-uploads/eff6b150-4586-49c4-9631-47bc9c6c9077.png",
    tags: ["Technology", "Solutions"]
  },
  {
    id: 3,
    name: "Systemicaltruism",
    logo: "/lovable-uploads/8130ce49-2d22-4aa2-9ddc-3677d12ca383.png",
    tags: ["Non-profit", "Innovation"]
  },
  {
    id: 4,
    name: "Neighborgood",
    logo: "/lovable-uploads/b0e9f8ce-7ab6-4b9f-a464-4b3b8011abec.png",
    tags: ["Community", "Platform"]
  },
  {
    id: 5,
    name: "DevisAI",
    logo: "/lovable-uploads/150b7313-1ebe-4f69-acab-48782f0f4d99.png",
    tags: ["AI", "Technology"]
  },
  {
    id: 6,
    name: "Swissmote",
    logo: "/lovable-uploads/f6edde2a-238b-4988-a4b1-8002504bb272.png",
    tags: ["IoT", "Solutions"]
  },
  {
    id: 7,
    name: "Quantum Innovations",
    logo: "/lovable-uploads/042b536b-f391-4845-a8d1-d42ed8088f78.png",
    tags: ["Research", "Advanced"]
  },
  {
    id: 8,
    name: "EcoTech Global",
    logo: "/lovable-uploads/8130ce49-2d22-4aa2-9ddc-3677d12ca383.png",
    tags: ["Sustainable", "Solutions"]
  }
];

// Company logo components
const CompanyLogos = {
  PersistVentures: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50C20 33.4315 33.4315 20 50 20V20C66.5685 20 80 33.4315 80 50V50C80 66.5685 66.5685 80 50 80V80C33.4315 80 20 66.5685 20 50V50Z" fill="#4F46E5"/>
      <path d="M35 40H65V45H35V40Z" fill="white"/>
      <path d="M35 50H65V55H35V50Z" fill="white"/>
      <path d="M35 60H55V65H35V60Z" fill="white"/>
    </svg>
  ),
  Ovadrive: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" fill="#2563EB"/>
      <path d="M50 30L65 50L50 70L35 50L50 30Z" fill="white"/>
    </svg>
  ),
  Systemicaltruism: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="15" fill="#10B981"/>
      <circle cx="65" cy="35" r="15" fill="#10B981"/>
      <circle cx="50" cy="65" r="15" fill="#10B981"/>
      <path d="M35 35L50 65L65 35L35 35Z" fill="#10B981"/>
    </svg>
  ),
  Neighborgood: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40H45V70H30V40Z" fill="#F59E0B"/>
      <path d="M55 40H70V70H55V40Z" fill="#F59E0B"/>
      <path d="M50 20L70 40H30L50 20Z" fill="#F59E0B"/>
    </svg>
  ),
  DevisAI: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" fill="#8B5CF6"/>
      <path d="M40 40L60 60" stroke="white" strokeWidth="5"/>
      <path d="M40 60L60 40" stroke="white" strokeWidth="5"/>
      <circle cx="50" cy="50" r="5" fill="white"/>
    </svg>
  ),
  Swissmote: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="40" height="40" rx="5" fill="#EC4899"/>
      <circle cx="40" cy="40" r="5" fill="white"/>
      <circle cx="60" cy="40" r="5" fill="white"/>
      <circle cx="40" cy="60" r="5" fill="white"/>
      <circle cx="60" cy="60" r="5" fill="white"/>
    </svg>
  ),
  QuantumInnovations: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="#3B82F6" strokeWidth="5"/>
      <circle cx="50" cy="50" r="15" fill="#3B82F6"/>
      <circle cx="50" cy="20" r="5" fill="#3B82F6"/>
      <circle cx="50" cy="80" r="5" fill="#3B82F6"/>
      <circle cx="20" cy="50" r="5" fill="#3B82F6"/>
      <circle cx="80" cy="50" r="5" fill="#3B82F6"/>
    </svg>
  ),
  EcoTechGlobal: () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20C65.464 20 78 32.536 78 48C78 63.464 65.464 76 50 76C34.536 76 22 63.464 22 48C22 32.536 34.536 20 50 20Z" fill="#059669"/>
      <path d="M50 30L55 45H70L58 55L63 70L50 60L37 70L42 55L30 45H45L50 30Z" fill="white"/>
    </svg>
  )
};

// Map company names to logo components
const getLogoComponent = (name: string) => {
  const nameWithoutSpaces = name.replace(/\s+/g, '');
  return CompanyLogos[nameWithoutSpaces as keyof typeof CompanyLogos] || CompanyLogos.PersistVentures;
};

// Generate a unique gradient for each partner
const getPartnerGradient = (id: number) => {
  const gradients = [
    'from-blue-600 via-indigo-500 to-purple-600',
    'from-purple-600 via-pink-500 to-red-500',
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-amber-500 via-orange-500 to-red-500',
    'from-blue-500 via-cyan-400 to-emerald-500',
    'from-fuchsia-500 via-purple-500 to-indigo-500',
    'from-rose-500 via-pink-500 to-purple-500',
    'from-cyan-500 via-blue-500 to-indigo-500'
  ];
  
  return gradients[id % gradients.length];
};

const PartnerCard = ({ partner, delay }: { partner: typeof partnerCompanies[0], delay: number }) => {
  const LogoComponent = getLogoComponent(partner.name);
  const [isHovered, setIsHovered] = useState(false);
  const gradientClass = getPartnerGradient(partner.id);
  
  return (
    <div 
      className="relative group opacity-0 animate-scale-in h-full"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decreased outer glow effects */}
      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-70 blur-lg transition-all duration-700 animate-gradient-shift`}></div>
      <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-60 blur-sm transition-all duration-700 group-hover:animate-pulse-slow`}></div>
      
      {/* Card content */}
      <div className="relative rounded-2xl p-6 flex flex-col items-center transition-all duration-500 z-10 bg-black/40 backdrop-blur-md border border-white/10 h-full group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        {/* Logo container with decreased glow animation */}
        <div className="relative w-24 h-24 mb-6 group-hover:animate-float transition-all duration-500">
          {/* Rotating background for logo with decreased glow */}
          <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${gradientClass} opacity-30 group-hover:opacity-80 group-hover:animate-rotate-slow transition-all duration-500 blur-sm`}></div>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradientClass} opacity-30 group-hover:opacity-80 group-hover:animate-rotate-slow transition-all duration-500`}></div>
          
          {/* Logo */}
          <div className="absolute inset-1 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center p-3 border border-white/20 group-hover:border-white/40 transition-all duration-500">
            <LogoComponent />
          </div>
        </div>
        
        {/* Company name with decreased glow effect */}
        <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors duration-300 relative">
          {partner.name}
          <span className={`absolute -inset-1 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-30 blur-sm rounded-lg transition-opacity duration-500`}></span>
        </h3>
        
        {/* Tags with decreased hover effects */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {partner.tags.map(tag => (
            <span 
              key={tag} 
              className={`px-3 py-1 text-xs rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/20 group-hover:bg-gradient-to-r ${gradientClass} group-hover:bg-opacity-10 transition-all duration-500 group-hover:shadow-[0_0_5px_rgba(255,255,255,0.1)]`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  const partnersRef = useRef<HTMLDivElement>(null);
  
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
    
    if (partnersRef.current) {
      observer.observe(partnersRef.current);
    }
    
    return () => {
      if (partnersRef.current) observer.unobserve(partnersRef.current);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={partnersRef}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with enhanced styling */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-sm font-medium text-blue-400">Our Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
            Trusted by Forward-Thinking Companies
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Join industry leaders who are transforming their professional networking with LinkGrid.
          </p>
        </div>
        
        {/* Partner cards grid with more spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partnerCompanies.map((partner, index) => (
            <PartnerCard 
              key={partner.id} 
              partner={partner} 
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>
        
        {/* Enhanced view all link */}
        <div className="mt-16 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="#view-partners" className="group relative px-6 py-3 overflow-hidden rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
            <span className="relative z-10 flex items-center text-white/80 group-hover:text-white transition-colors">
              View all partner companies
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
