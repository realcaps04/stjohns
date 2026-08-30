export type CheckupFeatureIcon =
  | 'heart'
  | 'lab'
  | 'doctor'
  | 'shield'
  | 'cardiac'

export type CheckupPackage = {
  id: string
  title: string
  description: string
  price: number
  priceLabel: string
  ctaLabel: string
  ctaHref: string
  theme: 'blue' | 'green'
  features: { label: string; icon: CheckupFeatureIcon }[]
}

export const healthCheckupContent = {
  titleLead: 'Know Your Health',
  titleRest: 'Protect Your Future',
  body: 'Take charge of your health with our comprehensive checkup packages. Early detection, prevention, and peace of mind—all for a healthier tomorrow.',
  image: {
    src: '/images/hero-family-portrait.png',
    alt: 'A smiling family at St. Johns Hospital Kattappana',
  },
  packagesHeading: 'Health Checkup Packages',
  packages: [
    {
      id: 'executive',
      title: 'Executive Health Checkup',
      description:
        'Our Executive Health Checkup offers essential health screenings, diagnostic tests, and specialist consultations to help monitor your health and detect potential concerns early.',
      price: 2500,
      priceLabel: 'Package Price',
      ctaLabel: 'Book Now',
      ctaHref: '#contact',
      theme: 'blue',
      features: [
        { label: 'Essential Health Screenings', icon: 'heart' },
        { label: 'Diagnostic Tests', icon: 'lab' },
        { label: 'Specialist Consultations', icon: 'doctor' },
        { label: 'Early Detection & Prevention', icon: 'shield' },
      ],
    },
    {
      id: 'master',
      title: 'Master Health Checkup',
      description:
        'Our Master Health Checkup provides a comprehensive health assessment with advanced diagnostic tests, cardiac screening, and specialist consultations for complete peace of mind.',
      price: 5000,
      priceLabel: 'Package Price',
      ctaLabel: 'Book Now',
      ctaHref: '#contact',
      theme: 'green',
      features: [
        { label: 'Advanced Health Assessment', icon: 'heart' },
        { label: 'Cardiac Screening', icon: 'cardiac' },
        { label: 'Advanced Diagnostic Tests', icon: 'lab' },
        { label: 'Specialist Consultations', icon: 'doctor' },
      ],
    },
  ] satisfies CheckupPackage[],
  trust: {
    title: 'Your Health, Our Priority',
    body: 'Regular checkups today for a healthier, happier tomorrow.',
    highlights: [
      { label: 'Expert Medical Team', icon: 'team' as const },
      { label: 'Advanced Technology', icon: 'tech' as const },
      { label: 'Accurate Results', icon: 'verified' as const },
      { label: 'Care You Can Trust', icon: 'care' as const },
    ],
  },
}
