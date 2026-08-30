import { useState } from 'react'
import { doctorsContent, featuredDoctors } from '../../data/doctors'
import { ArrowRightIcon, DoctorIcon } from '../icons'
import { DoctorCard } from './DoctorCard'
import './Doctors.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function DoctorsPulse() {
  return (
    <svg className="doctors__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="doctors__pulse-track" d={PULSE_PATH} />
      <path className="doctors__pulse-path" d={PULSE_PATH} />
      <circle className="doctors__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

export function Doctors() {
  const [showAll, setShowAll] = useState(false)
  const { badge, titleLead, titleRest, body, viewAllLabel, bookLabel, bookHref, doctors } = doctorsContent
  const visibleDoctors = showAll ? doctors : featuredDoctors

  return (
    <section className="doctors" id="find-doctor" aria-labelledby="doctors-heading">
      <div className="doctors__decor doctors__decor--dots" aria-hidden="true" />
      <div className="doctors__decor doctors__decor--wave" aria-hidden="true" />

      <div className="doctors__inner">
        <div className="doctors__header">
          <div className="doctors__intro">
            <span className="doctors__badge">
              <DoctorIcon className="doctors__badge-icon" />
              {badge}
            </span>

            <h2 id="doctors-heading" className="doctors__title">
              <span className="doctors__title-lead">{titleLead}</span>
              <span className="doctors__title-rest">{titleRest}</span>
            </h2>

            <DoctorsPulse />
          </div>

          <p className="doctors__body">{body}</p>
        </div>

        <div className={`doctors__grid ${showAll ? 'doctors__grid--all' : ''}`}>
          {visibleDoctors.map((item) => (
            <DoctorCard key={item.id} doctor={item} bookLabel={bookLabel} bookHref={bookHref} />
          ))}
        </div>

        <div className="doctors__marquee" role="region" aria-label="Doctors carousel">
          <div className="doctors__marquee-track">
            {[0, 1].map((set) => (
              <div
                key={set}
                className="doctors__marquee-set"
                aria-hidden={set === 1 ? true : undefined}
              >
                {visibleDoctors.map((item) => (
                  <DoctorCard
                    key={`${set}-${item.id}`}
                    doctor={item}
                    bookLabel={bookLabel}
                    bookHref={bookHref}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="doctors__footer">
          <button
            type="button"
            className="doctors__view-all"
            onClick={() => setShowAll((open) => !open)}
            aria-expanded={showAll}
          >
            {showAll ? 'Show Featured Doctors' : viewAllLabel}
            <ArrowRightIcon className="doctors__view-all-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}
