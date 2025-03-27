
import { useEffect, useRef } from 'react';

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

const PartnerCard = ({ partner, delay }: { partner: typeof partnerCompanies[0], delay: number }) => (
  <div 
    className="glass-card rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 opacity-0 animate-scale-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm p-2 mb-4 flex items-center justify-center">
      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {partner.tags.map(tag => (
        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="heading-lg mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Trusted by Forward-Thinking Companies
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Join industry leaders who are transforming their professional networking with LinkGrid.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partnerCompanies.map((partner, index) => (
            <PartnerCard 
              key={partner.id} 
              partner={partner} 
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="#view-partners" className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-700 dark:text-blue-300 transition-colors">
            View all partner companies
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
