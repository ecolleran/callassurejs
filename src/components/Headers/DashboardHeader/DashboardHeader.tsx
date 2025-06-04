// import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashboardHeader.module.css';

function DashboardHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src="/logo.png" alt="CallAssure Logo" className={styles.logo} />
        </Link>
        <div>
          <Link to="/HelpPage">
            <button className={styles.helpButton}>Help</button>
          </Link>
          <Link to="/RegisterPage">
            <button className={styles.profileButton}>Profile</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;