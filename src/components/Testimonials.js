import React from 'react';

const e = React.createElement;

export default function Testimonials() {
  const testimonialsData = [
    {
      stars: 5,
      quote: "Vijay Solar Power delivered our solar panel system setup on time. The installation looks seamless and has reduced our energy bills significantly. Exceptional energy output and craftsmanship.",
      author: "Aniket R.",
      info: "Homeowner, 5kW Rooftop System"
    },
    {
      stars: 5,
      quote: "Highly professional team. They managed the custom solar installation of our office warehouse complex. Transparent pricing, neat wiring, and zero delays. Highly recommended!",
      author: "Meera K.",
      info: "Director, Logistics Firm (150kW System)"
    }
  ];

  return e('section', { className: 'testimonials-section' },
    e('div', { className: 'section-container' },
      e('div', { className: 'section-header scroll-reveal' },
        e('span', { className: 'section-tagline' }, 'Testimonials'),
        e('h2', { className: 'section-title' }, 'Client Feedback'),
        e('div', { className: 'section-underline' }),
        e('p', { className: 'section-subtitle' }, 'Read what our clients say about our sustainable energy solutions.')
      ),

      e('div', { className: 'testimonials-grid scroll-reveal' },
        testimonialsData.map((item, idx) => 
          e('div', { key: idx, className: 'testimonial-card' },
            e('div', { className: 'stars' }, 
              Array.from({ length: item.stars }).map((_, sIdx) => 
                e('i', { key: sIdx, className: 'fa-solid fa-star' })
              )
            ),
            e('p', { className: 'quote' }, `"${item.quote}"`),
            e('div', { className: 'client-info' },
              e('strong', null, item.author),
              e('span', null, item.info)
            )
          )
        )
      ),

      e('p', { className: 'testimonials-disclosure' }, 
        '* Energy savings and performance metrics may vary based on site location, roof orientation, and weather conditions.'
      )
    )
  );
}
