import { useEffect, useId, useRef, useState } from 'react'
import { CloseIcon, SendIcon } from '../icons'
import './Chatbot.css'

const quickActions = [
  { label: 'Book Appointment', href: '#contact' },
  { label: 'Find a Doctor', href: '#find-doctor' },
  { label: 'Our Services', href: '#services' },
]

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const panelId = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    const timer = window.setTimeout(() => inputRef.current?.focus(), 120)
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')
  }

  return (
    <div className={`chatbot${open ? ' chatbot--open' : ''}`}>
      {open ? (
        <section
          className="chatbot__panel"
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-label="Hospital assistant chat"
        >
          <header className="chatbot__header">
            <div className="chatbot__header-copy">
              <img
                className="chatbot__avatar"
                src="/images/chatbot-icon.png"
                alt=""
                width={44}
                height={44}
              />
              <div>
                <p className="chatbot__title">Care Assistant</p>
                <p className="chatbot__status">
                  <span className="chatbot__status-dot" aria-hidden="true" />
                  Online
                </p>
              </div>
            </div>
            <button
              type="button"
              className="chatbot__close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <CloseIcon className="chatbot__close-icon" />
            </button>
          </header>

          <div className="chatbot__body">
            <div className="chatbot__message chatbot__message--bot">
              <p>
                Hello! I&apos;m here to help you with appointments, doctors, and hospital services at
                St Johns Hospital, Kattappana.
              </p>
            </div>
            <div className="chatbot__message chatbot__message--bot">
              <p>Live chat replies will be available soon. For now, use the quick options below.</p>
            </div>

            <div className="chatbot__actions">
              {quickActions.map((action) => (
                <a
                  key={action.href}
                  className="chatbot__action"
                  href={action.href}
                  onClick={() => setOpen(false)}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <form className="chatbot__composer" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="chatbot__input"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button className="chatbot__send" type="submit" aria-label="Send message" disabled={!message.trim()}>
              <SendIcon className="chatbot__send-icon" />
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="chatbot__toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      >
        {open ? (
          <CloseIcon className="chatbot__toggle-icon" />
        ) : (
          <img
            className="chatbot__toggle-image"
            src="/images/chatbot-icon.png"
            alt=""
            width={72}
            height={72}
          />
        )}
      </button>
    </div>
  )
}
