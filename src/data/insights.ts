export type InsightTabId = 'press' | 'blogs' | 'events'

export type InsightPost = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  category: string
  categoryHref: string
  author: string
  authorHref: string
  date: string
  href: string
}

export type InsightTab = {
  id: InsightTabId
  label: string
  posts: InsightPost[]
}

export const insightsContent = {
  title: 'Insights',
  body: "Stay informed with the latest news, stories, and updates from St. John's Hospital. Explore our press releases, blogs, and upcoming events.",
  viewAllLabel: 'View All Insights',
  viewAllHref: 'https://stjohns.co.in/blog/',
  tabs: [
    {
      id: 'press',
      label: 'Press',
      posts: [
        {
          id: 'press-2007',
          title: '2007: Expanding Horizons in Healthcare and community',
          description:
            'A year of growth and progress as we expanded our services and strengthened our connection with the community we serve.',
          image: '/images/insights/press-2007.png',
          imageAlt: 'St. Johns Hospital building exterior',
          category: 'Uncategorized',
          categoryHref: 'https://stjohns.co.in/category/uncategorized/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'February 12, 2025',
          href: 'https://stjohns.co.in/2007-expanding-horizons-in-healthcare-and-community-building/',
        },
        {
          id: 'press-2008',
          title: '2008: Deepening Commitment and Strengthening Faith',
          description:
            'A year of spiritual growth and unwavering dedication to providing compassionate care with faith at the heart.',
          image: '/images/insights/press-2008.png',
          imageAlt: 'Faith ceremony at St. Johns Hospital',
          category: 'Uncategorized',
          categoryHref: 'https://stjohns.co.in/category/uncategorized/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'February 12, 2025',
          href: 'https://stjohns.co.in/2008-deepening-commitment-and-strengthening-faith/',
        },
        {
          id: 'press-2009',
          title: '2009: Enriching Knowledge and Global Engagement',
          description:
            'Strengthening global partnerships and embracing new knowledge to deliver world-class healthcare.',
          image: '/images/insights/press-2009.png',
          imageAlt: 'Global healthcare collaboration panel at St. Johns Hospital',
          category: 'Uncategorized',
          categoryHref: 'https://stjohns.co.in/category/uncategorized/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'February 12, 2025',
          href: 'https://stjohns.co.in/2009-enriching-knowledge-and-global-engagement/',
        },
      ],
    },
    {
      id: 'blogs',
      label: 'Blogs',
      posts: [
        {
          id: 'blog-postpartum',
          title: 'പ്രസവാനന്തര വിഷാദം (Postpartum Depression): അമ്മമാരെ തളർത്തുന്ന മാനസികാവസ്ഥ',
          description:
            'Understanding postpartum depression and the support mothers need during the postnatal period.',
          image: '/images/insights/blog-1.webp',
          imageAlt: 'Mother holding newborn baby',
          category: 'Uncategorized',
          categoryHref: 'https://stjohns.co.in/category/uncategorized/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'February 11, 2025',
          href: 'https://stjohns.co.in/%e0%b4%aa%e0%b5%8d%e0%b4%b0%e0%b4%b8%e0%b4%b5%e0%b4%be%e0%b4%a8%e0%b4%a8%e0%b5%8d%e0%b4%a4%e0%b4%b0-%e0%b4%b5%e0%b4%bf%e0%b4%b7%e0%b4%be%e0%b4%a6%e0%b4%82postpartum-depression-%e0%b4%85%e0%b4%ae/',
        },
        {
          id: 'blog-heart-health',
          title: 'ഹൃദയാരോഗ്യം കാത്തുസൂക്ഷിക്കാൻ പതിവാക്കേണ്ടത് ഇവ (Heart health)',
          description: 'Essential daily habits to maintain good heart health in a busy lifestyle.',
          image: '/images/insights/blog-2.webp',
          imageAlt: 'Healthy heart lifestyle habits',
          category: 'Uncategorized',
          categoryHref: 'https://stjohns.co.in/category/uncategorized/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'February 11, 2025',
          href: 'https://stjohns.co.in/%e0%b4%b9%e0%b5%83%e0%b4%a6%e0%b4%af%e0%b4%be%e0%b4%b0%e0%b5%8b%e0%b4%97%e0%b5%8d%e0%b4%af%e0%b4%82-%e0%b4%95%e0%b4%be%e0%b4%a4%e0%b5%8d%e0%b4%a4%e0%b5%81%e0%b4%b8%e0%b5%82%e0%b4%95%e0%b5%8d%e0%b4%b7/',
        },
        {
          id: 'blog-stress',
          title: 'മാനസിക പിരിമുറുക്കം (Stress): ഇന്നത്തെ തിരക്കുപിടിച്ച ജീവിതരീതിയിൽ',
          description: 'Managing stress and mental well-being in today’s fast-paced daily life.',
          image: '/images/insights/blog-3.webp',
          imageAlt: 'Person managing stress at home',
          category: 'Uncategorized',
          categoryHref: 'https://stjohns.co.in/category/uncategorized/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'February 11, 2025',
          href: 'https://stjohns.co.in/%e0%b4%ae%e0%b4%be%e0%b4%a8%e0%b4%b8%e0%b4%bf%e0%b4%95-%e0%b4%aa%e0%b4%bf%e0%b4%b0%e0%b4%bf%e0%b4%ae%e0%b5%81%e0%b4%b1%e0%b5%81%e0%b4%95%e0%b5%8d%e0%b4%95%e0%b4%82stress/',
        },
      ],
    },
    {
      id: 'events',
      label: 'Events',
      posts: [
        {
          id: 'event-autism',
          title: 'Inauguration of St. John of God Autism Centre',
          description:
            'Celebrating the inauguration of a dedicated centre supporting children and families through compassionate care.',
          image: '/images/insights/event-1.webp',
          imageAlt: 'Inauguration of St. John of God Autism Centre',
          category: 'Uncategorized',
          categoryHref: 'https://stjohns.co.in/category/uncategorized/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'November 19, 2024',
          href: 'https://stjohns.co.in/the-power-of-prevention-hospascommitment-to-proactive-health/',
        },
        {
          id: 'event-jubilee',
          title: 'Golden & Silver Jubilee Celebration',
          description:
            'Marking decades of service with a celebration of milestones, gratitude, and community spirit.',
          image: '/images/insights/event-2.webp',
          imageAlt: 'Golden and Silver Jubilee celebration at St. Johns Hospital',
          category: 'Clinical Health',
          categoryHref: 'https://stjohns.co.in/category/clinical-health/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'November 19, 2024',
          href: 'https://stjohns.co.in/tech-talk-exploring-cutting-edgemedical-technologies-at-hospa/',
        },
        {
          id: 'event-community',
          title: 'Bringing Healthcare to the Community',
          description:
            'Extending quality healthcare beyond hospital walls through outreach and community engagement programs.',
          image: '/images/insights/event-3.webp',
          imageAlt: 'Community healthcare outreach program',
          category: 'Surgery',
          categoryHref: 'https://stjohns.co.in/category/surgery/',
          author: 'admin',
          authorHref: 'https://stjohns.co.in/author/admin/',
          date: 'November 19, 2024',
          href: 'https://stjohns.co.in/navigating-your-health-journey-acomprehensive-guide/',
        },
      ],
    },
  ] satisfies InsightTab[],
}
