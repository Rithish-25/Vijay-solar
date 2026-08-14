import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Highlights from './components/Highlights.js';
import Services from './components/Services.js';
import About from './components/About.js';
import WhyChooseUs from './components/WhyChooseUs.js';
import Process from './components/Process.js';
import Testimonials from './components/Testimonials.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import { initScrollReveals } from './utils/animations.js';

const e = React.createElement;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple and robust native hash router for separate pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home';
      
      if (['home', 'services', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        
        // Scroll back to the top of the new page
        window.scrollTo(0, 0);
        
        // Trigger scroll reveals for elements on the newly mounted page
        setTimeout(() => {
          initScrollReveals();
        }, 100);
      }
    };

    // Initialize router and scroll observers on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return e(React.Fragment, null,
    e(Navbar, { activePage: currentPage }),
    e('main', null,
      currentPage === 'home' && e(React.Fragment, null,
        e(Hero, null),
        e(Highlights, null),
        e(WhyChooseUs, null),
        e(Process, null),
        e(Testimonials, null)
      ),
      currentPage === 'services' && e(Services, null),
      currentPage === 'about' && e(About, null),
      currentPage === 'contact' && e(Contact, null)
    ),
    e(Footer, null)
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  e(React.StrictMode, null,
    e(App, null)
  )
);
