// pages/ContactPage/ContactPage.tsx
// import Header from '../components/Header/Header';
import ContactForm from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
// import styles from '../ContactPage.module.css';

function ContactPage() {
  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* <Header /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;