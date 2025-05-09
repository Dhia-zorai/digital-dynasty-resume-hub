
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "JavaScript", level: 92 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 87 }
  ];

  const backendSkills = [
    { name: "Python", level: 95 },
    { name: "Node.js", level: 82 },
    { name: "Java", level: 78 },
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 75 }
  ];

  const otherSkills = [
    { name: "Machine Learning", level: 83 },
    { name: "Data Structures", level: 90 },
    { name: "Algorithms", level: 88 },
    { name: "Git", level: 85 },
    { name: "Docker", level: 72 }
  ];

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-2 text-xl font-mono text-teal">My Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Technical Expertise</h3>
          <p className="text-foreground/70">
            I've worked with a variety of technologies and tools. Here's a glimpse of my technical skills and proficiency levels.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="glass-card">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-teal/20">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-teal/20">Backend</TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-teal/20">Other</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend" className="mt-0 animate-fade-in">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {frontendSkills.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-teal">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-teal" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend" className="mt-0 animate-fade-in">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {backendSkills.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-teal">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-teal" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="other" className="mt-0 animate-fade-in">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {otherSkills.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-teal">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-teal" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["JavaScript", "React", "Python", "Node.js", "Java", "TypeScript", "MongoDB", "Git"].map((tech) => (
            <div key={tech} className="glass-card p-4 flex justify-center items-center text-center">
              <span className="text-foreground/80 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
