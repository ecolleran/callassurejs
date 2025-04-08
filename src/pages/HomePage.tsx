// import FadeHeader from '../components/FadeHeader/FadeHeader.tsx';
import Landing from '../components/Landing/Landing';
import LandingGlobe from '../components/LandingGlobe/LandingGlobe';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}>
      <Helmet>
        <title>CallAssure | Assuring Peace of Mind and Independence</title>
      </Helmet>
      <Landing />
      <LandingGlobe />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default HomePage;