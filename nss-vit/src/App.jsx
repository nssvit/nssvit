import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {

  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleRightClick);
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  // For Contact
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
