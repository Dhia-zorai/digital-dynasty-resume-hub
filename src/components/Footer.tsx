
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-teal">
                <span className="font-mono">CS</span>
                <span className="text-foreground">.Dev</span>
              </div>
              <p className="mt-2 text-sm text-foreground/60 max-w-md">
                Passionate computer science student building innovative solutions for tomorrow's challenges.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-teal transition-colors">
                <span className="sr-only">GitHub</span>
                <div className="w-6 h-6 bg-foreground/60 rounded-full"></div>
              </a>
              <a href="#" className="text-foreground/60 hover:text-teal transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-foreground/60 rounded-full"></div>
              </a>
              <a href="#" className="text-foreground/60 hover:text-teal transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-foreground/60 rounded-full"></div>
              </a>
              <a href="#" className="text-foreground/60 hover:text-teal transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-foreground/60 rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li><a href="#home" className="text-sm text-foreground/60 hover:text-teal transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-foreground/60 hover:text-teal transition-colors">About</a></li>
              <li><a href="#skills" className="text-sm text-foreground/60 hover:text-teal transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-sm text-foreground/60 hover:text-teal transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-sm text-foreground/60 hover:text-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-foreground/40">
          <p>Designed and built with ❤️ by John Doe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
