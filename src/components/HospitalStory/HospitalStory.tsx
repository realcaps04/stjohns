import { hospitalStoryContent, type HospitalStoryStatIcon } from '../../data/hospital-story'
import {
  ArrowRightIcon,
  AwardIcon,
  BuildingIcon,
  CompassionIcon,
  DoctorIcon,
  MedicalCrossIcon,
  SpecialtyIcon,
} from '../icons'
import { AboutVideo } from '../About/AboutVideo'
import './HospitalStory.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function StoryPulse() {
  return (
    <svg className="hospital-story__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="hospital-story__pulse-track" d={PULSE_PATH} />
      <path className="hospital-story__pulse-path" d={PULSE_PATH} />
      <circle className="hospital-story__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function StatIcon({ icon }: { icon: HospitalStoryStatIcon }) {
  const className = 'hospital-story-stat__icon'
  if (icon === 'years') return <AwardIcon className={className} />
  if (icon === 'beds') return <BuildingIcon className={className} />
  if (icon === 'disciplines') return <SpecialtyIcon className={className} />
  return <DoctorIcon className={className} />
}

export function HospitalStory() {
  const { badge, title, body, videosCtaLabel, videosCtaHref, video, stats, mission } = hospitalStoryContent

  return (
    <section className="hospital-story" id="hospital-story" aria-labelledby="hospital-story-heading">
      <div className="hospital-story__decor hospital-story__decor--dots" aria-hidden="true" />
      <div className="hospital-story__decor hospital-story__decor--wave" aria-hidden="true" />

      <div className="hospital-story__inner">
        <div className="hospital-story__top">
          <div className="hospital-story__copy">
            <span className="hospital-story__badge">
              <MedicalCrossIcon className="hospital-story__badge-icon" />
              {badge}
            </span>

            <h2 id="hospital-story-heading" className="hospital-story__title">
              {title}
            </h2>

            <StoryPulse />

            <p className="hospital-story__body">{body}</p>

            <a
              className="hospital-story__cta"
              href={videosCtaHref}
              target="_blank"
              rel="noreferrer"
            >
              {videosCtaLabel}
              <ArrowRightIcon className="hospital-story__cta-icon" />
            </a>
          </div>

          <div className="hospital-story__media">
            <AboutVideo embedUrl={video.embedUrl} thumbnail={video.thumbnail} title={video.title} />
          </div>
        </div>

        <ul className="hospital-story__stats">
          {stats.map((item) => (
            <li key={item.id} className="hospital-story-stat">
              <span className="hospital-story-stat__glyph" aria-hidden="true">
                <StatIcon icon={item.icon} />
              </span>
              <div className="hospital-story-stat__copy">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="hospital-story-mission">
          <span className="hospital-story-mission__icon" aria-hidden="true">
            <CompassionIcon className="hospital-story-mission__icon-svg" />
          </span>
          <div className="hospital-story-mission__copy">
            <h3 className="hospital-story-mission__title">{mission.title}</h3>
            <p className="hospital-story-mission__body">{mission.body}</p>
          </div>
          <a className="hospital-story-mission__cta" href={mission.ctaHref}>
            {mission.ctaLabel}
            <ArrowRightIcon className="hospital-story-mission__cta-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
