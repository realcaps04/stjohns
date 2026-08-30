import { servicesContent } from '../../data/content'
import type { ServiceDeptIcon, ServiceFeatureIcon } from '../../data/content'
import {
  ArrowRightIcon,
  CompassionIcon,
  FaceIcon,
  MedicalCrossIcon,
  OralIcon,
  SafeShieldIcon,
  SkinIcon,
  TeamShieldIcon,
  TechIcon,
} from '../icons'
import './Services.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function ServicesPulse() {
  return (
    <svg className="services__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="services__pulse-track" d={PULSE_PATH} />
      <path className="services__pulse-path" d={PULSE_PATH} />
      <circle className="services__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function DeptIcon({ icon }: { icon: ServiceDeptIcon }) {
  const className = 'service-card__glyph-icon'
  if (icon === 'face') return <FaceIcon className={className} />
  if (icon === 'oral') return <OralIcon className={className} />
  return <SkinIcon className={className} />
}

function FeatureIcon({ icon }: { icon: ServiceFeatureIcon }) {
  const className = 'services-feature__icon'
  if (icon === 'team') return <TeamShieldIcon className={className} />
  if (icon === 'tech') return <TechIcon className={className} />
  if (icon === 'safe') return <SafeShieldIcon className={className} />
  return <CompassionIcon className={className} />
}

export function Services() {
  const { badge, titleLead, titleRest, body, ctaLabel, ctaHref, departments, features } = servicesContent

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services__decor services__decor--dots" aria-hidden="true" />
      <div className="services__decor services__decor--wave" aria-hidden="true" />

      <div className="services__inner">
        <div className="services__top">
          <div className="services__copy">
            <span className="services__badge">
              <MedicalCrossIcon className="services__badge-icon" />
              {badge}
            </span>

            <h2 id="services-heading" className="services__title">
              <span className="services__title-lead">{titleLead}</span>
              <span className="services__title-rest">{titleRest}</span>
            </h2>

            <ServicesPulse />

            <p className="services__body">{body}</p>

            <a className="services__cta" href={ctaHref}>
              {ctaLabel}
              <ArrowRightIcon className="services__cta-icon" />
            </a>
          </div>

          <div className="services__cards">
            {departments.map((dept) => (
              <article key={dept.id} className="service-card">
                <div className="service-card__media">
                  <img src={dept.image} alt={dept.imageAlt} loading="lazy" />
                  <span className="service-card__glyph" aria-hidden="true">
                    <DeptIcon icon={dept.icon} />
                  </span>
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{dept.title}</h3>
                  <p className="service-card__text">{dept.description}</p>
                  <a className="service-card__link" href={dept.href}>
                    Learn More
                    <ArrowRightIcon className="service-card__link-icon" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ul className="services-features">
          {features.map((feature) => (
            <li key={feature.id} className="services-feature">
              <span className="services-feature__glyph">
                <FeatureIcon icon={feature.icon} />
              </span>
              <div className="services-feature__copy">
                <strong>{feature.title}</strong>
                <span>{feature.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
