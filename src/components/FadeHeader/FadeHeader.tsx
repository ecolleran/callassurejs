// FadeHeader.tsx
import { Link } from 'react-router-dom';
import styles from './FadeHeader.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src="/white-logo.png" alt="CallAssure Logo" className={styles.logo} />
          </Link>
          <nav className={styles.nav}>
            <Link to="/HowItWorksPage" className={styles.navLink}>How it Works</Link>
            <Link to="/StoryPage" className={styles.navLink}>Our Story</Link>
            <Link to="/ContactPage" className={styles.navLink}>Contact Us</Link>
          </nav>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/LoginPage" className={styles.loginButton}>Login</Link>
          <Link to="/RegisterPage">
            <button className={styles.registerButton}>Register</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;