import { useState } from "react";
import { Mail, MessageSquare, User, Send, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your Flask backend
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in{" "}
              <span className="text-gradient">Touch</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you're looking for a developer to join your team, need help with a project, 
                    or just want to connect with a fellow developer, I'm always open to new opportunities 
                    and interesting conversations.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary hover:bg-accent/10 rounded-lg flex items-center justify-center transition-smooth hover-lift group"
                    >
                      <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary hover:bg-accent/10 rounded-lg flex items-center justify-center transition-smooth hover-lift group"
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a 
                      href="mailto:your.email@example.com"
                      className="w-12 h-12 bg-secondary hover:bg-accent/10 rounded-lg flex items-center justify-center transition-smooth hover-lift group"
                    >
                      <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="card-gradient border-border/50 animate-slide-in-right">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <MessageSquare className="h-5 w-5 mr-2 text-accent" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="pl-10 bg-background border-border focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 bg-background border-border focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-background border-border focus:ring-accent resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 hover-lift shadow-accent group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    What's your typical response time?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I usually respond to messages within 24 hours during weekdays. 
                    For urgent matters, feel free to mention it in your message.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Do you work with international clients?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! I've worked with clients from various time zones 
                    and am comfortable with remote collaboration.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    What types of projects do you take on?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I work on web applications, APIs, and full-stack solutions. 
                    From small business websites to complex enterprise applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Are you available for long-term projects?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! I'm open to both short-term projects and long-term 
                    collaborations, including full-time opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}