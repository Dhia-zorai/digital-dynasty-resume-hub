
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-navy/50"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-2 text-xl font-mono text-teal">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h3>
          <p className="text-foreground/70">
            Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 space-y-6">
            <Card className="glass-card h-full">
              <CardContent className="p-6 space-y-8">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2">Contact Information</h4>
                  <p className="text-foreground/60">Don't hesitate to get in touch</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mr-4">
                      <Mail className="text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Email</p>
                      <a href="mailto:john.doe@example.com" className="text-foreground hover:text-teal transition-colors">
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mr-4">
                      <Phone className="text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Phone</p>
                      <a href="tel:+11234567890" className="text-foreground hover:text-teal transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mr-4">
                      <MapPin className="text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Location</p>
                      <p className="text-foreground">San Francisco, California</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex justify-center space-x-4">
                    {["github", "linkedin", "twitter"].map((social) => (
                      <a 
                        key={social}
                        href="#" 
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal/20 hover:border-teal transition-all"
                      >
                        <span className="sr-only">{social}</span>
                        {/* Placeholder for social icons */}
                        <div className="w-5 h-5 bg-teal/80 rounded-full"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-2/3">
            <Card className="glass-card">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 focus:border-teal"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 focus:border-teal"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 focus:border-teal"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px] bg-white/5 border-white/10 focus:border-teal"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teal text-navy hover:bg-teal/80"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
