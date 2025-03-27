
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
        
        <div className="relative py-20 bg-gray-950 overflow-hidden" id="network-visualization">
          <div className="absolute inset-0 bg-grid-large opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/10 to-background"></div>
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-purple-500/10 border border-purple-200/30">
                  <span className="text-sm font-medium text-purple-300">Network Visualization</span>
                </div>
                
                <h2 className="heading-md mb-4 text-white">See How LinkGrid Connects You</h2>
                <p className="text-gray-300 mb-6">
                  This interactive diagram shows how LinkGrid connects you to a wider professional network. Hover over any node to learn more.
                </p>
                
                <div className="neo-glass p-4 rounded-lg">
                  <div className="flex items-start mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5 mr-2"></div>
                    <div>
                      <p className="font-medium text-white">You (Center)</p>
                      <p className="text-sm text-gray-300">Your profile at the center of your network</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 mr-2"></div>
                    <div>
                      <p className="font-medium text-white">Direct Connections</p>
                      <p className="text-sm text-gray-300">People you're directly connected with</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 rounded-full bg-pink-500 mt-1.5 mr-2"></div>
                    <div>
                      <p className="font-medium text-white">Extended Network</p>
                      <p className="text-sm text-gray-300">Second-degree connections with potential value</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 h-[500px] rounded-2xl overflow-hidden neo-glass backdrop-blur-xl border border-white/10">
                <NetworkGraph />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-900/30 to-indigo-900/30 px-4 py-2 rounded-full border border-purple-700/30">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <p className="text-sm font-medium text-purple-300">
                  <span className="font-bold text-lg">85K+</span> Networks Created
                </p>
                <span className="mx-3 text-gray-700">•</span>
                <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
                <p className="text-sm font-medium text-purple-300">
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
