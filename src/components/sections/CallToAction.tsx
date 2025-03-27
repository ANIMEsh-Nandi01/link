
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-gray-950"></div>
        
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Professional Network?</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mb-8">
              Join thousands of professionals who are already experiencing the power of intelligent networking on LinkGrid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#create-account" className="button-primary flex items-center">
                Create Your Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#view-pricing" className="button-outline">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
