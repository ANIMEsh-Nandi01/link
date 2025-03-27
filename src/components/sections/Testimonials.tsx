
import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Daniel Foster",
    role: "Software Architect",
    company: "CodeCraft Labs",
    image: "/lovable-uploads/29db64f0-34dd-4131-ba88-8ec1ec24c0cc.png",
    quote: "The platform's mentor matching algorithm is exceptional. I've found incredible mentors who've transformed my career path.",
    rating: 5,
    verified: true,
    trusted: true
  },
  {
    id: 2,
    name: "Isabella Romano",
    role: "Market Expansion Lead",
    company: "GrowthBridge",
    image: "/lovable-uploads/318250be-fcb3-401c-98fc-fdd851b67212.png",
    quote: "LinkGrid's industry insights and networking suggestions have helped us expand into new markets effectively.",
    rating: 5,
    verified: true,
    trusted: true
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Innovation Director",
    company: "CrossTech Innovations",
    image: "/lovable-uploads/4dee9502-fab2-4249-9391-28364216f4fa.png",
    quote: "The AI's ability to suggest cross-industry connections has opened up innovative collaboration opportunities.",
    rating: 5,
    verified: true,
    trusted: true
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Head of Talent Acquisition",
    company: "FutureTech Inc",
    image: "/lovable-uploads/42c442e4-8704-451f-9240-5ecb41db0551.png",
    quote: "We've integrated LinkGrid into our recruitment process. The quality of candidates we're finding through second-degree connections is remarkable.",
    rating: 5,
    verified: true,
    trusted: true
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "NexGen Solutions",
    image: "/lovable-uploads/f6edde2a-238b-4988-a4b1-8002504bb272.png",
    quote: "As a founder, building the right network is crucial. LinkGrid's AI recommendations have connected me with perfect advisors and potential investors.",
    rating: 4,
    verified: true,
    trusted: false
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: typeof testimonials[0], isActive: boolean }) => (
  <div className={`glass-card-dark rounded-2xl p-8 transition-all duration-500 flex flex-col h-full
                  ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-lg">{testimonial.name}</h4>
        <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
      </div>
    </div>
    
    <div className="flex text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400' : 'text-gray-400'}`} 
        />
      ))}
    </div>
    
    <blockquote className="text-lg mb-6 flex-grow">
      <span className="text-4xl text-primary/30">"</span>
      {testimonial.quote}
      <span className="text-4xl text-primary/30">"</span>
    </blockquote>
    
    <div className="flex items-center justify-between mt-auto">
      <span className="text-xs text-foreground/60">Verified Review</span>
      {testimonial.trusted && (
        <div className="flex items-center text-xs text-blue-400">
          <div className="w-4 h-4 rounded-full bg-blue-400/10 flex items-center justify-center mr-1">
            <Check className="w-2.5 h-2.5" />
          </div>
          Trusted Member
        </div>
      )}
    </div>
  </div>
);

// Check component for trusted badge
const Check = ({ className }: { className: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };
  
  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-fade-in');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);
  
  return (
    <section className="py-24 relative bg-gray-950 text-white overflow-hidden" ref={testimonialsRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-blue-900/10"></div>
        <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-pulse-subtle"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm font-medium text-indigo-300">Member Experiences</span>
          </div>
          
          <h2 className="heading-lg mb-4 text-white">What Our Members Say</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover how LinkGrid has transformed professional networking for our members.
          </p>
        </div>
        
        <div className="relative">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1,
                activeIndex,
                (activeIndex + 1) % testimonials.length
              ].map((index, i) => (
                <div key={testimonials[index].id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                  <TestimonialCard 
                    testimonial={testimonials[index]} 
                    isActive={i === 1} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={handleNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                index === activeIndex ? 'bg-white w-6' : 'bg-white/40'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
