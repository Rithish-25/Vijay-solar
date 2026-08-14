import React from 'react';

const e = React.createElement;

export default function Hero() {
  return e('section', { className: 'hero-section', id: 'home' },
    e('div', { className: 'hero-bg-overlay' }),
    e('div', { className: 'hero-container' },
      e('div', { className: 'hero-content scroll-reveal' },
        e('span', { className: 'hero-badge' },
          e('i', { className: 'fa-solid fa-solar-panel' }),
          ' Powering A Sustainable Future'
        ),
        e('h1', { className: 'hero-heading' },
          'Powering A ',
          e('span', { className: 'highlight-green' }, 'Brighter Tomorrow')
        ),
        e('p', { className: 'hero-lead' },
          'Vijay Solar Power provides premium, state-of-the-art solar installations and sustainable energy solutions to power your residential, commercial, and industrial properties.'
        ),
        e('div', { className: 'hero-ctas' },
          e('a', { href: '#services', className: 'btn btn-primary btn-large' }, 'Explore Services'),
          e('a', { href: '#contact', className: 'btn btn-secondary btn-large' }, 'Contact Us Today')
        )
      )
    )
  );
}
