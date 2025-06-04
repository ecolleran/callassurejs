// Login.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setRememberMe(e.target.checked);
  };

  const handleSignIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission
    // Add your sign-in logic here
    console.log('Sign In:', { email, password, rememberMe });
  };

  return (
    <section className={styles.loginSection}>
        <div className={styles.loginFormContainer}>
          <h2 className={styles.title}>Sign into your account</h2>
          <form onSubmit={handleSignIn} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.passwordRow}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <Link to="/forgot-password" className={styles.forgotPassword}>
                  Forgot your password?
                </Link>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className={styles.checkbox}
              />
              <label htmlFor="rememberMe" className={styles.rememberMeLabel}>Remember me on this device</label>
            </div>
            <Link to="/dashboard">
              <button type="submit" className={styles.signInButton}>
                Sign In
              </button>
            </Link>
          </form>
          <div className={styles.createAccountBlock}>
            <div className={styles.createAccount}>
              New to CallAssure? <Link to="/RegisterPage">Create an account</Link>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Login;