import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/button/button';
import { Link } from 'react-router-dom';
export function Home() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col space-y-4 self-center justify-center">
      <h1>Hello User!</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
