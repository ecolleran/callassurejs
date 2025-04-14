// pages/ContactPage/ContactPage.tsx
import ContactForm from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';
import { motion as m } from 'framer-motion';


function ContactPage() {


  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{duration: 0.8, ease: "easeOut"}}
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}
    >
      <Helmet>
        <title>Contact Us | CallAssure</title>
      </Helmet>
      <ContactForm />
      <Footer />
    </m.div>
  );
}

export default ContactPage;