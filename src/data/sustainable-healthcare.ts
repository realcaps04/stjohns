export type SustainableInitiativeIcon = 'solar' | 'oxygen' | 'rainwater'

export type SustainableInitiative = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
  ctaLabel: string
  icon: SustainableInitiativeIcon
}

export const sustainableHealthcareContent = {
  titleLead: 'Sustainable Healthcare for a',
  titleRest: 'Better Future',
  body: "At St. John's Hospital, we prioritize sustainability with our solar plant, rainwater harvesting system, and oxygen plant. Our commitment to eco-friendly practices ensures a healthier environment for our patients and community.",
  illustration: '/images/sustainable/campus-aerial.jpg',
  illustrationAlt: 'Aerial view of St. Johns Hospital campus surrounded by greenery',
  initiatives: [
    {
      id: 'solar-plant',
      title: 'Solar plant',
      description:
        'The solar system consists of 270 kW of Premier Energies solar panels, made from high-efficiency photovoltaic cells and Sungrow inverters powering our hospital operations.',
      image: '/images/sustainable/solar-plant.jpg',
      imageAlt: 'Rooftop solar panel installation at St. Johns Hospital',
      href: 'https://stjohns.co.in/',
      ctaLabel: 'Learn More',
      icon: 'solar',
    },
    {
      id: 'oxygen-plant',
      title: 'Oxygen Plant',
      description:
        'The Oxygen Plant Department plays a vital role in maintaining a steady and reliable supply of medical-grade oxygen throughout the hospital.',
      image: '/images/sustainable/campus-aerial.jpg',
      imageAlt: 'St. Johns Hospital campus aerial view',
      href: 'https://stjohns.co.in/',
      ctaLabel: 'Learn More',
      icon: 'oxygen',
    },
    {
      id: 'rainwater-harvesting',
      title: 'Rain Water Harvesting',
      description:
        'Our rainwater harvesting system plays a vital role in maintaining a steady and reliable supply of water throughout the hospital campus.',
      image: '/images/sustainable/rainwater-harvesting.jpg',
      imageAlt: 'Hospital facility supporting sustainable water management',
      href: 'https://stjohns.co.in/',
      ctaLabel: 'Learn More',
      icon: 'rainwater',
    },
  ] satisfies SustainableInitiative[],
}
