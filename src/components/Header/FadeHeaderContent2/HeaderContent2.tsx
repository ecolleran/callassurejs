import { Link } from 'react-router-dom';
import styles from './HeaderContent2.module.css';

function HeaderContentMinimized() {
  return (
    <div className={styles.minimized}>
      <Link to="/HowItWorksPage" className={styles.hamburgerLink}>
        <img src="/white-hamburger.png" alt="white hamburger menu icon" className={styles.hamburger} />
      </Link>
    </div>
  );
}

export default HeaderContentMinimized