
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Security from "../components/sections/Security";
import Testimonials from "../components/sections/Testimonials";
import Partners from "../components/sections/Partners";
import ComparisonSection from "../components/sections/ComparisonSection";
import CallToAction from "../components/sections/CallToAction";
import NetworkGraph from "../components/ui/NetworkGraph";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="relative py-20 bg-white dark:bg-gray-950 overflow-hidden" id="network-visualization">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-blue-500/10 border border-blue-200/30">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Network Visualization</span>
                </div>
                
                <h2 className="heading-md mb-4">See How LinkGrid Connects You</h2>
                <p className="text-foreground/80 mb-6">
                  This interactive diagram shows how LinkGrid connects you to a wider professional network. Hover over any node to learn more.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <div className="flex items-start mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                    <div>
                      <p className="font-medium">You (Center)</p>
                      <p className="text-sm text-foreground/70">Your profile at the center of your network</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                    <div>
                      <p className="font-medium">Direct Connections</p>
                      <p className="text-sm text-foreground/70">People you're directly connected with</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5 mr-2"></div>
                    <div>
                      <p className="font-medium">Extended Network</p>
                      <p className="text-sm text-foreground/70">Second-degree connections with potential value</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 h-[500px] rounded-2xl overflow-hidden glass-card">
                <NetworkGraph />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-4 py-2 rounded-full border border-blue-200/30 dark:border-blue-700/30">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-300">
                  <span className="font-bold text-lg">85K+</span> Networks Created
                </p>
                <span className="mx-3 text-gray-300 dark:text-gray-700">•</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-300">
                  <span className="font-bold text-lg">1.2M+</span> Connected Users
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Features />
        <Security />
        <ComparisonSection />
        <Testimonials />
        <Partners />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
