// Footer.tsx
import SocialIcons from '../SocialIcons/SocialIcons';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <a href="/pricing" className={styles.footerLink}>Pricing</a>
        <a href="/login" className={styles.footerLink}>Login</a>
        <a href="/faqs" className={styles.footerLink}>FAQs</a>
        <a href="/terms" className={styles.footerLink}>Terms & Conditions</a>
        <a href="/help" className={styles.footerLink}>Help</a>
        <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
      </nav>
      <SocialIcons />
      <p className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} CallAssure. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
