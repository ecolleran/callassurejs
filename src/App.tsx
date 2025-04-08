// App.tsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Import useLocation
import HomePage from './pages/HomePage.tsx'; // Replace with your homepage
import Header from './components/Header/Header.tsx';
import FadeHeader from './components/FadeHeader/FadeHeader.tsx';
import StoryPage from './pages/StoryPage.tsx';
import HowItWorksPage from './pages/HowItWorksPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.tsx';
import SetCheckInPage from "./pages/SetCheckInPage/SetCheckInPage.tsx";
import RegisterThankYouPage from "./pages/RegisterThankYouPage/RegisterThankYouPage.tsx";
import './App.css';

function App() {

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  let headerComponent = <></>;

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
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/HowItWorksPage" element={<HowItWorksPage />} />
        <Route path="/StoryPage" element={<StoryPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/SetCheckInPage" element={<SetCheckInPage />} />
        <Route path="/RegisterThankYouPage" element={<RegisterThankYouPage />} />
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