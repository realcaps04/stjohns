import { ShieldCheckIcon } from '../icons'
import './TrustBadge.css'

type TrustBadgeProps = {
  label: string
  availability: string
}

export function TrustBadge({ label, availability }: TrustBadgeProps) {
  return (
    <div className="trust-badge">
      <span className="trust-badge__item">
        <ShieldCheckIcon className="trust-badge__shield" />
        {label}
      </span>
      <span className="trust-badge__rule" aria-hidden="true" />
      <span className="trust-badge__live">
        <span className="trust-badge__dot" aria-hidden="true" />
        <span className="trust-badge__live-text">{availability}</span>
      </span>
    </div>
  )
}
