export type Accreditation = {
  id: string
  label: string
  image: string
  imageAlt: string
  compactLabel?: boolean
}

export const accreditationsContent = {
  badge: 'Accreditations & Certifications',
  title: 'Accreditations & Certifications',
  subtitleLead: 'Recognized for Excellence.',
  subtitleRest: 'Committed to Quality.',
  bodyLead:
    'Our accreditations and certifications reflect our unwavering commitment to ',
  bodyEmphasis: 'patient safety, clinical excellence, quality healthcare, and continuous improvement',
  bodyRest:
    '. These recognitions demonstrate our dedication to maintaining high standards across every aspect of hospital care and ensuring a safe, trusted healthcare experience for every patient.',
  accreditations: [
    {
      id: 'nabh',
      label: 'NABH',
      image:
        'https://stjohns.co.in/wp-content/uploads/elementor/thumbs/NABH_001-1-rrsqpgetbeeliapnixbyabl88v2yw1ssfjrqirh48g.png',
      imageAlt: 'NABH accreditation logo',
    },
    {
      id: 'kerala',
      label: 'Government of Kerala',
      image:
        'https://stjohns.co.in/wp-content/uploads/elementor/thumbs/govt-logo-red-rrsqgqgpwqgtsjdog5mk5it9u62dh56fwdvk8celyo.png',
      imageAlt: 'Government of Kerala emblem',
    },
    {
      id: 'lions',
      label: 'Lions Club',
      image:
        'https://stjohns.co.in/wp-content/uploads/elementor/thumbs/Lions-International-rrsqhtxxvryvc5sc1mow28umscnsgfj61t9ydys2pc.webp',
      imageAlt: 'Lions International logo',
    },
    {
      id: 'mangalam',
      label: 'Mangalam',
      image:
        'https://stjohns.co.in/wp-content/uploads/elementor/thumbs/mangalam-logo-2048x2048-1-rrsqhb563394vyjn3ekcodlewn8g6hgjb888sfjy5s.webp',
      imageAlt: 'Mangalam logo',
      compactLabel: true,
    },
  ] satisfies Accreditation[],
}
