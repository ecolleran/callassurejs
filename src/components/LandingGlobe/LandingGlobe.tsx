import styles from './LandingGlobe.module.css';

function LandingGlobe() {
  return (
    <section className={styles.globeSection}>
      <div className={styles.container}>
          <div className={styles.leftSection}>
            <div className={styles.textContainer}>
              <div className={styles.textBlock}>
                <h3 className={styles.label}>For Loved Ones</h3>
                <p className={styles.text}>Stay independent at home, with your family connected and at ease</p>
              </div>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textBlock}>
                <h3 className={styles.label}>For Families</h3>
                <p className={styles.text}>Support your loved one's well-being, knowing they're safe and secure</p>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
              <img src="/globe.png" alt="Families connected around the globe visual" className={styles.globeImg} />
          </div>
      </div>
    </section>
  );
}

export default LandingGlobe;
