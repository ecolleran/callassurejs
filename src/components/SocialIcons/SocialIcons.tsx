import styles from  './SocialIcons.module.css';

function SocialIcons() {
  return (
    <div className={styles.socialIconsContainer}>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIconLink}
      >
        <img src="/linkedin.png" alt="LinkedIn" className={styles.socialIconImg} />
      </a>
      <img src="/logo.png" alt="CallAssure Logo" className={styles.socialIconImg} />
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIconLink}
      >
        <img src="/facebook.png" alt="Facebook" className={styles.socialIconImg} />
      </a>
    </div>
  );
}

export default SocialIcons;