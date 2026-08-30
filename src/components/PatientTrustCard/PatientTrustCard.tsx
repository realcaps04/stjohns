import { VerifiedIcon } from '../icons'
import './PatientTrustCard.css'

type Avatar = {
  src: string
  alt: string
}

type PatientTrustCardProps = {
  count: string
  label: string
  avatars: readonly Avatar[]
  className?: string
}

export function PatientTrustCard({
  count,
  label,
  avatars,
  className = '',
}: PatientTrustCardProps) {
  return (
    <aside className={`patient-trust ${className}`.trim()} aria-label={`${count} ${label}`}>
      <div className="patient-trust__avatars">
        {avatars.map((avatar) => (
          <span key={avatar.src} className="patient-trust__avatar">
            <img src={avatar.src} alt={avatar.alt} width={48} height={48} />
          </span>
        ))}
      </div>
      <div className="patient-trust__copy">
        <strong>{count}</strong>
        <span>{label}</span>
      </div>
      <VerifiedIcon className="patient-trust__check" />
    </aside>
  )
}
