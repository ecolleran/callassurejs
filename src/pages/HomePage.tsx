// import FadeHeader from '../components/FadeHeader/FadeHeader.tsx';
import Landing from '../components/Landing/Landing';
import LandingGlobe from '../components/LandingGlobe/LandingGlobe';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footers/Footer/Footer';
import { Helmet } from 'react-helmet';
import { motion as m } from 'framer-motion';

function HomePage() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{duration: 1, ease: "easeOut"}}
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}
      >
      <Helmet>
        <title>CallAssure | Assuring Peace of Mind and Independence</title>
      </Helmet>
      <Landing />
      <LandingGlobe />
      <CallToAction />
      <Footer />
    </m.div>
  );
}

export default HomePage;