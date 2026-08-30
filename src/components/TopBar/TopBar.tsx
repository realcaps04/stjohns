import { contact } from '../../data/content'
import { MailIcon, PhoneIcon, PinIcon } from '../icons'
import './TopBar.css'

export function TopBar() {
  return (
    <div className="site-topbar" role="region" aria-label="Hospital contact">
      <div className="site-topbar__inner">
        <a className="site-topbar__item" href={contact.phoneHref}>
          <PhoneIcon className="site-topbar__icon" />
          <span>{contact.phone}</span>
        </a>
        <a className="site-topbar__item" href={`mailto:${contact.email}`}>
          <MailIcon className="site-topbar__icon" />
          <span>{contact.email}</span>
        </a>
        <span className="site-topbar__item">
          <PinIcon className="site-topbar__icon" />
          <span>{contact.location}</span>
        </span>
      </div>
    </div>
  )
}
