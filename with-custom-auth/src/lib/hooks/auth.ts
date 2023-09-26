import { useEffect, useState } from 'react';

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    id: string;
    name: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch('/api/get-session')
      .then((response) => response.json())
      .then((data) => {
        if (!data.loggedIn) {
          return;
        }

        setLoggedIn(true);
        setUser(data.user);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    user,
    loggedIn,
    loading,
    error,
  };
}
