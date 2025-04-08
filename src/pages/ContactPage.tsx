// pages/ContactPage/ContactPage.tsx
import ContactForm from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';


function ContactPage() {


  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}>
      <Helmet>
        <title>Contact Us - CallAssure</title>
      </Helmet>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;