import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus } from "lucide-react";

interface ProjectFormData {
  name: string;
  description: string;
  github_url: string;
  demo_url?: string;
  homepage?: string;
  language?: string;
  tech_stack: string;
  topics: string;
  featured: boolean;
}

const Admin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<ProjectFormData>();

  const featuredValue = watch("featured", false);

  const onSubmit = async (data: ProjectFormData) => {
    try {
      setIsSubmitting(true);
      
      // Process tech_stack and topics from comma-separated strings to arrays
      const tech_stack = data.tech_stack ? data.tech_stack.split(',').map(item => item.trim()) : [];
      const topics = data.topics ? data.topics.split(',').map(item => item.trim()) : [];
      
      const projectData = {
        github_id: Math.floor(Math.random() * 1000000), // Generate random ID for manual entries
        name: data.name,
        full_name: data.name,
        description: data.description,
        github_url: data.github_url,
        demo_url: data.demo_url || null,
        homepage: data.homepage || null,
        language: data.language || null,
        tech_stack,
        topics,
        featured: data.featured,
        stargazers_count: 0,
        forks_count: 0,
        pushed_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('projects')
        .insert([projectData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Project added successfully!",
      });

      reset();
    } catch (error) {
      console.error('Error adding project:', error);
      let errorMessage = "Failed to add project. Please try again.";
      if (error && typeof error === 'object') {
        if ('message' in error && typeof error.message === 'string') {
          errorMessage = error.message;
        } else {
          try {
            errorMessage = JSON.stringify(error);
          } catch {
            errorMessage = String(error);
          }
        }
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name *</Label>
                <Input
                  id="name"
                  {...register("name", { required: "Project name is required" })}
                  placeholder="Enter project name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  {...register("description", { required: "Description is required" })}
                  placeholder="Enter project description"
                  rows={4}
                />
                {errors.description && (
                  <p className="text-sm text-destructive">{errors.description.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="github_url">GitHub URL *</Label>
                <Input
                  id="github_url"
                  {...register("github_url", { required: "GitHub URL is required" })}
                  placeholder="https://github.com/username/repo"
                />
                {errors.github_url && (
                  <p className="text-sm text-destructive">{errors.github_url.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo_url">Demo URL</Label>
                <Input
                  id="demo_url"
                  {...register("demo_url")}
                  placeholder="https://demo.example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="homepage">Homepage</Label>
                <Input
                  id="homepage"
                  {...register("homepage")}
                  placeholder="https://project-homepage.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Primary Language</Label>
                <Input
                  id="language"
                  {...register("language")}
                  placeholder="JavaScript, TypeScript, Python, etc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tech_stack">Tech Stack</Label>
                <Input
                  id="tech_stack"
                  {...register("tech_stack")}
                  placeholder="React, Node.js, PostgreSQL (comma-separated)"
                />
                <p className="text-sm text-muted-foreground">
                  Enter technologies separated by commas
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="topics">Topics/Tags</Label>
                <Input
                  id="topics"
                  {...register("topics")}
                  placeholder="web, fullstack, ecommerce (comma-separated)"
                />
                <p className="text-sm text-muted-foreground">
                  Enter topics separated by commas
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={featuredValue}
                  onCheckedChange={(checked) => setValue("featured", checked)}
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding Project...
                  </>
                ) : (
                  "Add Project"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;