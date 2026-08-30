export type HospitalStoryStatIcon = 'years' | 'beds' | 'disciplines' | 'doctors'

export const hospitalStoryContent = {
  badge: "About St. John's Hospital",
  title: "St. John's Hospital, in the beautiful High Range center, Kattappana",
  body: 'was founded in the year 1968 by Rev. Bro. Forthunathus Thanhauser. The institution, managed by the Hospitaller Brothers of St. John of God, today has grown to a tertiary level 450 - bedded multi-specialty hospital, with sixteen clinical disciplines. Being the only tertiary level referral center, in this area, our institution is empowered with a team of talented specialists in all sectors dedicated in providing quality and specialty health care.',
  videosCtaLabel: 'More Videos',
  videosCtaHref: 'https://www.youtube.com/@StJohnsHospitalKattapana',
  video: {
    embedUrl: 'https://www.youtube.com/embed/ncCn6Rqee3Y',
    thumbnail: 'https://img.youtube.com/vi/ncCn6Rqee3Y/hqdefault.jpg',
    title:
      'ഫാറ്റി ലിവറിനെ കുറിച്ച് ഡോക്ടർ പറയുന്നത് കേൾക്കു | Fatty liver causes | symptoms #stjohnshospital',
  },
  stats: [
    {
      id: 'years',
      value: '56+',
      label: 'Years of Trusted Care',
      icon: 'years' as const,
    },
    {
      id: 'beds',
      value: '450+',
      label: 'Bedded Multi-specialty Hospital',
      icon: 'beds' as const,
    },
    {
      id: 'disciplines',
      value: '16+',
      label: 'Clinical Disciplines',
      icon: 'disciplines' as const,
    },
    {
      id: 'doctors',
      value: '100+',
      label: 'Doctors & Specialists',
      icon: 'doctors' as const,
    },
  ],
  mission: {
    title: 'Our Mission',
    body: 'To provide compassionate, high-quality, and affordable healthcare to all, especially the underserved, inspired by our values of hospitality, respect, and excellence.',
    ctaLabel: 'Learn More About Us',
    ctaHref: '#about',
  },
}
