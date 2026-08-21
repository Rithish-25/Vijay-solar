import React, { useState } from 'react';

const e = React.createElement;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    location: false,
    service: false,
    message: false
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Field validator methods
  const validators = {
    name: (val) => val.trim().length > 0,
    phone: (val) => {
      const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
      return phoneRegex.test(val.replace(/\s+/g, ''));
    },
    email: (val) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val.trim());
    },
    location: (val) => val.trim().length > 0,
    service: (val) => val !== '' && val !== null,
    message: (val) => val.trim().length > 0
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear validation error dynamically if now valid
    if (validators[field](value)) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(false);
    setSubmitError(false);

    let isFormValid = true;
    const newErrors = { ...errors };

    // Run validations across all fields
    Object.keys(formData).forEach(key => {
      const isValid = validators[key](formData[key]);
      if (!isValid) {
        newErrors[key] = true;
        isFormValid = false;
      } else {
        newErrors[key] = false;
      }
    });

    setErrors(newErrors);

    if (!isFormValid) {
      setSubmitError(true);
      return;
    }

    // Simulate API Post
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return e('div', { className: 'contact-page-wrapper' },
    // 1. Contact Hero
    e('section', { className: 'contact-hero-section' },
      e('div', { className: 'contact-hero-container' },
        e('div', { className: 'contact-hero-content' },
          e('h1', { className: 'contact-hero-heading' },
            'We\'re Here ',
            e('span', { className: 'text-highlight-green' }, 'To Help You!')
          ),
          e('div', { className: 'hero-bar-divider' }),
          e('p', { className: 'contact-hero-text' },
            'Have a question or need assistance? Our team is ready to listen and provide the best solution for you.'
          ),

          e('div', { className: 'contact-hero-features' },
            [
              { icon: 'fa-phone', title: 'Call Us', desc: 'We\'re just a call away' },
              { icon: 'fa-envelope', title: 'Email Us', desc: 'Send us your queries' },
              { icon: 'fa-message', title: 'Chat With Us', desc: 'Quick support online' },
              { icon: 'fa-location-dot', title: 'Reach Us', desc: 'We\'re here for you' }
            ].map((feature, idx) =>
              e('div', { key: idx, className: 'hero-feature-item' },
                e('div', { className: 'feature-icon-wrapper' },
                  e('i', { className: `fa-solid ${feature.icon}` })
                ),
                e('div', { className: 'feature-text-block' },
                  e('h3', null, feature.title),
                  e('p', null, feature.desc)
                )
              )
            )
          )
        ),
        
        e('div', { className: 'contact-hero-visual' },
          e('div', { className: 'visual-circle-bg' }),
          e('div', { className: 'visual-support-badge' },
            e('i', { className: 'fa-solid fa-headset' }),
            e('div', { className: 'badge-text' },
              e('strong', null, 'Friendly Support'),
              e('span', null, 'Fast. Reliable. Helpful.')
            )
          ),
          e('img', {
            src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
            alt: 'Customer Support Representative',
            className: 'support-rep-img'
          }),
          // Absolute icons surrounding rep
          e('div', { className: 'floating-bubble bubble-phone' }, e('i', { className: 'fa-solid fa-phone' })),
          e('div', { className: 'floating-bubble bubble-envelope' }, e('i', { className: 'fa-solid fa-envelope' })),
          e('div', { className: 'floating-bubble bubble-chat' }, e('i', { className: 'fa-solid fa-comment-dots' }))
        )
      )
    ),

    // 2. Info and Form Row
    e('section', { className: 'contact-form-section', id: 'contact' },
      e('div', { className: 'contact-form-container' },
        // Left Column: Contact Cards
        e('div', { className: 'contact-info-cards' },
          e('h2', { className: 'info-section-heading' }, 'Contact Information'),
          e('p', { className: 'info-section-subtext' },
            'We are available Monday to Saturday, 9 AM to 7 PM. Call us directly or fill out the form for a quick response.'
          ),

          e('div', { className: 'info-cards-list' },
            [
              {
                icon: 'fa-phone',
                title: 'Phone',
                content: e('div', null,
                  e('a', { href: 'tel:9444833272', className: 'hover-link' }, '94448 33272'),
                  e('br'),
                  e('a', { href: 'tel:9791720272', className: 'hover-link' }, '97917 20272')
                )
              },
              {
                icon: 'fa-envelope',
                title: 'Email',
                content: e('a', { href: 'mailto:solarpowervijay@gmail.com', className: 'hover-link' }, 'solarpowervijay@gmail.com')
              },
              {
                icon: 'fa-clock',
                title: 'Business Hours',
                content: e('div', null,
                  e('span', null, 'Monday – Saturday: 9:00 AM – 7:00 PM'),
                  e('br'),
                  e('span', null, 'Sunday: Closed')
                )
              },
              {
                icon: 'fa-location-dot',
                title: 'Location',
                content: 'Coimbatore, Tamil Nadu, India'
              }
            ].map((card, idx) =>
              e('div', { key: idx, className: 'info-block-card' },
                e('div', { className: 'info-block-icon' },
                  e('i', { className: `fa-solid ${card.icon}` })
                ),
                e('div', { className: 'info-block-body' },
                  e('h3', null, card.title),
                  e('div', { className: 'info-block-text' }, card.content)
                )
              )
            )
          )
        ),

        // Right Column: Form
        e('div', { className: 'contact-form-card' },
          e('form', { className: 'contact-interactive-form', onSubmit: handleSubmit, noValidate: true },
            e('h3', null, 'Send Us a Message'),
            e('p', null, 'Fill in the details below and we will get back to you within 24 hours.'),

            e('div', { className: 'contact-inputs-grid' },
              // Row 1: Name & Phone
              e('div', { className: 'form-input-group' },
                e('label', { htmlFor: 'name-field' }, 'Name'),
                e('input', {
                  type: 'text',
                  id: 'name-field',
                  placeholder: 'Your full name',
                  value: formData.name,
                  onChange: (ev) => handleInputChange('name', ev.target.value),
                  className: errors.name ? 'input-error' : ''
                }),
                e('span', { className: `field-error-msg ${errors.name ? 'visible' : ''}` }, 'Name is required.')
              ),
              e('div', { className: 'form-input-group' },
                e('label', { htmlFor: 'phone-field' }, 'Phone'),
                e('input', {
                  type: 'tel',
                  id: 'phone-field',
                  placeholder: 'Your phone number',
                  value: formData.phone,
                  onChange: (ev) => handleInputChange('phone', ev.target.value),
                  className: errors.phone ? 'input-error' : ''
                }),
                e('span', { className: `field-error-msg ${errors.phone ? 'visible' : ''}` }, 'Valid phone is required.')
              ),

              // Row 2: Email & Location
              e('div', { className: 'form-input-group' },
                e('label', { htmlFor: 'email-field' }, 'Email'),
                e('input', {
                  type: 'email',
                  id: 'email-field',
                  placeholder: 'Your email address',
                  value: formData.email,
                  onChange: (ev) => handleInputChange('email', ev.target.value),
                  className: errors.email ? 'input-error' : ''
                }),
                e('span', { className: `field-error-msg ${errors.email ? 'visible' : ''}` }, 'Valid email is required.')
              ),
              e('div', { className: 'form-input-group' },
                e('label', { htmlFor: 'location-field' }, 'Location'),
                e('input', {
                  type: 'text',
                  id: 'location-field',
                  placeholder: 'City / Area',
                  value: formData.location,
                  onChange: (ev) => handleInputChange('location', ev.target.value),
                  className: errors.location ? 'input-error' : ''
                }),
                e('span', { className: `field-error-msg ${errors.location ? 'visible' : ''}` }, 'Location is required.')
              )
            ),

            // Service Required
            e('div', { className: 'form-input-group full-width-group' },
              e('label', { htmlFor: 'service-select' }, 'Service Required'),
              e('select', {
                id: 'service-select',
                value: formData.service,
                onChange: (ev) => handleInputChange('service', ev.target.value),
                className: errors.service ? 'input-error' : ''
              },
                e('option', { value: '', disabled: true }, 'Select a service'),
                e('option', { value: 'residential' }, 'Residential Solar Systems'),
                e('option', { value: 'commercial' }, 'Commercial & Industrial Solar'),
                e('option', { value: 'grid_tied' }, 'Grid-Tied Net Metering Setup'),
                e('option', { value: 'off_grid' }, 'Off-Grid & Battery Storage'),
                e('option', { value: 'maintenance' }, 'Solar Maintenance & Repair'),
                e('option', { value: 'subsidy' }, 'Net Metering & Subsidy Support')
              ),
              e('span', { className: `field-error-msg ${errors.service ? 'visible' : ''}` }, 'Please select a service.')
            ),

            // Message
            e('div', { className: 'form-input-group full-width-group' },
              e('label', { htmlFor: 'message-field' }, 'Message'),
              e('textarea', {
                id: 'message-field',
                rows: 4,
                placeholder: 'Tell us about your project or issue...',
                value: formData.message,
                onChange: (ev) => handleInputChange('message', ev.target.value),
                className: errors.message ? 'input-error' : ''
              }),
              e('span', { className: `field-error-msg ${errors.message ? 'visible' : ''}` }, 'Message is required.')
            ),

            // Submit Button
            e('button', { type: 'submit', className: 'submit-action-btn', disabled: loading },
              loading ? e('div', { className: 'spinner-wheel' }) : e('span', null, e('i', { className: 'fa-solid fa-paper-plane' }), ' Submit Request')
            ),

            // Alerts
            e('div', { className: `form-alert-banner success-banner ${success ? 'visible' : ''}` },
              e('i', { className: 'fa-solid fa-circle-check' }),
              e('div', null,
                e('strong', null, 'Request Submitted!'),
                e('p', null, 'Thank you. Our solar support team will contact you shortly.')
              )
            ),

            e('div', { className: `form-alert-banner error-banner ${submitError ? 'visible' : ''}` },
              e('i', { className: 'fa-solid fa-triangle-exclamation' }),
              e('div', null,
                e('strong', null, 'Submission Failed'),
                e('p', null, 'Please check and complete all required fields.')
              )
            )
          )
        )
      )
    ),

    // 3. Prefer to Call? Section
    e('section', { className: 'contact-call-cta-section' },
      e('div', { className: 'contact-call-cta-container' },
        e('div', { className: 'cta-bg-glow' }),
        e('h2', null, 'Prefer to Call?'),
        e('p', null, 'Speak directly with our solar energy experts for immediate assistance.'),
        e('div', { className: 'cta-buttons-wrapper' },
          e('a', { href: 'tel:9444833272', className: 'cta-phone-btn green-btn' },
            e('i', { className: 'fa-solid fa-phone' }),
            ' Call 94448 33272'
          ),
          e('a', { href: 'tel:9791720272', className: 'cta-phone-btn transparent-btn' },
            e('i', { className: 'fa-solid fa-phone' }),
            ' Call 97917 20272'
          )
        )
      )
    )
  );
}
