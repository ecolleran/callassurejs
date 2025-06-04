// App.tsx
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Header from './components/Headers/PlainHeader/Header.tsx';
import FadeHeader from './components/Headers/FadeHeader/FadeHeader.tsx';
import StoryPage from './pages/StoryPage.tsx';
import HowItWorksPage from './pages/HowItWorksPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.tsx';
import SetCheckInPage from "./pages/SetCheckInPage/SetCheckInPage.tsx";
import RegisterThankYouPage from "./pages/RegisterThankYouPage/RegisterThankYouPage.tsx";
import MenuPage from "./pages/MenuPage/MenuPage.tsx";
import DashboardMainPage from "./pages/DashboardMainPage/DashboardMainPage.tsx";
import './App.css';

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const previousLocation = useRef<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openMenu = () => {
    previousLocation.current = pathname;
    setIsMenuOpen(true);
    navigate('/MenuPage');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    const targetPath = previousLocation.current || '/';
    previousLocation.current = null; // Reset after navigating
    navigate(targetPath);
  };

  useEffect(() => {
    // If we navigate away from /MenuPage, close the menu state
    if (pathname !== '/MenuPage') {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  let headerComponent = <></>;

  if (pathname === '/') {
    headerComponent = <FadeHeader onOpenMenu={openMenu} isMenuOpen={isMenuOpen} />;
  } else if (
    pathname === '/HowItWorksPage' ||
    pathname === '/StoryPage' ||
    pathname === '/ContactPage'
  ) {
    headerComponent = <Header onOpenMenu={openMenu} isMenuOpen={isMenuOpen} />;
  }

  return (
    <>
      {headerComponent}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HowItWorksPage" element={<HowItWorksPage />} />
        <Route path="/StoryPage" element={<StoryPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/SetCheckInPage" element={<SetCheckInPage />} />
        <Route path="/RegisterThankYouPage" element={<RegisterThankYouPage />} />
        <Route path="/MenuPage" element={<MenuPage isOpen={isMenuOpen} onClose={closeMenu} />} />
        <Route path="/dashboard" element={<DashboardMainPage />} />
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