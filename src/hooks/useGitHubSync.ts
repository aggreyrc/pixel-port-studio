import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string | null;
}

export const useGitHubSync = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const syncGitHubProjects = async (username: string) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch repositories from GitHub API
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }

      const repos: GitHubRepo[] = await response.json();

      // Filter out forks and select interesting repositories
      const filteredRepos = repos.filter(repo => 
        !repo.name.startsWith(repo.full_name.split('/')[0]) && // Not a fork
        repo.description && // Has description
        repo.language && // Has primary language
        repo.stargazers_count >= 0 // Include all for now
      );

      // Insert or update projects in Supabase
      for (const repo of filteredRepos) {
        const projectData = {
          github_id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          topics: repo.topics || [],
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          pushed_at: repo.pushed_at,
          demo_url: repo.homepage,
          tech_stack: [repo.language, ...repo.topics].filter(Boolean),
          featured: repo.stargazers_count > 2 || repo.topics.includes('portfolio') || repo.topics.includes('featured')
        };

        await supabase
          .from('projects')
          .upsert(projectData, { onConflict: 'github_id' });
      }

      return filteredRepos.length;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sync GitHub projects';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { syncGitHubProjects, loading, error };
};