import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Portfolio</h3>
            <p className="text-muted-foreground">
              Building modern web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-accent transition-smooth">
                About
              </a>
              <a href="/projects" className="block text-muted-foreground hover:text-accent transition-smooth">
                Projects
              </a>
              <a href="/blog" className="block text-muted-foreground hover:text-accent transition-smooth">
                Blog
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-accent transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="hover-lift">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};