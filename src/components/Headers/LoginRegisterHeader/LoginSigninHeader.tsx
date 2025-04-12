// import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginSigninHeader.module.css';

function LoginSigninHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src="/logo.png" alt="CallAssure Logo" className={styles.logo} />
        </Link>
      </div>
    </header>
  );
}

export default LoginSigninHeader;