export const hospital = {
  name: 'St. Johns Hospital',
  location: 'Kattappana, Kerala',
  wordmark: ['ST. JOHNS', 'HOSPITAL', 'KATTAPPANA'] as const,
}

export const contact = {
  phone: '04868 257 000',
  phoneHref: 'tel:+914868257000',
  email: 'info@stjohns.co.in',
  location: 'Kattappana, Idukki',
}

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'departments', label: 'Departments', href: '#departments' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
] as const

export type NavLink = (typeof navLinks)[number]

export const footerNavLinks = [
  { id: 'pharmacy', label: 'Pharmacy College', href: '#pharmacy-college' },
  { id: 'nursing', label: 'Nursing College', href: '#nursing-college' },
  { id: 'dmlt', label: 'DMLT College', href: '#dmlt-college' },
  { id: 'insight', label: 'Insight', href: '#insight' },
] as const

export const heroContent = {
  badge: 'Trusted Healthcare, Close to Home',
  availability: '24/7 Care',
  headline: ['Compassionate care,', 'exceptional results.'],
  body: 'At St. Johns Hospital Kattappana, we combine advanced technology with genuine compassion to deliver the highest standard of care for you and your family.',
  ctaLabel: 'See How We Work',
  ctaHref: '#about',
  image: {
    src: '/images/hero-family-portrait.png',
    alt: 'A doctor at St. Johns Hospital Kattappana speaking with a mother and her daughter.',
  },
}

export const patientTrust = {
  count: '150K+',
  label: 'Patient Care',
  avatars: [
    {
      src: '/images/avatar-physician.jpg',
      alt: 'Portrait of a St. Johns Hospital physician',
    },
    {
      src: '/images/avatar-consultant.jpg',
      alt: 'Portrait of a senior consultant',
    },
    {
      src: '/images/avatar-nurse.jpg',
      alt: 'Portrait of a St. Johns Hospital nurse',
    },
  ],
}

export const statistics = [
  {
    id: 'experience',
    value: '20+',
    label: 'Years of Experience',
    shortLabel: 'Years Experience',
    icon: 'award' as const,
  },
  {
    id: 'satisfaction',
    value: '95%',
    label: 'Patient Satisfaction',
    shortLabel: 'Satisfaction',
    icon: 'heart' as const,
  },
  {
    id: 'patients',
    value: '5,000+',
    label: 'Patients Served Annually',
    shortLabel: 'Patients Served',
    icon: 'people' as const,
  },
  {
    id: 'providers',
    value: '10+',
    label: 'Healthcare Providers',
    shortLabel: 'Providers',
    icon: 'building' as const,
  },
] as const

export type StatIcon = (typeof statistics)[number]['icon']

export const aboutContent = {
  badge: 'About Us',
  titleLead: 'Welcome to',
  titleRest: 'St Johns Hospital, Kattappana',
  subtitle: "St. John's Hospital Kattappana – Medical Excellence in the Heart of Idukki",
  bodyLead: 'St Johns Hospital, Kattappana',
  bodyRest:
    ' is a leading multi-specialty healthcare institution committed to delivering compassionate, high-quality medical care to the people of Idukki and beyond. With state-of-the-art facilities, experienced specialists, and a patient-centered approach, we are dedicated to improving lives through advanced treatment, preventive care, and community wellness.',
  ctaLabel: 'Explore More',
  ctaHref: '#services',
  video: {
    id: 'c2UtCcYd7h0',
    url: 'https://youtu.be/c2UtCcYd7h0?si=d7LMuizbhH-oq0qp',
    embedUrl: 'https://www.youtube.com/embed/c2UtCcYd7h0',
    thumbnail: '/images/about-video-thumb.jpg',
    title: 'St. Johns Hospital Kattappana campus overview',
  },
  highlights: [
    {
      id: 'doctors',
      value: '65+',
      label: 'Expert Doctors',
      icon: 'stethoscope' as const,
    },
    {
      id: 'specialities',
      value: '25+',
      label: 'Specialities',
      icon: 'specialty' as const,
    },
    {
      id: 'professionals',
      value: '800+',
      label: 'Dedicated Professionals',
      icon: 'people' as const,
    },
  ],
} as const

export type AboutHighlightIcon = (typeof aboutContent.highlights)[number]['icon']

export const servicesContent = {
  badge: 'Our Services',
  titleLead: 'Comprehensive',
  titleRest: 'Treatments & Care',
  body: "At St. John's Hospital, we offer a comprehensive range of medical treatments and healthcare services designed to meet the diverse needs of our patients. Our multidisciplinary team of experienced doctors, nurses, and healthcare professionals works together to provide accurate diagnosis, effective treatment, and compassionate care.",
  ctaLabel: 'View All Services',
  ctaHref: '#departments',
  departments: [
    {
      id: 'plastic-surgery',
      title: 'Plastic Surgery',
      description:
        'Restoring confidence and enhancing natural beauty through advanced, safe, and personalized surgical procedures.',
      image: '/images/services-plastic-surgery.jpg',
      imageAlt: 'Plastic surgery consultation at St. Johns Hospital',
      href: '#departments',
      icon: 'face' as const,
    },
    {
      id: 'oral-surgery',
      title: 'Oral & Maxillofacial Surgery',
      description:
        'Specialized care for the face, mouth, and jaw, including corrective, reconstructive, and cosmetic treatments.',
      image: '/images/services-oral-surgery.jpg',
      imageAlt: 'Oral and maxillofacial surgery at St. Johns Hospital',
      href: '#departments',
      icon: 'oral' as const,
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      description:
        'Expert diagnosis and treatment for skin, hair, and nail conditions with modern dermatological care.',
      image: '/images/services-dermatology.jpg',
      imageAlt: 'Dermatology examination at St. Johns Hospital',
      href: '#departments',
      icon: 'skin' as const,
    },
  ],
  features: [
    {
      id: 'expert-team',
      title: 'Expert Team',
      description: 'Highly qualified doctors and specialists',
      icon: 'team' as const,
    },
    {
      id: 'technology',
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment for accurate care',
      icon: 'tech' as const,
    },
    {
      id: 'safe-trusted',
      title: 'Safe & Trusted',
      description: 'Patient safety and well-being is our top priority',
      icon: 'safe' as const,
    },
    {
      id: 'compassion',
      title: 'Compassionate Care',
      description: 'We treat every patient like family',
      icon: 'compassion' as const,
    },
  ],
} as const

export type ServiceDeptIcon = (typeof servicesContent.departments)[number]['icon']
export type ServiceFeatureIcon = (typeof servicesContent.features)[number]['icon']
