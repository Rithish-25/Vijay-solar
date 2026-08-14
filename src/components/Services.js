import React from 'react';

const e = React.createElement;

export default function Services() {
  const servicesData = [
    {
      category: 'Residential',
      className: 'residential-img',
      icon: 'fa-house-chimney',
      title: 'Residential Solar Systems',
      desc: 'Custom-designed rooftop solar systems for homes and villas, engineered to maximize your daily clean energy generation.'
    },
    {
      category: 'Commercial',
      className: 'commercial-img',
      icon: 'fa-building',
      title: 'Commercial & Industrial Solar',
      desc: 'Large-scale solar installations for commercial properties, warehouses, and offices to significantly cut operating costs.'
    },
    {
      category: 'Featured',
      className: 'solar-img',
      icon: 'fa-solar-panel',
      title: 'Grid-Tied Solar Systems',
      desc: 'Maximize savings with solar PV systems connected to the utility grid, featuring seamless net-metering integration.',
      isHighlighted: true
    },
    {
      category: 'Storage',
      className: 'building-img',
      icon: 'fa-battery-three-quarters',
      title: 'Off-Grid & Hybrid Systems',
      desc: 'Enjoy reliable backup power with high-capacity hybrid solar systems combined with advanced battery storage.'
    },
    {
      category: 'Maintenance',
      className: 'renovation-img',
      icon: 'fa-screwdriver-wrench',
      title: 'Solar Maintenance & Repair',
      desc: 'Routine solar panel cleaning, structural inspection, inverter troubleshooting, and performance tuning to keep efficiency at 100%.'
    },
    {
      category: 'Consulting',
      className: 'management-img',
      icon: 'fa-file-invoice-dollar',
      title: 'Net Metering & Subsidy Support',
      desc: 'End-to-end management of utility net-metering connections, government solar subsidy approvals, and licenses.'
    }
  ];

  return e('section', { className: 'services-section', id: 'services' },
    e('div', { className: 'section-container' },
      // Header
      e('div', { className: 'section-header scroll-reveal' },
        e('span', { className: 'section-tagline' }, 'What We Do'),
        e('h2', { className: 'section-title' }, 'Our Expert Services'),
        e('div', { className: 'section-underline' }),
        e('p', { className: 'section-subtitle' },
          'From custom rooftop residential systems to large-scale commercial grid-tied arrays, we provide end-to-end solar solutions for residential, commercial, and industrial clients.'
        )
      ),

      // Grid
      e('div', { className: 'services-grid' },
        servicesData.map((item, idx) => 
          e('div', { 
            key: idx, 
            className: `service-card scroll-reveal ${item.isHighlighted ? 'highlight-card-border' : ''}` 
          },
            e('div', { className: `service-image-placeholder ${item.className}` },
              e('div', { className: 'service-overlay' },
                e('span', { className: 'service-category' }, item.category)
              )
            ),
            e('div', { className: 'service-body' },
              e('div', { className: `service-icon ${item.isHighlighted ? 'featured-icon' : ''}` },
                e('i', { className: `fa-solid ${item.icon}` })
              ),
              e('h3', null, item.title),
              e('p', null, item.desc)
            )
          )
        )
      )
    )
  );
}
