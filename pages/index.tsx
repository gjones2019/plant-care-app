import type { NextPage } from 'next';
import Main from './main';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.centeredContent}>
        <h1 className={styles.heading}>Welcome to My Plant Care App</h1>
        <Main />
      </div>
    </div>
  );
};

export default Home;
