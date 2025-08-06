import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-scale">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{"  "}
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                AGGREY KIBET
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer crafting beautiful, responsive web experiences 
              with modern technologies and clean code.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/projects">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full hover-lift shadow-accent group">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="/Agrey Kibet Rono CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full hover-lift"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/aggreyrc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-smooth hover-lift"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aggrey-kibet/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-smooth hover-lift"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:aggreyronoh@gmail.com" 
                className="text-white/60 hover:text-accent transition-smooth hover-lift"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bringing Ideas to{" "}
              <span className="text-gradient">Life</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I specialize in creating modern, scalable web applications using cutting-edge 
              technologies. From concept to deployment, I focus on delivering exceptional 
              user experiences backed by robust, clean code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">Frontend</h3>
                <p className="text-muted-foreground">React, TypeScript, Tailwind CSS</p>
              </div>
              
              <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">Backend</h3>
                <p className="text-muted-foreground">Flask, Python, PostgreSQL</p>
              </div>
              
              <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">DevOps</h3>
                <p className="text-muted-foreground">Docker, CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}