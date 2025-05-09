
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, School, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-navy/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Image or avatar */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="John Doe" 
                    className="object-cover w-full h-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-2 border-teal rounded-lg transform translate-x-5 translate-y-5 z-0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full md:w-3/5">
            <h2 className="mb-2 text-xl font-mono text-teal">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Building digital solutions with passion and purpose.</h3>
            
            <p className="text-foreground/70 mb-6">
              Hello! I'm John, a computer science student with a focus on AI, web development, and algorithm design. My journey in tech started when I was 12 years old, tinkering with HTML and CSS to create simple websites.
            </p>
            
            <p className="text-foreground/70 mb-6">
              Today, I specialize in building exceptional digital experiences. I enjoy the challenge of solving complex problems and creating elegant, efficient solutions. Currently, I'm pursuing my degree in Computer Science at Stanford University, where I'm actively involved in research on machine learning applications.
            </p>
            
            {/* Timeline cards */}
            <div className="space-y-4 mb-8">
              <Card className="glass-card p-4 flex items-center">
                <School className="text-teal mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Stanford University</h4>
                  <p className="text-sm text-foreground/70">BS in Computer Science | 2021 - Present</p>
                </div>
              </Card>
              
              <Card className="glass-card p-4 flex items-center">
                <Briefcase className="text-teal mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Tech Innovators Intern</h4>
                  <p className="text-sm text-foreground/70">Software Developer | Summer 2023</p>
                </div>
              </Card>

              <Card className="glass-card p-4 flex items-center">
                <Code className="text-teal mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Open Source Contributor</h4>
                  <p className="text-sm text-foreground/70">10+ projects on GitHub | 2020 - Present</p>
                </div>
              </Card>
            </div>

            <Button className="bg-teal text-navy hover:bg-teal/80">
              Download Resume <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
