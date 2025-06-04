import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './Landing.module.css';

function Landing() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/RegisterPage?email=${encodeURIComponent(email)}`); // Navigate with email as URL parameter
  };

  return (
    <section className={styles.landingSection}>
      <div className={styles.landingContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.landingTitle}>Assuring peace of mind and independence.</h2>
          <p className={styles.landingText}>
            Help protect your loved ones with CallAssure’s automated check-ins and instant family alerts, fostering connection and proactive care.
          </p>
          <form className={styles.emailInput} onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email address"
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>
              Get Started
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src="/landing-visual.png" alt="Family and loved one connected" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}

export default Landing;