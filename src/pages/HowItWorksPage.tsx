import HeroSection from '../components/HeroSection/HeroSection';
import StepsSection from '../components/StepsSection/StepsSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

function HowItWorksPage() {
  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}>
      <Helmet>
        <title>How It Works | CallAssure</title>
      </Helmet>
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default HowItWorksPage;