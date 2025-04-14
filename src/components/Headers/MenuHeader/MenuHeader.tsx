import { Link } from 'react-router-dom';
import styles from './MenuHeader.module.css'; // Import the CSS Module

interface MenuHeaderProps {
  onCloseMenu: () => void;
}

function MenuHeader({ onCloseMenu }: MenuHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src="/logo.png" alt="CallAssure Logo" className={styles.logo} />
        </Link>
        <img src="/x-button.png" alt="Close Menu" className={styles.exitButton} onClick={onCloseMenu}/>
      </div>
    </header>
  );
}

export default MenuHeader;