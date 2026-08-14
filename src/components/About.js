import React, { useState, useEffect, useRef } from 'react';

const e = React.createElement;

// Counter sub-component to animate numeric stats using React lifecycle hooks
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let hasRun = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;
          let startTime = null;
          const duration = 1500;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress); // easeOutQuad
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return e('span', { ref: elementRef }, count);
}

export default function About() {
  return e('div', { className: 'about-page-wrapper' },
    // 1. About Hero Section
    e('section', { className: 'about-hero' },
      e('div', { className: 'about-hero-container' },
        e('div', { className: 'about-hero-content' },
          e('span', { className: 'about-hero-title' }, 'About Us'),
          e('h1', { className: 'about-hero-heading' },
            'Powering Trust. ',
            e('span', { className: 'text-highlight-green' }, 'Sustaining What Matters.')
          ),
          e('div', { className: 'hero-bar-divider' }),
          e('p', { className: 'about-hero-text' },
            'We are a team of experienced professionals committed to delivering high-quality solar power installations and sustainable energy solutions with honesty, reliability, and lasting results.'
          )
        ),
        e('div', { className: 'about-hero-visual' },
          e('div', { className: 'hero-visual-bg-circle' }),
          e('img', {
            src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
            alt: 'Vijay Solar Power Engineers',
            className: 'about-hero-img'
          })
        )
      )
    ),

    // 2. Our Story Section
    e('section', { className: 'about-story-section' },
      e('div', { className: 'about-story-container' },
        e('div', { className: 'about-story-content' },
          e('h2', { className: 'story-section-title' }, 'Our Story'),
          e('p', { className: 'story-p' },
            'Founded in 2008, Vijay Solar Power began with a simple mission: to protect Indian homes and businesses from rising energy costs and power a sustainable tomorrow. What started as a small team of dedicated technicians has grown into one of the region\'s most trusted solar energy installers.'
          ),
          e('p', { className: 'story-p' },
            'Over the years, we have successfully completed hundreds of projects ranging from individual residential rooftop installations to large-scale industrial arrays for manufacturing plants and warehouses. Our expertise spans every aspect of clean energy setup—from feasibility analysis and design to utility net-metering synchronization and battery backups.'
          ),
          e('p', { className: 'story-p' },
            'We specialize in rooftop PV solar, off-grid battery systems, hybrid grid-tied setups, and comprehensive panel maintenance. Our commitment to using only premium Tier-1 components and employing trained, experienced engineers has earned us the trust of homeowners, builders, architects, and facility managers across the country.'
          ),
          e('p', { className: 'story-p' },
            'Today, Vijay Solar Power continues to set the standard for quality, reliability, and client satisfaction in the renewable energy sector. We remain committed to our founding principles: honest assessments, transparent pricing, superior workmanship, and lasting results.'
          )
        ),
        e('div', { className: 'about-story-visual' },
          e('div', { className: 'story-card-container' },
            e('div', { className: 'story-main-card' },
              e('div', { className: 'story-card-icon-wrapper' },
                e('i', { className: 'fa-solid fa-solar-panel' })
              ),
              e('div', { className: 'story-main-stat' },
                e(Counter, { target: 15 }),
                e('span', { className: 'story-plus' }, '+')
              ),
              e('div', { className: 'story-main-label' }, 'Years of Excellence'),
              
              e('div', { className: 'story-divider-line' }),

              e('div', { className: 'story-stats-grid' },
                e('div', { className: 'story-grid-item' },
                  e('div', { className: 'story-grid-num' },
                    e(Counter, { target: 1200 }),
                    e('span', null, '+')
                  ),
                  e('div', { className: 'story-grid-label' }, 'Projects')
                ),
                e('div', { className: 'story-grid-item' },
                  e('div', { className: 'story-grid-num' },
                    e(Counter, { target: 1000 }),
                    e('span', null, '+')
                  ),
                  e('div', { className: 'story-grid-label' }, 'Clients')
                ),
                e('div', { className: 'story-grid-item' },
                  e('div', { className: 'story-grid-num' },
                    e(Counter, { target: 10 }),
                    e('span', null, '+')
                  ),
                  e('div', { className: 'story-grid-label' }, 'MW Capacity')
                )
              )
            ),
            e('div', { className: 'story-floating-badge' },
              e('i', { className: 'fa-solid fa-award' })
            )
          )
        )
      )
    ),

    // 3. Our Mission & Vision
    e('section', { className: 'about-mv-section' },
      e('div', { className: 'about-mv-container' },
        e('div', { className: 'mv-card mission-card' },
          e('div', { className: 'mv-icon-box bg-green' },
            e('i', { className: 'fa-solid fa-circle-dot' })
          ),
          e('h3', { className: 'mv-card-title' }, 'Our Mission'),
          e('p', { className: 'mv-card-text' },
            'To deliver world-class solar and energy storage solutions that safeguard our clients\' budgets and the planet. We strive to reduce carbon footprints, maximize energy savings, and promote energy independence through innovation, integrity, and impeccable craftsmanship.'
          )
        ),
        e('div', { className: 'mv-card vision-card' },
          e('div', { className: 'mv-icon-box bg-light-green' },
            e('i', { className: 'fa-solid fa-eye' })
          ),
          e('h3', { className: 'mv-card-title' }, 'Our Vision'),
          e('p', { className: 'mv-card-text' },
            'To become India\'s most trusted and respected solar energy solutions provider, recognized for technical excellence, sustainable practices, and unwavering client commitment. We envision a future where every rooftop in India generates clean, renewable power.'
          )
        )
      )
    ),

    // 4. Our Core Values
    e('section', { className: 'about-values-section' },
      e('div', { className: 'about-values-container' },
        e('h2', { className: 'values-section-title' }, 'Our Core Values'),
        e('p', { className: 'values-section-subtitle' },
          'The principles that guide every decision we make and every project we undertake.'
        ),
        e('div', { className: 'values-grid' },
          [
            { icon: 'fa-heart', title: 'Integrity', desc: 'Honest assessments, clear payback calculations, and transparent pricing on every solar project.' },
            { icon: 'fa-certificate', title: 'Excellence', desc: 'We never compromise on the quality of our Tier-1 panels, mounting hardware, or wiring standards.' },
            { icon: 'fa-users', title: 'Customer First', desc: 'Your long-term energy savings and system performance are the ultimate measures of our success.' },
            { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Continuously adopting the latest PV panel technologies, high-efficiency inverters, and smart monitoring systems.' }
          ].map((val, idx) =>
            e('div', { key: idx, className: 'value-card' },
              e('div', { className: 'value-card-icon-wrapper' },
                e('i', { className: `fa-solid ${val.icon}` })
              ),
              e('h3', { className: 'value-card-title' }, val.title),
              e('p', { className: 'value-card-text' }, val.desc)
            )
          )
        )
      )
    ),

    // 5. Why Clients Trust Us
    e('section', { className: 'about-trust-section' },
      e('div', { className: 'about-trust-container' },
        e('h2', { className: 'trust-section-title' }, 'Why Clients Trust Us'),
        e('p', { className: 'trust-section-subtitle' },
          'Five reasons why hundreds of property owners and builders choose Vijay Solar Power.'
        ),
        e('div', { className: 'trust-grid' },
          [
            { icon: 'fa-users-gear', title: 'Experienced Team', desc: 'Our technicians have 10+ years of hands-on experience in solar design, roof-load engineering, and electrical integration.' },
            { icon: 'fa-solar-panel', title: 'Advanced Materials', desc: 'We source premium-grade Tier-1 solar panels, smart inverters, and durable mounting structures from leading global manufacturers.' },
            { icon: 'fa-microchip', title: 'Latest Techniques', desc: 'From 3D shading analysis to smart cloud-based performance monitoring, we leverage advanced tech for maximum yield.' },
            { icon: 'fa-indian-rupee-sign', title: 'Affordable Pricing', desc: 'Premium quality doesn\'t mean premium prices. We offer competitive rates with no hidden costs and maximize subsidy benefits.' },
            { icon: 'fa-circle-check', title: 'Reliable Service', desc: 'On-time installations, rapid net-metering approvals, and complete warranty support—we stand by our systems long after handover.' }
          ].map((trust, idx) =>
            e('div', { key: idx, className: 'trust-card' },
              e('div', { className: 'trust-card-icon-wrapper' },
                e('i', { className: `fa-solid ${trust.icon}` })
              ),
              e('div', { className: 'trust-card-body' },
                e('h3', { className: 'trust-card-title' }, trust.title),
                e('p', { className: 'trust-card-text' }, trust.desc)
              )
            )
          )
        )
      )
    ),
    // 6. Ready to Work With Us? (CTA Section)
    e('section', { className: 'about-cta-section' },
      e('div', { className: 'about-cta-container' },
        e('div', { className: 'cta-bg-shape' }),
        e('h2', { className: 'about-cta-title' }, 'Ready to Work With Us?'),
        e('p', { className: 'about-cta-subtitle' },
          'Let\'s discuss your project and find the perfect solar energy solution.'
        ),
        e('a', { href: '#contact', className: 'btn btn-primary cta-btn' },
          'Get In Touch ',
          e('i', { className: 'fa-solid fa-arrow-right' })
        )
      )
    )
  );
}
