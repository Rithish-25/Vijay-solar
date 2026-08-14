import React from 'react';

const e = React.createElement;

export default function WhyChooseUs() {
  const reasonsData = [
    {
      icon: 'fa-award',
      title: 'Quality Solar PV Systems',
      desc: 'We use premium Tier-1 solar panels and rigorous mounting processes to ensure maximum energy yield and structural integrity.'
    },
    {
      icon: 'fa-user-gear',
      title: 'Experienced Engineers',
      desc: 'Certified energy engineers, PV technicians, and grid consultants handling your setup from start to finish.'
    },
    {
      icon: 'fa-calendar-check',
      title: 'On-Time Grid Tie-in',
      desc: 'Strict timeline management and milestone tracking to get your solar setup fully installed and activated on time.'
    },
    {
      icon: 'fa-handshake',
      title: 'Transparent ROI',
      desc: 'No hidden charges. Clear cost estimates, expected energy output modeling, and honest payback-period projections.'
    }
  ];

  return e('section', { className: 'why-choose-us-section' },
    e('div', { className: 'section-container' },
      e('div', { className: 'section-header scroll-reveal' },
        e('span', { className: 'section-tagline' }, 'Why Us'),
        e('h2', { className: 'section-title' }, 'Why Choose Vijay Solar Power'),
        e('div', { className: 'section-underline' })
      ),

      e('div', { className: 'why-us-grid' },
        // Left Column: Reasons List
        e('div', { className: 'why-us-reasons scroll-reveal' },
          reasonsData.map((item, idx) => 
            e('div', { key: idx, className: 'reason-card' },
              e('div', { className: 'reason-icon-box' },
                e('i', { className: `fa-solid ${item.icon}` })
              ),
              e('div', { className: 'reason-text' },
                e('h3', null, item.title),
                e('p', null, item.desc)
              )
            )
          )
        ),

        // Right Column: Badge Graphic
        e('div', { className: 'why-us-visual scroll-reveal' },
          e('div', { className: 'solar-badge-graphic' },
            e('div', { className: 'badge-ring' },
              e('div', { className: 'badge-center' },
                e('i', { className: 'fa-solid fa-circle-check' }),
                e('span', null, 'SAFETY FIRST')
              )
            ),
            e('div', { className: 'badge-bullet-list' },
              [
                'ISO 9001:2015 Certified Standards',
                'Zero Incident Health & Safety Code',
                'Tier 1 Solar Panels & Components Only'
              ].map((bullet, bIdx) => 
                e('div', { key: bIdx, className: 'bullet-item' },
                  e('i', { className: 'fa-solid fa-check' }),
                  ` ${bullet}`
                )
              )
            )
          )
        )
      )
    )
  );
}
