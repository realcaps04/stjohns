import { healthCheckupContent, type CheckupFeatureIcon } from '../../data/health-checkup'
import {
  ArrowRightIcon,
  CompassionIcon,
  DoctorIcon,
  HeartIcon,
  LaboratoryIcon,
  MedicalCrossIcon,
  PeopleIcon,
  SafeShieldIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  TechIcon,
  VerifiedIcon,
} from '../icons'
import './HealthCheckup.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function CheckupPulse() {
  return (
    <svg className="checkup__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="checkup__pulse-track" d={PULSE_PATH} />
      <path className="checkup__pulse-path" d={PULSE_PATH} />
      <circle className="checkup__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function SectionPulse() {
  return (
    <svg className="checkup__section-pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="checkup__pulse-track" d={PULSE_PATH} />
      <path className="checkup__pulse-path" d={PULSE_PATH} />
      <circle className="checkup__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function FeatureIcon({ icon }: { icon: CheckupFeatureIcon }) {
  const className = 'checkup-card__feature-icon'
  if (icon === 'heart') return <HeartIcon className={className} />
  if (icon === 'lab') return <LaboratoryIcon className={className} />
  if (icon === 'doctor') return <DoctorIcon className={className} />
  if (icon === 'cardiac') return <StethoscopeIcon className={className} />
  return <SafeShieldIcon className={className} />
}

function TrustHighlightIcon({ icon }: { icon: 'team' | 'tech' | 'verified' | 'care' }) {
  const className = 'checkup-trust__highlight-icon'
  if (icon === 'team') return <PeopleIcon className={className} />
  if (icon === 'tech') return <TechIcon className={className} />
  if (icon === 'verified') return <VerifiedIcon className={className} />
  return <CompassionIcon className={className} />
}

function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function HealthCheckup() {
  const { titleLead, titleRest, body, image, packagesHeading, packages, trust } = healthCheckupContent

  return (
    <section className="checkup" id="health-checkup" aria-labelledby="checkup-heading">
      <div className="checkup__decor checkup__decor--ekg" aria-hidden="true" />
      <div className="checkup__decor checkup__decor--glow" aria-hidden="true" />

      <div className="checkup__inner">
        <div className="checkup__hero">
          <div className="checkup__copy">
            <h2 id="checkup-heading" className="checkup__title">
              <span className="checkup__title-lead">{titleLead}</span>{' '}
              <span className="checkup__title-rest">{titleRest}</span>
            </h2>

            <CheckupPulse />

            <p className="checkup__body">{body}</p>
          </div>

          <div className="checkup__visual">
            <div className="checkup__heart-ring" aria-hidden="true" />
            <div className="checkup__shield" aria-hidden="true">
              <MedicalCrossIcon className="checkup__shield-icon" />
            </div>
            <div className="checkup__photo-wrap">
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        <div className="checkup__packages-head">
          <span className="checkup__packages-line" aria-hidden="true" />
          <h3 className="checkup__packages-title">{packagesHeading}</h3>
          <SectionPulse />
          <span className="checkup__packages-line" aria-hidden="true" />
        </div>

        <div className="checkup__cards">
          {packages.map((pkg) => (
            <article key={pkg.id} className={`checkup-card checkup-card--${pkg.theme}`}>
              <header className="checkup-card__header">
                <span className="checkup-card__glyph" aria-hidden="true">
                  <StethoscopeIcon className="checkup-card__glyph-icon" />
                </span>
                <h4 className="checkup-card__title">{pkg.title}</h4>
              </header>

              <p className="checkup-card__description">{pkg.description}</p>

              <div className="checkup-card__body">
                <ul className="checkup-card__features">
                  {pkg.features.map((feature) => (
                    <li key={feature.label} className="checkup-card__feature">
                      <span className="checkup-card__feature-glyph" aria-hidden="true">
                        <FeatureIcon icon={feature.icon} />
                      </span>
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="checkup-card__pricing">
                  <CheckupPulse />
                  <span className="checkup-card__price-label">{pkg.priceLabel}</span>
                  <p className="checkup-card__price">{formatPrice(pkg.price)}</p>
                  <a className="checkup-card__cta" href={pkg.ctaHref}>
                    {pkg.ctaLabel}
                    <ArrowRightIcon className="checkup-card__cta-icon" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="checkup-trust">
          <div className="checkup-trust__lead">
            <span className="checkup-trust__icon" aria-hidden="true">
              <ShieldCheckIcon className="checkup-trust__icon-svg" />
            </span>
            <div>
              <h3 className="checkup-trust__title">{trust.title}</h3>
              <p className="checkup-trust__body">{trust.body}</p>
            </div>
          </div>

          <ul className="checkup-trust__highlights">
            {trust.highlights.map((item) => (
              <li key={item.label} className="checkup-trust__highlight">
                <span className="checkup-trust__highlight-glyph" aria-hidden="true">
                  <TrustHighlightIcon icon={item.icon} />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
