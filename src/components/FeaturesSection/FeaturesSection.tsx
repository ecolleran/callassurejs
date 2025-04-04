// FeaturesSection.tsx
import styles from './FeaturesSection.module.css';

function FeaturesSection() {
  const features = [
    {
      feature: 'yes',
      title: 'Instant Family Alerts',
      description: 'Provides real-time notifications.',
    },
    {
      feature: 'yes',
      title: 'Automated Scheduled Calls',
      description: 'Ensures consistent check-ins.',
    },
    {
      feature: 'yes',
      title: 'User-Friendly Dashboard',
      description: 'Simplifies management.',
    },
    {
      feature: 'yes',
      title: 'Customizable Response Options',
      description: 'Adapts to individual needs.',
    },
    {
      feature: 'yes',
      title: 'Personalized Call Scheduling',
      description: 'Supports individual routines.',
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.mainTitle}>Key Features</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;