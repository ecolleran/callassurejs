// FadeHeader.tsx
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HeaderContentExpanded from '../FadeHeaderContent1/HeaderContent1';
import HeaderContentMinimized from '../FadeHeaderContent2/HeaderContent2';
import styles from './FadeHeader.module.css';

const Header: React.FC = () => {
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
          <img src="/white-logo.png" alt="White CallAssure Logo" className={styles.logo} />
        </Link>
        {isMobile ? <HeaderContentMinimized /> : <HeaderContentExpanded />}
      </div>
    </header>
  );
};

export default Header;