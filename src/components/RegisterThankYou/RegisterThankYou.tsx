import { Link } from 'react-router-dom';
import styles from './RegisterThankYou.module.css';

function RegisterThankYou() {
  return (
    <div className={styles.thankYouContainer}>
      <h2 className={styles.title}>Registration Successful!</h2>
        <div className={styles.formContainer}>
          <h2 className={styles.subtitle}>Thank you for registering with CallAssure. You will now recieve check-in texts according to your preferences.</h2>
          <p>You have successfully set up your check-in time. If you have any questions or would like to change anything about your check-in, <Link to="/ContactPage" className={styles.navLink}>please contact us here.</Link></p>
          <p>Otherwise, <Link to="/HomePage" className={styles.navLink}>click here to return to our home webpage.</Link></p>
        </div>
    </div>
  );
};

export default RegisterThankYou;