import React, { useState, useEffect } from 'react';

const e = React.createElement;

export default function Navbar({ activePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sticky header scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    const nextState = !drawerOpen;
    setDrawerOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleLinkClick = () => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  };

  const isSolid = scrolled || activePage !== 'home';

  return e(React.Fragment, null,
    // Header Bar
    e('header', { 
      className: `navbar-header ${isSolid ? 'scrolled' : ''}`, 
      id: 'main-header' 
    },
      e('div', { className: 'nav-container' },
        // Logo block
        e('a', { 
          href: '#home', 
          className: 'nav-logo',
          onClick: handleLinkClick
        },
          e('div', { className: 'logo-icon-wrapper' },
            e('img', { 
              src: './images/logo.jpeg', 
              alt: 'Vijay Solar Power Logo', 
              className: 'logo-img-src' 
            })
          ),
          e('div', { className: 'logo-text' },
            e('span', { className: 'logo-title' }, 'VIJAY'),
            e('span', { className: 'logo-subtitle' }, 'SOLAR POWER')
          )
        ),

        // Desktop nav links
        e('nav', { className: 'nav-menu' },
          e('ul', { className: 'nav-list' },
            ['home', 'services', 'about', 'contact'].map(link => {
              const label = link === 'about' ? 'About Us' : link === 'contact' ? 'Contact Us' : link.charAt(0).toUpperCase() + link.slice(1);
              return e('li', { key: link, className: 'nav-item' },
                e('a', {
                  href: `#${link}`,
                  className: `nav-link ${activePage === link ? 'active' : ''}`,
                  onClick: handleLinkClick
                }, label)
              );
            })
          )
        ),

        // CTA
        e('div', { className: 'nav-cta-wrapper' },
          e('a', { 
            href: '#contact', 
            className: 'btn btn-primary btn-nav',
            onClick: handleLinkClick
          }, 'Get Consultation')
        ),

        // Mobile hamburger toggle
        e('button', {
          className: `hamburger-btn ${drawerOpen ? 'active' : ''}`,
          onClick: toggleDrawer,
          'aria-label': 'Toggle Navigation Menu'
        },
          e('span', { className: 'hamburger-bar' }),
          e('span', { className: 'hamburger-bar' }),
          e('span', { className: 'hamburger-bar' })
        )
      )
    ),

    // Mobile nav drawer
    e('div', { className: `mobile-nav-drawer ${drawerOpen ? 'active' : ''}` },
      e('ul', { className: 'mobile-nav-list' },
        ['home', 'services', 'about', 'contact'].map(link => {
          const label = link === 'about' ? 'About Us' : link === 'contact' ? 'Contact Us' : link.charAt(0).toUpperCase() + link.slice(1);
          return e('li', { key: `mob-${link}` },
            e('a', {
              href: `#${link}`,
              className: `mobile-nav-link ${activePage === link ? 'active' : ''}`,
              onClick: handleLinkClick
            }, label)
          );
        }),
        e('li', null,
          e('a', { 
            href: '#contact', 
            className: 'btn btn-primary mobile-drawer-btn',
            onClick: handleLinkClick
          }, 'Get Consultation')
        )
      )
    )
  );
}
