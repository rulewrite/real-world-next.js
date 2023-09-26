import { useAuth } from '@/lib/hooks/auth';
import { useRouter } from 'next/router';
import styles from '../styles/app.module.css';

export default function ProtectedRoute() {
  const router = useRouter();
  const { loading, error, loggedIn, user } = useAuth();

  if (!loading && !loggedIn) {
    router.push('/login');
  }

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p>An error occurred</p>}

      {loggedIn && (
        <>
          <h1>Protected Route: {user && user.name}</h1>
          <p>You can&apos;t see me if not logged-in!</p>
        </>
      )}
    </div>
  );
}
