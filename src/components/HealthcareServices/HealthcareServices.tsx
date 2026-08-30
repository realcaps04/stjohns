import { healthcareServicesContent, type HealthcareServiceIcon } from '../../data/healthcare-services'
import {
  ArrowRightIcon,
  CompassionIcon,
  EyeCareIcon,
  LaboratoryIcon,
  NursingIcon,
  NutritionIcon,
  PharmacyIcon,
  PhysiotherapyIcon,
  PsychologyIcon,
  RadiologyIcon,
  ServicesOfferIcon,
} from '../icons'
import './HealthcareServices.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function HealthcarePulse() {
  return (
    <svg className="healthcare-services__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="healthcare-services__pulse-track" d={PULSE_PATH} />
      <path className="healthcare-services__pulse-path" d={PULSE_PATH} />
      <circle className="healthcare-services__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function ServiceIcon({ icon }: { icon: HealthcareServiceIcon }) {
  const className = 'healthcare-card__glyph-icon'
  if (icon === 'pharmacy') return <PharmacyIcon className={className} />
  if (icon === 'laboratory') return <LaboratoryIcon className={className} />
  if (icon === 'nursing') return <NursingIcon className={className} />
  if (icon === 'radiology') return <RadiologyIcon className={className} />
  if (icon === 'patient-care') return <CompassionIcon className={className} />
  if (icon === 'eye-care') return <EyeCareIcon className={className} />
  if (icon === 'physiotherapy') return <PhysiotherapyIcon className={className} />
  if (icon === 'nutrition') return <NutritionIcon className={className} />
  return <PsychologyIcon className={className} />
}

function HealthcareCard({
  service,
  duplicate = false,
}: {
  service: (typeof healthcareServicesContent.services)[number]
  duplicate?: boolean
}) {
  return (
    <article className="healthcare-card" aria-hidden={duplicate || undefined}>
      <div className="healthcare-card__media">
        <img src={service.image} alt={duplicate ? '' : service.imageAlt} loading="lazy" decoding="async" />
      </div>
      <span className="healthcare-card__glyph" aria-hidden="true">
        <ServiceIcon icon={service.icon} />
      </span>
      <div className="healthcare-card__body">
        <h3 className="healthcare-card__title">{service.title}</h3>
        <p className="healthcare-card__text">{service.description}</p>
        <a
          className="healthcare-card__link"
          href={service.href}
          target="_blank"
          rel="noreferrer"
          tabIndex={duplicate ? -1 : undefined}
        >
          {service.ctaLabel}
          <ArrowRightIcon className="healthcare-card__link-icon" />
        </a>
      </div>
    </article>
  )
}

export function HealthcareServices() {
  const { badge, titleLead, titleRest, body, services, footer } = healthcareServicesContent
  const loopedServices = [...services, ...services]

  return (
    <section className="healthcare-services" id="departments" aria-labelledby="healthcare-services-heading">
      <div className="healthcare-services__decor healthcare-services__decor--plus" aria-hidden="true" />
      <div className="healthcare-services__decor healthcare-services__decor--dots" aria-hidden="true" />

      <div className="healthcare-services__inner">
        <header className="healthcare-services__header">
          <span className="healthcare-services__badge">
            <ServicesOfferIcon className="healthcare-services__badge-icon" />
            {badge}
          </span>

          <h2 id="healthcare-services-heading" className="healthcare-services__title">
            <span className="healthcare-services__title-lead">{titleLead}</span>{' '}
            <span className="healthcare-services__title-rest">{titleRest}</span>
          </h2>

          <HealthcarePulse />

          <p className="healthcare-services__body">{body}</p>
        </header>

        <div className="healthcare-services__marquee" aria-label="Healthcare services carousel">
          <div className="healthcare-services__track">
            {loopedServices.map((service, index) => (
              <HealthcareCard
                key={`${service.id}-${index}`}
                service={service}
                duplicate={index >= services.length}
              />
            ))}
          </div>
        </div>

        <div className="healthcare-services__footer">
          <span className="healthcare-services__footer-icon" aria-hidden="true">
            <CompassionIcon className="healthcare-services__footer-icon-svg" />
          </span>
          <div className="healthcare-services__footer-copy">
            <h3 className="healthcare-services__footer-title">{footer.title}</h3>
            <p className="healthcare-services__footer-text">{footer.body}</p>
          </div>
          <a className="healthcare-services__footer-cta" href={footer.ctaHref}>
            {footer.ctaLabel}
            <ArrowRightIcon className="healthcare-services__footer-cta-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
