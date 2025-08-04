import { ExternalLink, Github, Eye, Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useProjects } from "@/hooks/useProjects";
import { GitHubSync } from "@/components/GitHubSync";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Projects() {
  const { projects, loading, error, refetch } = useProjects();
  const [showSync, setShowSync] = useState(false);
  const { toast } = useToast();

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleSyncComplete = () => {
    setShowSync(false);
    refetch();
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Skeleton className="h-16 w-96 mx-auto" />
              <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Skeleton className="h-8 w-64 mx-auto mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <Card key={i} className="card-gradient border-border/50">
                    <CardHeader className="p-0">
                      <Skeleton className="h-48 w-full rounded-t-lg" />
                    </CardHeader>
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-48 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <div className="flex gap-2">
                        {[1, 2, 3].map((j) => (
                          <Skeleton key={j} className="h-6 w-16" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Error loading projects</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={refetch}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                My{" "}
                <span className="text-gradient">Projects</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A collection of my recent work, showcasing various technologies and 
                approaches to solving real-world problems through code.
              </p>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setShowSync(true)}
                  variant="outline"
                  className="border-accent/20 hover:bg-accent/10"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Sync GitHub Projects
                </Button>
                <Button onClick={refetch} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sync Dialog */}
      {showSync && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-2 -right-2 z-10"
              onClick={() => setShowSync(false)}
            >
              ×
            </Button>
            <GitHubSync onSyncComplete={handleSyncComplete} />
          </div>
        </div>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
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
                      <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="w-full h-48 flex items-center justify-center">
                          <Github className="h-16 w-16 text-muted-foreground" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-2">
                            {project.demo_url && (
                              <Button 
                                size="sm" 
                                className="bg-accent hover:bg-accent/90"
                                onClick={() => window.open(project.demo_url!, '_blank')}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                Live Demo
                              </Button>
                            )}
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-white/20 text-white hover:bg-white/10"
                              onClick={() => window.open(project.html_url, '_blank')}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description || 'No description available'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(project.tech_stack || []).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <div className="flex space-x-3">
                        {project.demo_url ? (
                          <Button 
                            size="sm" 
                            className="bg-accent hover:bg-accent/90 flex-1"
                            onClick={() => window.open(project.demo_url!, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        ) : (
                          <Button size="sm" disabled className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            No Demo
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => window.open(project.html_url, '_blank')}
                        >
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
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
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
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description || 'No description available'}
                      </p>
                       <div className="flex flex-wrap gap-1 mb-4">
                         {(project.tech_stack || []).slice(0, 3).map((tech) => (
                           <Badge key={tech} variant="secondary" className="text-xs">
                             {tech}
                           </Badge>
                         ))}
                         {(project.tech_stack || []).length > 3 && (
                           <Badge variant="secondary" className="text-xs">
                             +{(project.tech_stack || []).length - 3}
                           </Badge>
                         )}
                       </div>
                      <div className="flex space-x-2">
                        {project.demo_url ? (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-xs flex-1"
                            onClick={() => window.open(project.demo_url!, '_blank')}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled className="text-xs flex-1">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            No Demo
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs flex-1"
                          onClick={() => window.open(project.html_url, '_blank')}
                        >
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
      )}

      {/* Empty State */}
      {projects.length === 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                <Github className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">No Projects Yet</h2>
              <p className="text-muted-foreground">
                Get started by syncing your GitHub repositories to showcase your work.
              </p>
              <Button onClick={() => setShowSync(true)} className="bg-accent hover:bg-accent/90">
                <Plus className="h-4 w-4 mr-2" />
                Sync GitHub Projects
              </Button>
            </div>
          </div>
        </section>
      )}

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
