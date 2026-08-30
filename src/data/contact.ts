export const contactContent = {
  badge: 'Contact Us',
  titleLead: 'Send Us',
  titleRest: 'A Message Anytime',
  subtitle:
    'Reach out for appointments, enquiries, or feedback. Our care team is here to help you and your family.',
  form: {
    title: 'Send Us A Message',
    subtitle: 'Your email address will not be published. Required fields are marked *',
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'you@example.com',
    phoneLabel: 'Mobile Number',
    phonePlaceholder: '+91 98765 43210',
    subjectLabel: 'Enquiry Type',
    subjectPlaceholder: 'General Enquiry',
    messageLabel: 'Your message',
    messagePlaceholder: 'How can we help you today?',
    submitLabel: 'Send',
    successTitle: 'Thank you for reaching out',
    successMessage:
      'Your message has been prepared. If your email app did not open, please contact us directly at info@stjohns.co.in or call 04868 257000.',
    resetLabel: 'Send another message',
  },
  subjects: [
    { value: 'general', label: 'General Enquiry' },
    { value: 'appointment', label: 'Appointment Booking' },
    { value: 'health-checkup', label: 'Health Checkup' },
    { value: 'feedback', label: 'Feedback' },
  ],
  info: {
    phone: '+91 4868 257000',
    phoneHref: 'tel:+914868257000',
    appointmentPhone: '+91 9995651818',
    appointmentHref: 'tel:+919995651818',
    email: 'info@stjohns.co.in',
    emailHref: 'mailto:info@stjohns.co.in',
    address: "St. John's Hospital, Kattappana South, Idukki District, Kerala – 685515",
    directionsLabel: 'Get direction',
    directionsHref:
      'https://www.google.com/maps/dir//ST+JOHNS+HOSPITAL+Kattappana,+Kerala+685515/@9.746985,77.1097959,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b07a9565907dbdd:0x3d3acbc5e35d2abf!2m2!1d77.1097959!2d9.746985',
    hoursTitle: 'Visiting Time',
    hoursNote: '6.00 AM to 9.00 AM & 11.00 AM to 9.00 PM',
  },
  map: {
    title: 'Our Location',
    embedUrl: 'https://maps.google.com/maps?q=9.746985,77.1097959&hl=en&z=15&output=embed',
  },
}

export type ContactSubject = (typeof contactContent.subjects)[number]['value']
