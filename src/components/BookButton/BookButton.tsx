import { CalendarIcon } from '../icons'
import './BookButton.css'

type BookButtonProps = {
  href?: string
  className?: string
  compact?: boolean
  full?: boolean
}

export function BookButton({
  href = '#contact',
  className = '',
  compact = false,
  full = false,
}: BookButtonProps) {
  const classes = [
    'book-btn',
    compact ? 'book-btn--compact' : '',
    full ? 'book-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href}>
      <CalendarIcon className="book-btn__icon" />
      <span className="book-btn__label">Book Appointment</span>
    </a>
  )
}
