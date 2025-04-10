import { Link } from 'react-router-dom';
import styles from './HeaderContent1.module.css';

function HeaderContentExpanded() {
  return (
    <div className={styles.expanded}>
      <nav className={styles.nav}>
        <Link to="/HowItWorksPage" className={styles.navLink}>How it Works</Link>
        <Link to="/StoryPage" className={styles.navLink}>Our Story</Link>
        <Link to="/ContactPage" className={styles.navLink}>Contact Us</Link>
      </nav>
      <div className={styles.buttonContainer}>
        <Link to="/LoginPage" className={styles.loginButton}>Login</Link>
        <Link to="/RegisterPage">
          <button className={styles.registerButton}>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderContentExpanded