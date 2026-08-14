import React from 'react';

const e = React.createElement;

export default function Process() {
  const stepsData = [
    { num: '01', title: 'Consultation', desc: 'We discuss your energy goals, average monthly bills, and property solar potential.' },
    { num: '02', title: 'Site Survey', desc: 'Detailed structural checks, roof orientation, and shading analysis to optimize placement.' },
    { num: '03', title: 'Design & PV Modeling', desc: 'Custom PV array layouts, electrical modeling, and component selections.' },
    { num: '04', title: 'Permitting & Subsidy', desc: 'Managing utility net-metering applications and government subsidy approvals.' },
    { num: '05', title: 'Installation & Testing', desc: 'Professional panel mounting, inverter wiring, and electrical synchronization.' },
    { num: '06', title: 'Grid Commissioning', desc: 'System activation, final safety inspections, and performance monitoring setup.' }
  ];

  return e('section', { className: 'process-section' },
    e('div', { className: 'section-container' },
      e('div', { className: 'section-header scroll-reveal' },
        e('span', { className: 'section-tagline' }, 'How We Work'),
        e('h2', { className: 'section-title' }, 'Our Project Execution Process'),
        e('div', { className: 'section-underline' }),
        e('p', { className: 'section-subtitle' }, 'We follow a structured 6-step workflow to ensure a smooth, worry-free transition to clean solar energy.')
      ),

      e('div', { className: 'process-timeline scroll-reveal' },
        stepsData.map((step, idx) => 
          e('div', { key: idx, className: 'process-step' },
            e('div', { className: 'step-number' }, step.num),
            e('div', { className: 'step-content' },
              e('h3', null, step.title),
              e('p', null, step.desc)
            )
          )
        )
      )
    )
  );
}
