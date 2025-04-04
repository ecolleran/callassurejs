// App.tsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import HomePage from './pages/HomePage.tsx'; // Replace with your homepage
import Header from './components/Header/Header.tsx';
import FadeHeader from './components/FadeHeader/FadeHeader.tsx';
import StoryPage from './pages/StoryPage.tsx';
import HowItWorksPage from './pages/HowItWorksPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.tsx';
import './App.css';

function App() {
  // const location = useLocation(); // Get the current location
  // const isHomePage = location.pathname === '/HomePage'; // Check if it's the homepage

  const location = useLocation();
  const pathname = location.pathname;

  let headerComponent = null; // Initialize to null (no header)

  if (pathname === '/HomePage') {
    headerComponent = <FadeHeader />;
  } else if (
    pathname === '/HowItWorksPage' ||
    pathname === '/StoryPage' ||
    pathname === '/ContactPage'
  ) {
    headerComponent = <Header />;
  }

  return (
    <>
      {headerComponent}
      {/* {isHomePage ? <FadeHeader /> : <Header />} Conditional rendering */}
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/HowItWorksPage" element={<HowItWorksPage />} />
        <Route path="/StoryPage" element={<StoryPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;