import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices and Patterns",
      excerpt: "Learn how to structure large React applications for maintainability and scalability. Covering component architecture, state management, and performance optimization strategies.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Architecture"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Mastering CSS Grid and Flexbox: A Modern Layout Guide",
      excerpt: "A comprehensive guide to modern CSS layout techniques. Learn when to use Grid vs Flexbox and how to create responsive layouts that work across all devices.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Layout", "Responsive Design"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "Flask API Development: From Setup to Production",
      excerpt: "Step-by-step guide to building robust REST APIs with Flask. Covering authentication, database integration, testing, and deployment strategies.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Backend",
      tags: ["Flask", "Python", "API", "Backend"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "TypeScript for JavaScript Developers: Making the Transition",
      excerpt: "A practical guide for JavaScript developers looking to adopt TypeScript. Learn the benefits, common patterns, and how to gradually migrate existing projects.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Development"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Docker for Web Developers: Containerizing Your Applications",
      excerpt: "Learn how to use Docker to create consistent development environments and streamline your deployment process. Perfect for web developers new to containerization.",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "DevOps",
      tags: ["Docker", "DevOps", "Deployment"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Modern JavaScript: ES2023 Features You Should Know",
      excerpt: "Explore the latest JavaScript features and how they can improve your code. From new array methods to enhanced async/await patterns.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES2023", "Modern JS"],
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Technical{" "}
              <span className="text-gradient">Blog</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing insights, tutorials, and thoughts on web development, 
              programming best practices, and the latest in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">
              Featured Articles
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="card-gradient hover-lift border-border/50 overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 group">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 md:mb-0 animate-fade-in">
                Recent Posts
              </h2>
              
              <div className="flex flex-wrap gap-2 animate-fade-in">
                <Button variant="outline" size="sm" className="text-xs">
                  All
                </Button>
                {categories.map((category) => (
                  <Button key={category} variant="outline" size="sm" className="text-xs">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="card-gradient hover-lift border-border/50 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full text-xs group">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6">
                Get notified when I publish new articles about web development, 
                programming tutorials, and tech insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="bg-accent hover:bg-accent/90 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}