
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Engineer. Problem Solver. Tech Enthusiast.';
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText(fullText.substring(0, textIndex - 1));
        setTextIndex(textIndex - 1);
        setTypingSpeed(50); // faster when deleting
        
        if (textIndex === 0) {
          setIsDeleting(false);
          setTypingSpeed(100); // normal speed when typing
        }
      } else {
        setTypedText(fullText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
        
        if (textIndex === fullText.length) {
          setTypingSpeed(2000); // pause at the end
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, typingSpeed]);

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-navy z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="text-teal font-mono mb-5 animate-fade-in">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
            John Doe
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground/70 mb-6 h-16 sm:h-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
            {typedText}<span className="animate-pulse">|</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-xl mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            I'm a computer science student with a passion for building innovative digital experiences. 
            Currently focused on artificial intelligence, web development, and solving complex algorithms.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.5s"}}>
            <Button size="lg" className="bg-teal text-navy hover:bg-teal/80">
              View My Work <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
              About Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <div className="flex flex-col items-center">
          <div className="h-16 w-0.5 bg-teal/30"></div>
          <p className="text-teal/70 text-sm font-mono mt-2">Scroll Down</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
