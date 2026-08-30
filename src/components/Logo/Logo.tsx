import './Logo.css'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      className={`logo ${className}`.trim()}
      src="/images/logo.png"
      width={716}
      height={282}
      alt="St. John's Hospital, Kattappana — Life in abundance through healing"
    />
  )
}
