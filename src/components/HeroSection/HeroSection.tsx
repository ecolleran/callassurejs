// HeroSection.tsx
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>A Call a Day, <br /> Even Far Away</h1>
          <p className={styles.heroText}>
            CallAssure provides automated, scheduled check-in calls and messages to ensure the well-being of your elderly loved ones.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/HIW-landing-visual.png" alt="screens of check-in call and message" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;