import { type FormEvent, useState } from 'react'
import { contactContent, type ContactSubject } from '../../data/contact'
import { MailIcon, MedicalCrossIcon, PhoneIcon, PinIcon, SendIcon } from '../icons'
import './Contact.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

type FormState = {
  name: string
  email: string
  phone: string
  subject: ContactSubject | ''
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function ContactPulse() {
  return (
    <svg className="contact__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="contact__pulse-track" d={PULSE_PATH} />
      <path className="contact__pulse-path" d={PULSE_PATH} />
      <circle className="contact__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

export function Contact() {
  const { badge, titleLead, titleRest, subtitle, form, subjects, info, map } = contactContent
  const [formState, setFormState] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setFormState((current) => ({ ...current, [key]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subjectLabel = subjects.find((item) => item.value === formState.subject)?.label ?? 'Enquiry'
    const body = [
      `Name: ${formState.name}`,
      `Mobile: ${formState.phone}`,
      `Enquiry: ${subjectLabel}`,
      '',
      formState.message,
    ].join('\n')

    const mailto = `mailto:${info.email}?subject=${encodeURIComponent(`Website enquiry – ${subjectLabel}`)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  const resetForm = () => {
    setFormState(initialForm)
    setSubmitted(false)
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__decor contact__decor--glow" aria-hidden="true" />

      <div className="contact__inner">
        <header className="contact__header">
          <span className="contact__badge">
            <MedicalCrossIcon className="contact__badge-icon" />
            {badge}
          </span>
          <h2 id="contact-heading" className="contact__title">
            <span className="contact__title-lead">{titleLead}</span>{' '}
            <span className="contact__title-rest">{titleRest}</span>
          </h2>
          <p className="contact__subtitle">{subtitle}</p>
          <ContactPulse />
        </header>

        <div className="contact__layout">
          <aside className="contact__info-card" aria-label="Hospital contact information">
            <a className="contact__info-item" href={info.phoneHref}>
              <span className="contact__info-icon" aria-hidden="true">
                <PhoneIcon />
              </span>
              <span>
                <span className="contact__info-label">Call</span>
                <span className="contact__info-value">{info.phone}</span>
              </span>
            </a>

            <a className="contact__info-item" href={info.appointmentHref}>
              <span className="contact__info-icon" aria-hidden="true">
                <PhoneIcon />
              </span>
              <span>
                <span className="contact__info-label">Appointment Booking</span>
                <span className="contact__info-value">{info.appointmentPhone}</span>
              </span>
            </a>

            <a className="contact__info-item" href={info.emailHref}>
              <span className="contact__info-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <span>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">{info.email}</span>
              </span>
            </a>

            <div className="contact__info-item contact__info-item--static">
              <span className="contact__info-icon" aria-hidden="true">
                <PinIcon />
              </span>
              <span>
                <span className="contact__info-label">Our Location</span>
                <span className="contact__info-value">{info.address}</span>
                <a
                  className="contact__directions"
                  href={info.directionsHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {info.directionsLabel}
                </a>
              </span>
            </div>

            <div className="contact__hours">
              <p className="contact__hours-title">{info.hoursTitle}</p>
              <p className="contact__hours-note">{info.hoursNote}</p>
            </div>
          </aside>

          {submitted ? (
            <div className="contact__success">
              <h3 className="contact__success-title">{form.successTitle}</h3>
              <p className="contact__success-message">{form.successMessage}</p>
              <button type="button" className="contact__submit contact__submit--secondary" onClick={resetForm}>
                {form.resetLabel}
              </button>
            </div>
          ) : (
            <div className="contact__form-wrap">
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-head">
                  <h3 className="contact__form-title">{form.title}</h3>
                  <p className="contact__form-subtitle">{form.subtitle}</p>
                </div>

                <div className="contact__fields">
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="contact-name">
                      {form.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      className="contact__input"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      placeholder={form.namePlaceholder}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact__field">
                    <label className="contact__label" htmlFor="contact-email">
                      {form.emailLabel} *
                    </label>
                    <input
                      id="contact-email"
                      className="contact__input"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      placeholder={form.emailPlaceholder}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="contact__field">
                    <label className="contact__label" htmlFor="contact-phone">
                      {form.phoneLabel} *
                    </label>
                    <input
                      id="contact-phone"
                      className="contact__input"
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      placeholder={form.phonePlaceholder}
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="contact__field">
                    <label className="contact__label" htmlFor="contact-subject">
                      {form.subjectLabel}
                    </label>
                    <select
                      id="contact-subject"
                      className={[
                        'contact__input',
                        'contact__select',
                        !formState.subject ? 'contact__select--placeholder' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      name="subject"
                      value={formState.subject}
                      onChange={(event) =>
                        updateField('subject', event.target.value as ContactSubject | '')
                      }
                      required
                    >
                      <option value="" disabled>
                        {form.subjectPlaceholder}
                      </option>
                      {subjects.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact__field contact__field--full">
                    <label className="contact__label" htmlFor="contact-message">
                      {form.messageLabel} *
                    </label>
                    <textarea
                      id="contact-message"
                      className="contact__input contact__textarea"
                      name="message"
                      value={formState.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      placeholder={form.messagePlaceholder}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="contact__submit">
                  {form.submitLabel}
                  <SendIcon className="contact__submit-icon" />
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="contact__map-wrap">
          <h3 className="contact__map-title">{map.title}</h3>
          <iframe
            className="contact__map"
            title="St. Johns Hospital Kattappana on Google Maps"
            src={map.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
