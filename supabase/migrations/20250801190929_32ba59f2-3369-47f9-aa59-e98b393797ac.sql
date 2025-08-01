-- Create projects table to store GitHub repository data
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  github_id INTEGER UNIQUE NOT NULL,
  name TEXT NOT NULL,
  full_name TEXT NOT NULL,
  description TEXT,
  html_url TEXT NOT NULL,
  homepage TEXT,
  language TEXT,
  topics TEXT[],
  stargazers_count INTEGER DEFAULT 0,
  forks_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  pushed_at TIMESTAMP WITH TIME ZONE,
  featured BOOLEAN DEFAULT false,
  demo_url TEXT,
  tech_stack TEXT[]
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read projects (public portfolio)
CREATE POLICY "Projects are publicly readable" 
ON public.projects 
FOR SELECT 
USING (true);

-- Create policy to allow authenticated users to manage projects
CREATE POLICY "Authenticated users can manage projects" 
ON public.projects 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_projects_featured ON public.projects(featured);
CREATE INDEX idx_projects_language ON public.projects(language);
CREATE INDEX idx_projects_topics ON public.projects USING GIN(topics);