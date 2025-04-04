import { Link } from 'react-router-dom';
import styles from './LoginRegisterFooter.module.css'; // Import the CSS Module

function LoginRegisterFooter() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <Link to="/HomePage" className={styles.footerCopyright}>&copy; CallAssure</Link>
        <a href="/terms" className={styles.footerLink}>Privacy & Terms</a>
      </nav>
    </footer>
  );
}

export default LoginRegisterFooter;