/**
 * Animations Utility
 * Manages scroll reveal effects by adding CSS transition classes when elements enter the viewport.
 */

export function initScrollReveals() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.05, // trigger early, when 5% of element is visible
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}
