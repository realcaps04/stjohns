import { DoctorIcon } from '../icons'
import './FindDoctorButton.css'

type FindDoctorButtonProps = {
  href?: string
  className?: string
  full?: boolean
}

export function FindDoctorButton({
  href = '#find-doctor',
  className = '',
  full = false,
}: FindDoctorButtonProps) {
  const classes = ['find-doctor-btn', full ? 'find-doctor-btn--full' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href}>
      <DoctorIcon className="find-doctor-btn__icon" />
      <span>Find my Doctor</span>
    </a>
  )
}
