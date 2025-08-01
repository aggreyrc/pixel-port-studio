import { Code, Database, Globe, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"],
      color: "text-blue-500"
    },
    {
      category: "Backend",
      icon: Server,
      technologies: ["Flask", "Python","Express", "REST APIs", "PostgresQL"],
      color: "text-green-500"
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["PostgreSQL",  "SQLite","SQL"],
      color: "text-purple-500"
    },
    {
      category: "DevOps & Tools",
      icon: Code,
      technologies: ["Docker","Git", "GitHub Actions", "Linux", "CI/CD"],
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About{" "}
              <span className="text-gradient">Me</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer with a love for creating elegant solutions 
              to complex problems. I believe in writing clean, maintainable code and 
              delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  My journey into web development began with curiosity and has evolved into a 
                  passion for creating digital experiences that make a difference. With several 
                  years of experience in both frontend and backend development, I've had the 
                  opportunity to work on diverse projects ranging from small business websites 
                  to large-scale enterprise applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm constantly learning and staying up-to-date with the latest technologies 
                  and best practices. I believe in the power of clean code, thoughtful architecture, 
                  and user-centered design to create applications that are not just functional, 
                  but delightful to use.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 animate-slide-in-right">
                <h3 className="text-xl font-semibold mb-4 text-foreground">My Approach</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    User-first design thinking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Clean, maintainable code
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Agile development practices
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Continuous learning mindset
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Technical{" "}
                <span className="text-gradient">Skills</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are the technologies and tools I work with to bring ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <Card 
                    key={skillGroup.category} 
                    className="card-gradient hover-lift border-border/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className={`w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center ${skillGroup.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {skillGroup.category}
                        </h3>
                        <div className="space-y-2">
                          {skillGroup.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Development{" "}
              <span className="text-gradient">Philosophy</span>
            </h2>
            
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 text-left">
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                "Great software is not just about solving problems—it's about creating 
                experiences that users love. I strive to write code that is not only 
                functional but also elegant, maintainable, and scalable. Every line of 
                code should serve a purpose, and every user interaction should feel 
                intuitive and delightful."
              </blockquote>
              <cite className="block mt-4 text-foreground font-semibold">
                — My Development Mantra
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}