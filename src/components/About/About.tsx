import { aboutContent } from '../../data/content'
import {
  ArrowRightIcon,
  MedicalCrossIcon,
  PeopleIcon,
  SpecialtyIcon,
  StethoscopeIcon,
} from '../icons'
import type { AboutHighlightIcon } from '../../data/content'
import { AboutVideo } from './AboutVideo'
import './About.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function AboutPulse() {
  return (
    <svg className="about__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="about__pulse-track" d={PULSE_PATH} />
      <path className="about__pulse-path" d={PULSE_PATH} />
      <circle className="about__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function HighlightIcon({ icon }: { icon: AboutHighlightIcon }) {
  const className = 'about-highlight__icon'
  if (icon === 'stethoscope') return <StethoscopeIcon className={className} />
  if (icon === 'specialty') return <SpecialtyIcon className={className} />
  return <PeopleIcon className={className} />
}

export function About() {
  const { badge, titleLead, titleRest, subtitle, bodyLead, bodyRest, ctaLabel, ctaHref, video, highlights } =
    aboutContent

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__decor about__decor--dots" aria-hidden="true" />
      <div className="about__decor about__decor--wave" aria-hidden="true" />

      <div className="about__inner">
        <div className="about__top">
          <div className="about__copy">
            <span className="about__badge">
              <MedicalCrossIcon className="about__badge-icon" />
              {badge}
            </span>

            <h2 id="about-heading" className="about__title">
              <span className="about__title-lead">{titleLead}</span>
              <span className="about__title-rest">{titleRest}</span>
            </h2>

            <AboutPulse />

            <p className="about__subtitle">{subtitle}</p>
            <p className="about__body">
              <strong>{bodyLead}</strong>
              {bodyRest}
            </p>

            <a className="about__cta" href={ctaHref}>
              {ctaLabel}
              <ArrowRightIcon className="about__cta-icon" />
            </a>
          </div>

          <div className="about__media">
            <AboutVideo
              embedUrl={video.embedUrl}
              thumbnail={video.thumbnail}
              title={video.title}
            />
          </div>
        </div>

        <ul className="about-highlights">
          {highlights.map((item) => (
            <li key={item.id} className="about-highlight">
              <span className="about-highlight__glyph">
                <HighlightIcon icon={item.icon} />
              </span>
              <div className="about-highlight__copy">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <span className="about-highlight__rule" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
