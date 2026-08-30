import {
  sustainableHealthcareContent,
  type SustainableInitiativeIcon,
} from '../../data/sustainable-healthcare'
import { ArrowRightIcon, OxygenPlantIcon, RainHarvestIcon, SolarPanelIcon } from '../icons'
import './SustainableHealthcare.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function SustainablePulse() {
  return (
    <svg className="sustainable__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="sustainable__pulse-track" d={PULSE_PATH} />
      <path className="sustainable__pulse-path" d={PULSE_PATH} />
      <circle className="sustainable__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function InitiativeIcon({ icon }: { icon: SustainableInitiativeIcon }) {
  const className = 'sustainable-card__glyph-icon'
  if (icon === 'solar') return <SolarPanelIcon className={className} />
  if (icon === 'oxygen') return <OxygenPlantIcon className={className} />
  return <RainHarvestIcon className={className} />
}

export function SustainableHealthcare() {
  const { titleLead, titleRest, body, illustration, illustrationAlt, initiatives } = sustainableHealthcareContent

  return (
    <section className="sustainable" id="sustainability" aria-labelledby="sustainable-heading">
      <div className="sustainable__decor sustainable__decor--dots-top" aria-hidden="true" />
      <div className="sustainable__decor sustainable__decor--dots-bottom" aria-hidden="true" />
      <div className="sustainable__decor sustainable__decor--wave" aria-hidden="true" />

      <div className="sustainable__inner">
        <div className="sustainable__top">
          <div className="sustainable__copy">
            <h2 id="sustainable-heading" className="sustainable__title">
              <span className="sustainable__title-lead">{titleLead}</span>{' '}
              <span className="sustainable__title-rest">{titleRest}</span>
            </h2>

            <SustainablePulse />

            <p className="sustainable__body">{body}</p>
          </div>

          <div className="sustainable__illustration">
            <img src={illustration} alt={illustrationAlt} loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="sustainable__cards">
          {initiatives.map((initiative) => (
            <article key={initiative.id} className="sustainable-card">
              <span className="sustainable-card__glyph" aria-hidden="true">
                <InitiativeIcon icon={initiative.icon} />
              </span>

              <div className="sustainable-card__body">
                <h3 className="sustainable-card__title">{initiative.title}</h3>
                <p className="sustainable-card__text">{initiative.description}</p>
                <a
                  className="sustainable-card__link"
                  href={initiative.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {initiative.ctaLabel}
                  <ArrowRightIcon className="sustainable-card__link-icon" />
                </a>
              </div>

              <div className="sustainable-card__media">
                <img src={initiative.image} alt={initiative.imageAlt} loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
