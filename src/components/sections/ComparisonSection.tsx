
import { X, Check, AlertTriangle, Search, Clock, Eye } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ComparisonSection = () => {
  const comparisonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-fade-in');
            elements.forEach(el => {
              el.classList.add('opacity-100');
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
    <section id="comparison" className="py-24 relative bg-[#0F0A1F]" ref={comparisonRef}>
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-purple-800/20 blur-3xl"></div>
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-blue-800/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-indigo-500/10 border border-indigo-200/30">
            <span className="text-sm font-medium text-indigo-400">See the Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transform Your Networking Experience</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Slide to compare traditional networking with LinkGrid's intelligent approach
          </p>
        </div>
        
        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-red-500/10 border border-red-200/30">
              <span className="text-sm font-medium text-red-400">Current Networking Pain Points</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-red-300">Struggling to Find the Right Connections?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start p-4 rounded-lg border border-red-500/10 bg-red-900/5">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Search className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-red-300 mb-1">Struggling to Find the Right Connections</h3>
                  <p className="text-sm text-red-300/80">Endless searching through profiles with no clear matching system</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-red-500/10 bg-red-900/5">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-red-300 mb-1">Wasting Time on Endless Searches</h3>
                  <p className="text-sm text-red-300/80">Hours spent browsing profiles with minimal results</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-red-500/10 bg-red-900/5">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Eye className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-red-300 mb-1">Missing Hidden Opportunities</h3>
                  <p className="text-sm text-red-300/80">Valuable second-degree connections remain invisible</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-red-500/10 bg-red-900/5">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-red-300 mb-1">Networking Feels Forced & Ineffective</h3>
                  <p className="text-sm text-red-300/80">Generic outreach with low response rates</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-red-500/10 bg-red-900/5">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-red-300 mb-1">Your Network Isn't Working for You</h3>
                  <p className="text-sm text-red-300/80">Connections aren't aligned with your career goals</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-green-500/10 border border-green-200/30">
              <span className="text-sm font-medium text-green-400">LinkGrid's Smart Solutions</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-green-300">Transform Your Networking Experience</h2>
            
            <div className="space-y-4">
              <div className="flex items-start p-4 rounded-lg border border-green-500/10 bg-green-900/5">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-green-300 mb-1">Save Time with AI-Driven Matchmaking</h3>
                  <p className="text-sm text-green-300/80">Our AI analyzes profiles and suggests ideal matches based on goals</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-green-500/10 bg-green-900/5">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-green-300 mb-1">Automated Introductions Made Effortless</h3>
                  <p className="text-sm text-green-300/80">Smart icebreakers that highlight common interests and goals</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-green-500/10 bg-green-900/5">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-green-300 mb-1">Find Exactly Who You Need with AI Search</h3>
                  <p className="text-sm text-green-300/80">Advanced filters based on industry, skills, goals, and more</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-green-500/10 bg-green-900/5">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-green-300 mb-1">Tailored Suggestions for Real Impact</h3>
                  <p className="text-sm text-green-300/80">Personalized connection recommendations based on your career goals</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg border border-green-500/10 bg-green-900/5">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-green-300 mb-1">Dynamic Insights to Guide Your Growth</h3>
                  <p className="text-sm text-green-300/80">Analytics dashboard to track networking effectiveness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
