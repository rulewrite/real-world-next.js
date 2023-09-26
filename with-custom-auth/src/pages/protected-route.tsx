import { useAuth } from '@/lib/hooks/auth';
import { useRouter } from 'next/router';
import styles from '../styles/app.module.css';

export default function ProtectedRoute() {
  const router = useRouter();
  const { loading, error, loggedIn, user } = useAuth();

  if (!loading && !loggedIn) {
    router.push('/login');
  }

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
    });

    const data = await response.json();

    if (data.success) {
      router.push('/login');

      return;
    }

    throw new Error('Fail to logout');
  };

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p>An error occurred</p>}

      {loggedIn && (
        <>
          <h1>Protected Route: {user && user.name}</h1>
          <p>You can&apos;t see me if not logged-in!</p>
          <button onClick={() => handleLogout()}>logout</button>
        </>
      )}
    </div>
  );
}
