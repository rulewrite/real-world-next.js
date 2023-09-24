import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import styles from '../styles/app.module.css';

async function handleLogin(email: string, password: string) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (data.success) {
    return;
  }

  throw new Error('Wrong email or password');
}

export default function Login() {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoginError(null);

    const { email, password } = event.currentTarget.elements as unknown as {
      email: { value: string };
      password: { value: string };
    };

    handleLogin(email.value, password.value)
      .then(() => {
        router.push('protected-route');
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className={styles.continaer}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>

        {loginError && <div className={styles.formError}>{loginError}</div>}
      </form>
    </div>
  );
}
