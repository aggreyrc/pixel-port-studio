import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredEmail?: string;
}

export const ProtectedRoute = ({ children, requiredEmail }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
      } else if (requiredEmail && user.email !== requiredEmail) {
        navigate('/'); // Redirect to home if not authorized
      }
    }
  }, [user, loading, navigate, requiredEmail]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (requiredEmail && user.email !== requiredEmail) {
    return null;
  }

  return <>{children}</>;
};