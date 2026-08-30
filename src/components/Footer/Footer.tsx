import { footerContent } from '../../data/footer'
import {
  ArrowRightIcon,
  BuildingIcon,
  ExternalLinkIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from '../icons'
import './Footer.css'

function FooterLinkList({
  links,
  externalIcon = false,
}: {
  links: { id: string; label: string; href: string; external?: boolean }[]
  externalIcon?: boolean
}) {
  return (
    <ul className="site-footer__list">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            {...(link.external || link.href.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {})}
          >
            <span className="site-footer__chevron" aria-hidden="true">
              ›
            </span>
            {link.label}
            {externalIcon && link.external ? (
              <ExternalLinkIcon className="site-footer__external-icon" />
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  )
}

function SocialIcon({ id }: { id: string }) {
  const className = 'site-footer__social-icon'
  if (id === 'facebook') return <FacebookIcon className={className} />
  if (id === 'instagram') return <InstagramIcon className={className} />
  if (id === 'youtube') return <YouTubeIcon className={className} />
  if (id === 'linkedin') return <LinkedInIcon className={className} />
  return <WhatsAppIcon className={className} />
}

export function Footer() {
  const {
    logo,
    app,
    quickLinks,
    healthCare,
    awards,
    academics,
    mission,
    address,
    contact,
    social,
    copyright,
  } = footerContent

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a className="site-footer__logo" href={logo.href}>
              <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
            </a>
            <p className="site-footer__tagline">{logo.tagline}</p>
            <p className="site-footer__app-text">{app.text}</p>
            <div className="site-footer__app-row">
              <a className="site-footer__qr" href={app.qr.href} target="_blank" rel="noreferrer">
                <img src={app.qr.src} alt={app.qr.alt} loading="lazy" decoding="async" />
              </a>
              <div className="site-footer__stores">
                <a
                  className="site-footer__store"
                  href={app.appStore.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={app.appStore.src} alt={app.appStore.alt} loading="lazy" decoding="async" />
                </a>
                <a
                  className="site-footer__store"
                  href={app.googlePlay.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={app.googlePlay.src} alt={app.googlePlay.alt} loading="lazy" decoding="async" />
                </a>
              </div>
            </div>
          </div>

          <nav className="site-footer__col" aria-label={quickLinks.title}>
            <h2 className="site-footer__heading">{quickLinks.title}</h2>
            <FooterLinkList links={quickLinks.links} />
          </nav>

          <nav className="site-footer__col" aria-label={healthCare.title}>
            <h2 className="site-footer__heading">{healthCare.title}</h2>
            <FooterLinkList links={healthCare.links} externalIcon />
            <a
              className="site-footer__view-more"
              href={healthCare.viewMoreHref}
              target="_blank"
              rel="noreferrer"
            >
              {healthCare.viewMoreLabel}
              <ArrowRightIcon className="site-footer__view-more-icon" />
            </a>
          </nav>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">{awards.title}</h2>
            <ul className="site-footer__awards">
              {awards.items.map((item) => (
                <li key={item.id} className="site-footer__award">
                  <span className="site-footer__award-ring">
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.label}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="site-footer__award-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav className="site-footer__col" aria-label={academics.title}>
            <h2 className="site-footer__heading">{academics.title}</h2>
            <FooterLinkList links={academics.links} externalIcon />
          </nav>
        </div>

        <div className="site-footer__info">
          <div className="site-footer__info-block">
            <span className="site-footer__info-icon" aria-hidden="true">
              <BuildingIcon className="site-footer__info-icon-svg" />
            </span>
            <div>
              <h3 className="site-footer__info-title">{mission.title}</h3>
              <p className="site-footer__info-text">{mission.body}</p>
            </div>
          </div>

          <div className="site-footer__info-block">
            <span className="site-footer__info-icon" aria-hidden="true">
              <PinIcon className="site-footer__info-icon-svg" />
            </span>
            <div>
              <h3 className="site-footer__info-title">{address.title}</h3>
              <p className="site-footer__info-text">
                {address.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <a
                className="site-footer__directions"
                href={address.directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                {address.directionsLabel}
              </a>
            </div>
          </div>

          <div className="site-footer__info-block site-footer__info-block--contact">
            <span className="site-footer__info-icon site-footer__info-icon--phone" aria-hidden="true">
              <PhoneIcon className="site-footer__info-icon-svg" />
            </span>
            <div>
              <h3 className="site-footer__info-title">{contact.title}</h3>
              <a className="site-footer__contact-line" href={contact.emailHref}>
                <MailIcon className="site-footer__contact-icon" />
                {contact.email}
              </a>
              <a className="site-footer__contact-line" href={contact.phoneHref}>
                <PhoneIcon className="site-footer__contact-icon" />
                {contact.phone}
              </a>
            </div>
            <ul className="site-footer__social" aria-label="Social media">
              {social.map((item) => (
                <li key={item.id}>
                  <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                    <SocialIcon id={item.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bar">
        <p>
          © {new Date().getFullYear()} {copyright}
        </p>
      </div>
    </footer>
  )
}
