// import Header from '../components/Header/Header';
import StorySection from '../components/StorySection/StorySection';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

function StoryPage() {
  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}>
      <Helmet>
        <title>Our Story - CallAssure</title>
      </Helmet>
      <StorySection />
      <Footer />
    </div>
  );
}

export default StoryPage;