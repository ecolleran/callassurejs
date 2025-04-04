// CallToAction.tsx
import { Link } from 'react-router-dom';
import styles from './CallToAction.module.css';

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.content}>
        <h2 className={styles.title}>Ready to get started?</h2>
        <p className={styles.description}>
          Create an account instantly to get started or contact us to design a custom package for your business.
        </p>
        <div className={styles.buttons}>
          <Link to="/RegisterPage">
            <button className={styles.registerButton}>Register</button>
          </Link>
          <Link to="/ContactPage">
            <button className={styles.contactButton}>Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;