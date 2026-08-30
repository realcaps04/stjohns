export type HealthcareServiceIcon =
  | 'pharmacy'
  | 'laboratory'
  | 'nursing'
  | 'radiology'
  | 'patient-care'
  | 'eye-care'
  | 'physiotherapy'
  | 'nutrition'
  | 'psychology'

export type HealthcareService = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
  ctaLabel: string
  icon: HealthcareServiceIcon
}

export const healthcareServicesContent = {
  badge: 'Services We Offer',
  titleLead: 'Comprehensive',
  titleRest: 'Healthcare Services',
  body: "From diagnosis and treatment to emergency care and specialized medical services, St. John's Hospital provides comprehensive healthcare under one roof. Our experienced medical team, modern facilities, and patient-focused approach ensure safe, compassionate, and quality care at every stage.",
  footer: {
    title: "We're Here for You",
    body: 'Our dedicated departments work together to deliver holistic care and support for a healthier tomorrow.',
    ctaLabel: 'Explore All Services',
    ctaHref: '#contact',
  },
  services: [
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      description: 'The Pharmacy Department plays a vital role in the healthcare system',
      image: '/images/healthcare-services/pharmacy.avif',
      imageAlt: 'Pharmacy shelves with medicines at St. Johns Hospital',
      href: 'https://stjohns.co.in/pharmacy/',
      ctaLabel: 'Learn More',
      icon: 'pharmacy',
    },
    {
      id: 'laboratory',
      title: 'Laboratory',
      description: 'Our Laboratory Department is an integral part of our healthcare facility',
      image: '/images/healthcare-services/laboratory.jpg',
      imageAlt: 'Laboratory testing at St. Johns Hospital',
      href: 'https://stjohns.co.in/laboratory/',
      ctaLabel: 'Learn More',
      icon: 'laboratory',
    },
    {
      id: 'nursing',
      title: 'Nursing',
      description: 'The Nursing Department is the backbone of patient care in any hospital',
      image: '/images/healthcare-services/nursing.jpg',
      imageAlt: 'Nursing care at St. Johns Hospital',
      href: 'https://stjohns.co.in/nursing/',
      ctaLabel: 'Learn More',
      icon: 'nursing',
    },
    {
      id: 'radiology',
      title: 'Radiology',
      description: 'Our Radiology Department delivers accurate imaging and diagnostic support',
      image: '/images/healthcare-services/radiology.jpeg',
      imageAlt: 'Radiology services at St. Johns Hospital',
      href: 'https://stjohns.co.in/radiology/',
      ctaLabel: 'Learn More',
      icon: 'radiology',
    },
    {
      id: 'patient-care',
      title: 'Patient Care',
      description: "At St. John's hospital, we provide comprehensive medical care for every patient",
      image: '/images/healthcare-services/patient-care.jpg',
      imageAlt: 'Patient care consultation at St. Johns Hospital',
      href: 'https://stjohns.co.in/',
      ctaLabel: 'Click Here',
      icon: 'patient-care',
    },
    {
      id: 'eye-care',
      title: 'Eye Care',
      description: 'Our Eye Care Department is dedicated to providing quality vision care',
      image: '/images/healthcare-services/eye-care.avif',
      imageAlt: 'Eye care examination at St. Johns Hospital',
      href: 'https://stjohns.co.in/eye-care/',
      ctaLabel: 'Click Here',
      icon: 'eye-care',
    },
    {
      id: 'physiotherapy',
      title: 'Physiotherapy',
      description:
        'Physiotherapy is a healthcare profession focused on the diagnosis, treatment, and rehabilitation of movement disorders',
      image: '/images/healthcare-services/physiotherapy.jpg',
      imageAlt: 'Physiotherapy session at St. Johns Hospital',
      href: 'https://stjohns.co.in/physiotherapy/',
      ctaLabel: 'Click Here',
      icon: 'physiotherapy',
    },
    {
      id: 'clinical-nutrition',
      title: 'Clinical Nutrition',
      description: 'Clinical Nutrition is a specialized branch of healthcare that supports healing through diet',
      image: '/images/healthcare-services/clinical-nutrition.jpeg',
      imageAlt: 'Clinical nutrition consultation at St. Johns Hospital',
      href: 'https://stjohns.co.in/clinical-nutrition/',
      ctaLabel: 'Click Here',
      icon: 'nutrition',
    },
    {
      id: 'clinical-psychology',
      title: 'Clinical Psychology',
      description: 'The Clinical Psychology Department offers compassionate mental health support',
      image: '/images/healthcare-services/clinical-psychology.webp',
      imageAlt: 'Clinical psychology support at St. Johns Hospital',
      href: 'https://stjohns.co.in/clinical-psychology/',
      ctaLabel: 'Click Here',
      icon: 'psychology',
    },
  ] satisfies HealthcareService[],
} as const
