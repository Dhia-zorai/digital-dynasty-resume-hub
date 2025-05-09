
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "AI Study Assistant",
    description: "A machine learning powered application that helps students optimize their study sessions based on performance data.",
    image: "/placeholder.svg",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    demoUrl: "#",
    sourceUrl: "#",
    category: "ai",
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    description: "Full-stack web application for tracking expenses, creating budgets, and visualizing spending habits.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    demoUrl: "#",
    sourceUrl: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Algorithm Visualizer",
    description: "Interactive tool for visualizing various sorting and path-finding algorithms to help students learn algorithm fundamentals.",
    image: "/placeholder.svg",
    technologies: ["JavaScript", "CSS", "HTML", "Canvas API"],
    demoUrl: "#",
    sourceUrl: "#",
    category: "algorithms",
  },
  {
    id: 4,
    title: "Social Network Analysis Tool",
    description: "Tool for analyzing social network data to identify patterns, influential nodes, and community structures.",
    image: "/placeholder.svg",
    technologies: ["Python", "NetworkX", "D3.js", "Flask"],
    demoUrl: "#",
    sourceUrl: "#",
    category: "data",
  },
  {
    id: 5,
    title: "Markdown Note Taking App",
    description: "Minimalist markdown-based note-taking application with cloud sync and collaboration features.",
    image: "/placeholder.svg",
    technologies: ["React", "Firebase", "Marked.js", "Tailwind CSS"],
    demoUrl: "#",
    sourceUrl: "#",
    category: "web",
  },
  {
    id: 6,
    title: "Reinforcement Learning Game AI",
    description: "AI agent trained using reinforcement learning to play complex strategy games at a superhuman level.",
    image: "/placeholder.svg",
    technologies: ["Python", "PyTorch", "OpenAI Gym", "TensorFlow"],
    demoUrl: "#",
    sourceUrl: "#",
    category: "ai",
  }
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "ai", name: "AI & ML" },
  { id: "algorithms", name: "Algorithms" },
  { id: "data", name: "Data Science" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-navy/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-2 text-xl font-mono text-teal">My Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h3>
          <p className="text-foreground/70">
            Here are some of my recent projects. Each one represents challenges I've overcome and skills I've developed.
          </p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide py-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button 
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? "bg-teal text-navy hover:bg-teal/80" 
                    : "border-teal/50 text-foreground/70 hover:text-teal hover:border-teal"
                } whitespace-nowrap`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden border-white/5 hover:border-teal/30 transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="pt-6 flex-grow">
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/5 text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-white/5 pt-4 space-x-4">
                <Button variant="ghost" className="group hover:text-teal p-2" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span className="group-hover:underline">Live Demo</span>
                  </a>
                </Button>
                
                <Button variant="ghost" className="group hover:text-teal p-2" asChild>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    <span className="group-hover:underline">Source Code</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {activeCategory === "all" && (
          <div className="mt-12 text-center">
            <Button className="bg-teal text-navy hover:bg-teal/80">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
