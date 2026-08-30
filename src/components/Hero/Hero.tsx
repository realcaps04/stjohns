import { heroContent, patientTrust, statistics } from '../../data/content'
import { HeroCTA } from '../HeroCTA/HeroCTA'
import { PatientTrustCard } from '../PatientTrustCard/PatientTrustCard'
import { StatisticsCard } from '../StatisticsCard/StatisticsCard'
import { TrustBadge } from '../TrustBadge/TrustBadge'
import './Hero.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function PulseLine() {
  return (
    <svg className="hero__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="hero__pulse-track" d={PULSE_PATH} />
      <path className="hero__pulse-path" d={PULSE_PATH} pathLength="420" />
      <circle className="hero__pulse-dot" r="3" fill="currentColor">
        <animateMotion dur="5.8s" repeatCount="indefinite" path={PULSE_PATH} />
      </circle>
    </svg>
  )
}

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__copy">
          <TrustBadge label={heroContent.badge} availability={heroContent.availability} />

          <h1 id="hero-heading" className="hero__title">
            <span>{heroContent.headline[0]}</span>
            <span>{heroContent.headline[1]}</span>
          </h1>

          <PulseLine />

          <p className="hero__body">{heroContent.body}</p>

          <HeroCTA label={heroContent.ctaLabel} href={heroContent.ctaHref} />
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <img
              className="hero__photo"
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              width={1536}
              height={1024}
            />
          </div>

          <PatientTrustCard
            className="hero__trust"
            count={patientTrust.count}
            label={patientTrust.label}
            avatars={patientTrust.avatars}
          />
        </div>

        <div className="hero__stats">
          <StatisticsCard items={statistics} />
        </div>
      </div>
    </section>
  )
}
