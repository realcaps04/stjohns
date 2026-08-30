import type { Doctor } from '../../data/doctors'
import { ArrowRightIcon, HeartIcon, SpecialtyIcon, StethoscopeIcon } from '../icons'
import './DoctorCard.css'

type DoctorCardProps = {
  doctor: Doctor
  bookLabel: string
  bookHref: string
}

function DoctorGlyph({ icon }: { icon: Doctor['icon'] }) {
  const className = 'doctor-card__glyph-icon'
  if (icon === 'heart') return <HeartIcon className={className} />
  if (icon === 'specialty') return <SpecialtyIcon className={className} />
  return <StethoscopeIcon className={className} />
}

function initials(name: string) {
  const parts = name.replace(/^Dr\.?\s*/i, '').trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts[parts.length - 1]?.[0] ?? ''
  return `${first}${last}`.toUpperCase()
}

export function DoctorCard({ doctor, bookLabel, bookHref }: DoctorCardProps) {
  return (
    <article className="doctor-card">
      <a className="doctor-card__profile" href={doctor.url} target="_blank" rel="noreferrer">
        <div className="doctor-card__photo" aria-hidden={doctor.image ? undefined : true}>
          {doctor.image ? (
            <img
              className="doctor-card__image"
              src={doctor.image}
              alt={doctor.name}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          ) : (
            <span className="doctor-card__initials">{initials(doctor.name)}</span>
          )}
        </div>
        <span className="doctor-card__glyph">
          <DoctorGlyph icon={doctor.icon} />
        </span>
        <h3 className="doctor-card__name">{doctor.name}</h3>
        <p className="doctor-card__dept">{doctor.department}</p>
      </a>
      <a className="doctor-card__book" href={bookHref}>
        {bookLabel}
        <ArrowRightIcon className="doctor-card__book-icon" />
      </a>
    </article>
  )
}
