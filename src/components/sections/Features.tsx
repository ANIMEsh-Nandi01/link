
import { Network, Search, Share2, BarChartHorizontal, Layers, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  delay: number 
}) => (
  <div 
    className="feature-card opacity-0 animate-scale-in" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/80">{description}</p>
  </div>
);

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach(card => {
              card.classList.add('animate-scale-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden" ref={featuresRef}>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/30">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Revolutionary Features</span>
          </div>
          
          <h2 className="heading-lg mb-4">AI-Powered Networking Tools</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Our suite of advanced AI tools transforms how you build professional relationships,
            from intelligent matching algorithms to data-driven insights that identify high-value
            connections tailored to your career trajectory.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Network} 
            title="Advanced 2nd-Degree Networking" 
            description="Discover hidden networking opportunities through 2nd-degree connections you wouldn't normally find."
            delay={0.1}
          />
          
          <FeatureCard 
            icon={Layers} 
            title="AI-Powered Connection Recommendations" 
            description="Our AI analyzes your profile and goals to suggest the most valuable professional connections."
            delay={0.2}
          />
          
          <FeatureCard 
            icon={BarChartHorizontal} 
            title="Smart Engagement Tracking" 
            description="Track and analyze your networking activities to optimize your relationship-building strategy."
            delay={0.3}
          />
          
          <FeatureCard 
            icon={Search} 
            title="Enhanced Search Capabilities" 
            description="Find professionals by skill, industry, location, and more with our powerful search tools."
            delay={0.4}
          />
          
          <FeatureCard 
            icon={Share2} 
            title="Seamless Integration" 
            description="Connect with your existing professional networks and import contacts with a single click."
            delay={0.5}
          />
          
          <FeatureCard 
            icon={Globe} 
            title="Global Reach" 
            description="Connect with professionals worldwide, breaking down geographical barriers to networking."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
