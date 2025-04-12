import { Link } from 'react-router-dom';
import styles from './MenuContent.module.css'; // Import the CSS Module

function MenuContent() {
  return (
    <div className={styles.menuContainer}>
      <Link to="/HowItWorksPage" className={styles.menuMain}>How It Works</Link>
      <Link to="/StoryPage" className={styles.menuMain}>Our Story</Link>
      <Link to="/ContentPage" className={styles.menuMain}>Contact Us</Link>
      <Link to="/LoginPage" className={styles.menuMain}>Login</Link>
      <Link to="/RegisterPage" className={styles.menuMain}>Register</Link>
    </div>
  );
}

export default MenuContent;