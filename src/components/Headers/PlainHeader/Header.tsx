// export default Header;
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HeaderContentExpanded from '../PlainHeaderContent1/HeaderContent1';
import HeaderContentMinimized from '../PlainHeaderContent2/HeaderContent2';
import styles from './Header.module.css'; // Import the CSS Module

interface HeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900); // Adjust breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // Update on window resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src="/logo.png" alt="CallAssure Logo" className={styles.logo} />
        </Link>
        {isMobile ? <HeaderContentMinimized onOpenMenu={onOpenMenu} /> : <HeaderContentExpanded />}
        {/* We don't need the exit button here in the main header */}
      </div>
    </header>
  );
};

export default Header;