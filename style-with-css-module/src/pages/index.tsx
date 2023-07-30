import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Welcome to the CSS Modules example</h1>
      <div>
        <p className="highlight">hello</p>
        <p className="highlight">hello</p>
        <p className="highlight">hello</p>
        <p className="highlight">hello</p>
      </div>
    </div>
  );
}
