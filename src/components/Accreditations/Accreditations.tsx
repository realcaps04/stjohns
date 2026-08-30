import { accreditationsContent } from '../../data/accreditations'
import { MedicalCrossIcon, VerifiedIcon } from '../icons'
import './Accreditations.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function AccreditationsPulse() {
  return (
    <svg className="accreditations__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="accreditations__pulse-track" d={PULSE_PATH} />
      <path className="accreditations__pulse-path" d={PULSE_PATH} />
      <circle className="accreditations__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

export function Accreditations() {
  const { badge, title, subtitleLead, subtitleRest, bodyLead, bodyEmphasis, bodyRest, accreditations } =
    accreditationsContent

  return (
    <section className="accreditations" id="accreditations" aria-labelledby="accreditations-heading">
      <div className="accreditations__decor accreditations__decor--dots" aria-hidden="true" />
      <div className="accreditations__decor accreditations__decor--cross" aria-hidden="true">
        <MedicalCrossIcon className="accreditations__cross-icon" />
      </div>

      <div className="accreditations__inner">
        <header className="accreditations__header">
          <span className="accreditations__badge">
            <VerifiedIcon className="accreditations__badge-icon" />
            {badge}
          </span>

          <h2 id="accreditations-heading" className="accreditations__title">
            {title}
          </h2>

          <p className="accreditations__subtitle">
            <span>{subtitleLead}</span> <span className="accreditations__subtitle-rest">{subtitleRest}</span>
          </p>

          <AccreditationsPulse />

          <p className="accreditations__body">
            {bodyLead}
            <strong>{bodyEmphasis}</strong>
            {bodyRest}
          </p>
        </header>

        <ul className="accreditations__grid">
          {accreditations.map((item) => (
            <li key={item.id} className="accreditation-card">
              <div className="accreditation-card__logo-wrap">
                <img
                  className="accreditation-card__logo"
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p
                className={`accreditation-card__label${
                  item.compactLabel ? ' accreditation-card__label--compact' : ''
                }`}
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
