
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-teal">
              <span className="font-mono">CS</span>
              <span className="text-foreground">.Dev</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-teal transition-colors font-medium"
              >
                <span className="text-teal font-mono mr-1">0{index + 1}.</span>
                {item.label}
              </a>
            ))}
            <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
              Resume
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-teal"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card m-4 animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-base text-foreground/80 hover:text-teal py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-teal font-mono mr-2">0{index + 1}.</span>
                {item.label}
              </a>
            ))}
            <Button variant="outline" className="border-teal text-teal hover:bg-teal/10 mt-2 w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
