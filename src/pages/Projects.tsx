import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Flask backend, and PostgreSQL database. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Flask", "PostgreSQL", "Stripe", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application built with React and real-time updates using WebSockets. Features drag-and-drop functionality, team collaboration, and deadline tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/taskmanager",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts using external APIs. Features location-based weather, interactive charts, and saved locations.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/weather",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode toggle, and optimized performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/portfolio",
      featured: false
    },
    {
      id: 5,
      title: "Blog CMS",
      description: "A content management system for blogs with markdown support, user authentication, and admin panel. Built with modern web technologies and optimized for SEO.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Markdown"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/blog-cms",
      featured: false
    },
    {
      id: 6,
      title: "Real-time Chat App",
      description: "A real-time messaging application with multiple chat rooms, file sharing, and emoji support. Built with modern web technologies and WebSocket communication.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/chatapp",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              My{" "}
              <span className="text-gradient">Projects</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of my recent work, showcasing various technologies and 
              approaches to solving real-world problems through code.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="card-gradient hover-lift border-border/50 overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-accent hover:bg-accent/90">
                            <Eye className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-accent hover:bg-accent/90 flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">
              More Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="card-gradient hover-lift border-border/50 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs flex-1">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs flex-1">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Interested in{" "}
              <span className="text-gradient">Working Together?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full hover-lift shadow-accent">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
