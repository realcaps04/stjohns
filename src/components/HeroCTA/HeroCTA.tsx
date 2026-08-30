import { PlayIcon } from '../icons'
import './HeroCTA.css'

type HeroCTAProps = {
  label: string
  href: string
}

export function HeroCTA({ label, href }: HeroCTAProps) {
  return (
    <a className="hero-cta" href={href}>
      <span className="hero-cta__play">
        <PlayIcon className="hero-cta__icon" />
      </span>
      <span className="hero-cta__label">{label}</span>
    </a>
  )
}
