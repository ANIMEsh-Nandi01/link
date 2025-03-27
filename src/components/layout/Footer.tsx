
import { Mail, Instagram, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    console.log('Subscribing email:', email);
    console.log('Message:', message);
    setEmail('');
    setMessage('');
    // You could display a success message or toast notification here
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-purple-800/20 blur-3xl"></div>
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-pink-800/10 blur-3xl"></div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left column - Newsletter signup */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Stay Connected</h3>
            <p className="text-gray-300 max-w-md">
              Join our community and never miss out on exciting network opportunities, special offers, and insider tips. By subscribing to our newsletter, you'll get exclusive updates directly in your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4 mt-8">
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm text-white"
                  required
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Anything we should know?" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm text-white resize-none h-24"
                />
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          
          {/* Right column - Logo and links */}
          <div className="flex flex-col md:items-end">
            {/* Logo and description */}
            <div className="mb-12 md:text-right">
              <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-4 md:justify-end">
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-[2px]"></div>
                  <div className="relative z-10 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <span className="font-semibold">
                  Link<span className="text-primary">Grid</span><span className="text-xs align-top text-accent ml-0.5">AI</span>
                </span>
              </a>
              
              <p className="text-gray-400 max-w-md ml-auto">
                LinkGrid is transforming professional networking with AI-powered connections, intelligent matchmaking, and streamlined communications.
              </p>
            </div>
            
            {/* Footer links */}
            <div className="grid grid-cols-3 gap-8 w-full">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Apps & Games</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Discover</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Learn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms & use</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
            
            {/* Social icons */}
            <div className="flex gap-3 mt-8">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-purple-800/50 border border-gray-700 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-purple-800/50 border border-gray-700 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-purple-800/50 border border-gray-700 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-purple-800/50 border border-gray-700 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and back to top */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © All Rights Reserved. 2024 LinkGrid
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <a href="#support" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center mr-6">
              <Mail className="w-4 h-4 mr-2" />
              support@linkgrid.org
            </a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-purple-800 border border-gray-700 transition-colors">
              <ArrowUp className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
