import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1>Welcome to the CSS Modules example</h1>

      <button className={styles['button-default']}>defulat</button>
      <button className={styles['button-success']}>success</button>
      <button className={styles['button-danger']}>danger</button>
    </div>
  );
}
