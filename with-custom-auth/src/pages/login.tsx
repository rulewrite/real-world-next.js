import { useState } from 'react';
import styles from '../styles/app.module.css';

export default function Login() {
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = () => {};

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
