// StepsSection.tsx (No changes needed)
import styles from './StepsSection.module.css';

function StepsSection() {
  return (
    <section className={styles.stepsSection}>
      <div className={styles.stepsContainer}>
        <h2>Here's How It Works</h2>

        <div className={styles.step}>
          <div className={styles.stepNumber}></div>
            <div className={styles.stepContent}>
              <h3>Step 1: <br />Setup & Personalization</h3>
              <p>Families easily set up CallAssure by entering their loved one's phone number and preferred check-in times.</p>
            </div>
            <img src="/HIW step 1.png" alt="Laptop" />
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}></div>
            <div className={styles.stepContent}>
              <h3>Step 2: <br />Automated Check-in Calls & Messages</h3>
              <p>CallAssure automatically places scheduled check-in calls or texts at the chosen times.</p>
            </div>
            <img src="/HIW step 2.png" alt="Example Check-in text screen" />
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}></div>
            <div className={styles.stepContent}>
              <h3>Step 3: <br />Instant Family Alerts</h3>
              <p>If a check-in is missed, CallAssure immediately sends alerts to designated family members.</p>
            </div>
            <img src="/HIW step 3.png" alt="Example missed check-in text to family" />
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}></div>
          <div className={styles.stepContent}>
            <h3>Step 4:<br />Ongoing Support & Management</h3>
            <p>Families can manage settings, view call logs, and adjust preferences through a user-friendly online dashboard.</p>
          </div>
          <img src="/HIW step 4.png" alt="Laptop with dashboard" />
        </div>
      </div>
    </section>
  );
}

export default StepsSection;