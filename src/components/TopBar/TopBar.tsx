import { contact } from '../../data/content'
import { MailIcon, PhoneIcon, PinIcon } from '../icons'
import './TopBar.css'

export function TopBar() {
  return (
    <div className="site-topbar" role="region" aria-label="Hospital contact">
      <div className="site-topbar__inner">
        <a
          className="site-topbar__item"
          href={contact.phoneHref}
          aria-label={`Call ${contact.phone}`}
        >
          <PhoneIcon className="site-topbar__icon" aria-hidden="true" />
          <span className="site-topbar__text">{contact.phone}</span>
        </a>
        <a
          className="site-topbar__item"
          href={contact.emailHref}
          aria-label={`Email ${contact.email}`}
        >
          <MailIcon className="site-topbar__icon" aria-hidden="true" />
          <span className="site-topbar__text">{contact.email}</span>
        </a>
        <a
          className="site-topbar__item"
          href={contact.locationHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Location: ${contact.location}`}
        >
          <PinIcon className="site-topbar__icon" aria-hidden="true" />
          <span className="site-topbar__text">{contact.location}</span>
        </a>
      </div>
    </div>
  )
}
