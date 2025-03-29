
"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const NavDropdown = ({ title, items }: { title: string; items: { name: string; href: string }[] }) => {
  return (
    <div className="relative group">
      <button className="flex items-center text-white group-hover:text-blue-300 transition-colors">
        {title} <span className="ml-1">+</span>
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-[#0A0B14] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
        <div className="py-2">
          {items.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const featuresItems = [
    { name: "Advanced Networking", href: "#advanced-networking" },
    { name: "AI Recommendations", href: "#ai-recommendations" },
    { name: "Smart Engagement", href: "#smart-engagement" }
  ];
  
  const securityItems = [
    { name: "Data Protection", href: "#data-protection" },
    { name: "Privacy Controls", href: "#privacy-controls" },
    { name: "Compliance", href: "#compliance" }
  ];
  
  const networkItems = [
    { name: "Global Reach", href: "#global-reach" },
    { name: "Industry Connections", href: "#industry-connections" },
    { name: "Integration", href: "#integration" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className={`max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.2)]' : ''
      }`}>
        {/* Logo */}
        <a href="#" className="relative z-10">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold">
                Link<span className="text-blue-500">Grid</span>
                <span className="text-xs align-top text-blue-300 ml-0.5">AI</span>
              </span>
              <div className="ml-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse"></div>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavDropdown title="Features" items={featuresItems} />
          <NavDropdown title="Security" items={securityItems} />
          <NavDropdown title="Network" items={networkItems} />
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#dashboard"
            className="hidden md:flex items-center justify-between bg-gradient-to-r from-white to-blue-100 text-black rounded-full pl-6 pr-2 py-2 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span>Dashboard</span>
            <span className="ml-2 bg-black text-white rounded-full p-2">
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[#0A0B14]/95 backdrop-blur-xl shadow-lg p-4 md:hidden mt-2 mx-4 rounded-xl border border-white/10"
        >
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-white hover:text-blue-300 py-2" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#security" className="text-white hover:text-blue-300 py-2" onClick={() => setMobileMenuOpen(false)}>
              Security
            </a>
            <a href="#network" className="text-white hover:text-blue-300 py-2" onClick={() => setMobileMenuOpen(false)}>
              Network
            </a>
            <a href="#global" className="text-white hover:text-blue-300 py-2" onClick={() => setMobileMenuOpen(false)}>
              Global
            </a>
            <a 
              href="#dashboard" 
              className="text-white bg-gradient-to-r from-blue-500 to-blue-600 py-2 px-4 rounded-lg font-medium flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
