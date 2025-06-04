import HeroSection from '../components/HeroSection/HeroSection';
import StepsSection from '../components/StepsSection/StepsSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footers/Footer/Footer';
import { Helmet } from 'react-helmet';
import { motion as m } from 'framer-motion';


function HowItWorksPage() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{duration: 0.8, ease: "easeOut"}}
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}
      >
      <Helmet>
        <title>How It Works | CallAssure</title>
      </Helmet>
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </m.div>
  );
}

export default HowItWorksPage;