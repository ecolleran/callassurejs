import styles from './Register.module.css';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { useState } from 'react';

const Register: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailFromUrl = searchParams.get('email') || ''; // Get email from URL, or empty string if not present
  const [email, setEmail] = useState(emailFromUrl);

  return (
    <div className={styles.signupContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Get setup with CallAssure</h2>
        <p className={styles.description}>
          <strong className={styles.textContentBold}>Configure your account type</strong><br />
          If check-ins will be sent to you, you are a Loved One. If you are someone who wants to be updated if check-ins are missed, you are a Family Member.
        </p>
        <p className={styles.description}>
          <strong className={styles.textContentBold}>Start sending check-ins today</strong><br />
          Setup takes only 5 minutes and two people.
        </p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Create your CallAssure account</h3>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className={styles.inputField} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="accountType">Account Type</label>
              <select id="accountType" className={styles.inputField}>
                <option value="family">Family</option>
                <option value="lovedOne">Loved One</option>
              </select>
            </div>
            <button type="submit" className={styles.submitButton}>Create account</button>
          </form>
          <div className={styles.createAccountBlock}>
            <div className={styles.createAccount}>
              Already have an account? <Link to="/LoginPage">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;