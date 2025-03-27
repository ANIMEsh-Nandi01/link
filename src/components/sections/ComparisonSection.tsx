
import { X, Check, AlertTriangle, Search, Clock, Eye } from 'lucide-react';
import { useEffect, useRef } from 'react';

const PainPoint = ({ icon: Icon, title, description, delay }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  delay: number 
}) => (
  <div 
    className="flex items-start p-4 rounded-lg border border-red-500/10 bg-red-50/30 dark:bg-red-900/5 transition-all duration-300 opacity-0 animate-slide-in-left"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4 flex-shrink-0">
      <Icon className="h-5 w-5 text-red-600 dark:text-red-400" />
    </div>
    <div>
      <h3 className="text-base font-semibold text-red-800 dark:text-red-300 mb-1">{title}</h3>
      <p className="text-sm text-red-700/80 dark:text-red-300/80">{description}</p>
    </div>
  </div>
);

const Solution = ({ icon: Icon, title, description, delay }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  delay: number 
}) => (
  <div 
    className="flex items-start p-4 rounded-lg border border-green-500/10 bg-green-50/30 dark:bg-green-900/5 transition-all duration-300 opacity-0 animate-slide-in-right"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 flex-shrink-0">
      <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
    </div>
    <div>
      <h3 className="text-base font-semibold text-green-800 dark:text-green-300 mb-1">{title}</h3>
      <p className="text-sm text-green-700/80 dark:text-green-300/80">{description}</p>
    </div>
  </div>
);

const ComparisonSection = () => {
  const comparisonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right, .animate-fade-in');
            elements.forEach(el => {
              el.classList.add('animate-slide-in-left', 'animate-slide-in-right', 'animate-fade-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (comparisonRef.current) {
      observer.observe(comparisonRef.current);
    }
    
    return () => {
      if (comparisonRef.current) observer.unobserve(comparisonRef.current);
    };
  }, []);

  return (
    <section id="network" className="py-24 relative" ref={comparisonRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-red-500/10 border border-red-200/30">
              <span className="text-sm font-medium text-red-700 dark:text-red-400">Current Networking Pain Points</span>
            </div>
            
            <h2 className="heading-md mb-6 text-red-800 dark:text-red-300">Struggling to Find the Right Connections?</h2>
            
            <div className="space-y-4">
              <PainPoint 
                icon={Search}
                title="Struggling to Find the Right Connections" 
                description="Endless searching through profiles with no clear matching system"
                delay={0.1}
              />
              
              <PainPoint 
                icon={Clock}
                title="Wasting Time on Endless Searches" 
                description="Hours spent browsing profiles with minimal results"
                delay={0.2}
              />
              
              <PainPoint 
                icon={Eye}
                title="Missing Hidden Opportunities" 
                description="Valuable second-degree connections remain invisible"
                delay={0.3}
              />
              
              <PainPoint 
                icon={X}
                title="Networking Feels Forced & Ineffective" 
                description="Generic outreach with low response rates"
                delay={0.4}
              />
              
              <PainPoint 
                icon={AlertTriangle}
                title="Your Network Isn't Working for You" 
                description="Connections aren't aligned with your career goals"
                delay={0.5}
              />
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-green-500/10 border border-green-200/30">
              <span className="text-sm font-medium text-green-700 dark:text-green-400">LinkGrid's Smart Solutions</span>
            </div>
            
            <h2 className="heading-md mb-6 text-green-800 dark:text-green-300">Transform Your Networking Experience</h2>
            
            <div className="space-y-4">
              <Solution 
                icon={Check}
                title="Save Time with AI-Driven Matchmaking" 
                description="Our AI analyzes profiles and suggests ideal matches based on goals"
                delay={0.3}
              />
              
              <Solution 
                icon={Check}
                title="Automated Introductions Made Effortless" 
                description="Smart icebreakers that highlight common interests and goals"
                delay={0.4}
              />
              
              <Solution 
                icon={Check}
                title="Find Exactly Who You Need with AI Search" 
                description="Advanced filters based on industry, skills, goals, and more"
                delay={0.5}
              />
              
              <Solution 
                icon={Check}
                title="Tailored Suggestions for Real Impact" 
                description="Personalized connection recommendations based on your career goals"
                delay={0.6}
              />
              
              <Solution 
                icon={Check}
                title="Dynamic Insights to Guide Your Growth" 
                description="Analytics dashboard to track networking effectiveness"
                delay={0.7}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
