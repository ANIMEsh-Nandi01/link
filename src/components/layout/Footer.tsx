
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
    <footer className="bg-black text-white">
      {/* Newsletter section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 max-w-md mb-6">
              Join our community and never miss out on exciting network opportunities, special offers, and insider tips. By subscribing to our newsletter, you'll get exclusive updates directly in your inbox.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              required
            />
            
            <textarea 
              placeholder="Anything we should know?" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none h-24"
            />
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                onClick={handleSubscribe}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer with links */}
      <div className="container mx-auto px-6">
        <div className="bg-[#0F0F17] rounded-xl p-8 md:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-2 text-xl font-bold mb-4">
                <div className="relative w-8 h-8 rounded bg-purple-600 flex items-center justify-center">
                  <div className="relative z-10 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
                <span className="font-semibold">
                  Link<span className="text-primary">Grid</span><span className="text-xs align-top text-accent ml-0.5">AI</span>
                </span>
              </a>
              
              <p className="text-gray-300 text-sm mb-6">
                LinkGrid is transforming professional networking with AI-powered connections, intelligent matchmaking, and streamlined communications.
              </p>
              
              {/* Social icons */}
              <div className="flex gap-3">
                <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & use</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-800 text-center md:text-left text-sm text-gray-400">
            © All Rights Reserved. 2024 LinkGrid
            
            {/* Scroll to top button */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="absolute bottom-12 right-12 bg-black p-2 rounded-full border border-gray-800 hover:bg-gray-900 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
