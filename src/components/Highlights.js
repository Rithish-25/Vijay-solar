import React from 'react';

const e = React.createElement;

export default function Highlights() {
  const highlightsData = [
    { icon: 'fa-indian-rupee-sign', title: 'Reduce Bills', desc: 'Maximize energy savings from day one' },
    { icon: 'fa-leaf', title: 'Clean & Green', desc: '100% clean, renewable solar energy' },
    { icon: 'fa-shield-halved', title: 'Reliable Setup', desc: 'Low maintenance & 25-year warranty' },
    { icon: 'fa-chart-line', title: 'High Return', desc: 'Increase property value & secure ROI' }
  ];

  return e('section', { className: 'highlights-bar' },
    e('div', { className: 'highlights-container' },
      highlightsData.map((item, index) => 
        e('div', { key: index, className: 'highlight-card scroll-reveal' },
          e('div', { className: 'highlight-icon-wrapper' },
            e('i', { className: `fa-solid ${item.icon}` })
          ),
          e('div', { className: 'highlight-info' },
            e('h3', null, item.title),
            e('p', null, item.desc)
          )
        )
      )
    )
  );
}
