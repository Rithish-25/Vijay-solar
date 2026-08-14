import React from 'react';

const e = React.createElement;

export default function Footer() {
  return e('footer', { className: 'footer-bar' },
    e('div', { className: 'footer-container' },
      // Column 1: Branding
      e('div', { className: 'footer-col brand-col' },
        e('div', { className: 'footer-logo' },
          e('div', { className: 'logo-icon-wrapper' },
            e('img', { 
              src: './images/logo.jpeg', 
              alt: 'Vijay Solar Power Logo', 
              className: 'logo-img-src' 
            })
          ),
          e('div', { className: 'logo-text' },
            e('span', { className: 'logo-title white-text' }, 'VIJAY'),
            e('span', { className: 'logo-subtitle text-green' }, 'SOLAR POWER')
          )
        ),
        e('p', { className: 'footer-tagline' },
          'Providing reliable and efficient clean solar energy solutions. Let\'s power a sustainable and brighter tomorrow together.'
        ),
        e('div', { className: 'social-links-placeholder' },
          [
            { icon: 'fa-facebook-f', label: 'Facebook' },
            { icon: 'fa-linkedin-in', label: 'LinkedIn' },
            { icon: 'fa-instagram', label: 'Instagram' }
          ].map((item, idx) => 
            e('a', { key: idx, href: '#', className: 'social-icon', 'aria-label': item.label },
              e('i', { className: `fa-brands ${item.icon}` })
            )
          )
        )
      ),

      // Column 2: Quick Links
      e('div', { className: 'footer-col Links-col' },
        e('h3', null, 'Quick Links'),
        e('ul', { className: 'footer-links' },
          [
            { href: '#home', label: 'Home' },
            { href: '#services', label: 'Services' },
            { href: '#about', label: 'About Us' },
            { href: '#contact', label: 'Contact Us' }
          ].map((link, idx) => 
            e('li', { key: idx },
              e('a', { href: link.href }, link.label)
            )
          )
        )
      ),

      // Column 3: Services Links
      e('div', { className: 'footer-col Links-col' },
        e('h3', null, 'Our Services'),
        e('ul', { className: 'footer-links' },
          [
            { href: '#services', label: 'Residential Solar Systems' },
            { href: '#services', label: 'Commercial & Industrial Solar' },
            { href: '#services', label: 'Grid-Tied Net Metering' },
            { href: '#services', label: 'Off-Grid & Battery Storage' },
            { href: '#services', label: 'Solar Maintenance & Repair' }
          ].map((link, idx) => 
            e('li', { key: idx },
              e('a', { href: link.href }, link.label)
            )
          )
        )
      ),

      // Column 4: Contact Info
      e('div', { className: 'footer-col contact-col' },
        e('h3', null, 'Contact Details'),
        e('ul', { className: 'footer-contact-details' },
          e('li', null, 
            e('i', { className: 'fa-solid fa-phone' }),
            ' +91 12345 67890'
          ),
          e('li', null, 
            e('i', { className: 'fa-solid fa-envelope' }),
            ' info@vijaysolarpower.com'
          ),
          e('li', null, 
            e('i', { className: 'fa-solid fa-location-dot' }),
            ' Mumbai, Maharashtra, India'
          )
        )
      )
    ),

    e('div', { className: 'footer-bottom' },
      e('p', null, '© 2026 Vijay Solar Power. All Rights Reserved.')
    )
  );
}
