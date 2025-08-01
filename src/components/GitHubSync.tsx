import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { useGitHubSync } from '@/hooks/useGitHubSync';
import { useToast } from '@/hooks/use-toast';

interface GitHubSyncProps {
  onSyncComplete?: () => void;
}

export const GitHubSync = ({ onSyncComplete }: GitHubSyncProps) => {
  const [username, setUsername] = useState('');
  const { syncGitHubProjects, loading, error } = useGitHubSync();
  const { toast } = useToast();

  const handleSync = async () => {
    if (!username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter a GitHub username",
        variant: "destructive",
      });
      return;
    }

    try {
      const count = await syncGitHubProjects(username.trim());
      toast({
        title: "Sync successful!",
        description: `Imported ${count} projects from GitHub`,
      });
      onSyncComplete?.();
    } catch (err) {
      toast({
        title: "Sync failed",
        description: err instanceof Error ? err.message : "Failed to sync projects",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Github className="h-5 w-5" />
          Sync GitHub Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <Button 
          onClick={handleSync} 
          disabled={loading || !username.trim()}
          className="w-full"
        >
          {loading ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Syncing...
            </>
          ) : (
            <>
              <Github className="h-4 w-4 mr-2" />
              Sync Projects
            </>
          )}
        </Button>

        {error && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  );
};