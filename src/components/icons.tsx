type IconProps = {
  className?: string
}

export function DoctorIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7.8" r="3.05" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.4 19.4c.55-3.15 3.05-4.95 6.6-4.95s6.05 1.8 6.6 4.95"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7.5h14M5 12h14M5 16.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9.2 7.6v8.8l7.4-4.4-7.4-4.4Z" fill="currentColor" />
    </svg>
  )
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 5.5 6.2v5.3c0 4.1 2.8 7.4 6.5 8.5 3.7-1.1 6.5-4.4 6.5-8.5V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9.2 12.1 1.9 1.9 3.7-3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function VerifiedIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path d="m8.4 12.2 2.3 2.3 4.9-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AwardIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47l-3.58-2.69a1 1 0 0 0-1.2 0l-3.58 2.69a.5.5 0 0 1-.81-.47l1.51-8.53"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.4 3.8h2.3l1.1 2.8-1.4 1.4a12.4 12.4 0 0 0 6.6 6.6l1.4-1.4 2.8 1.1v2.3c0 .8-.6 1.5-1.4 1.6-8.2.7-14.9-6-14.2-14.2.1-.8.8-1.4 1.6-1.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4.2 7.2 7.8 6.2 7.8-6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.2-5.2 6.2-10.2A6.2 6.2 0 0 0 12 4.6a6.2 6.2 0 0 0-6.2 6.2C5.8 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.8" r="1.85" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M4 22h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6v4M10 8h4M6 14h12M6 18h12M10 22v-2a2 2 0 0 1 4 0v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MedicalCrossIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function StethoscopeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 4v4a4 4 0 0 0 8 0V4M10 4h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8v2a6 6 0 0 0 6 6h1a5 5 0 0 1 5 5v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function SpecialtyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 5.5 6.2v5.3c0 4.1 2.8 7.4 6.5 8.5 3.7-1.1 6.5-4.4 6.5-8.5V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 8v5M9.5 10.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FaceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 18.5c1.2-2.4 3.2-3.7 5.5-3.7s4.3 1.3 5.5 3.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function OralIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v2.5c0 3-2 5.5-4 5.5S8 13.5 8 10.5V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 14.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SkinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3c-4 3.5-6 7-6 10.5a6 6 0 0 0 12 0C18 10 16 6.5 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 13.5c.8 1.2 2.2 2 3.5 2s2.7-.8 3.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function TeamShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 6 6v5.2c0 3.8 2.6 7.3 6 8.3 3.4-1 6-4.5 6-8.3V6l-6-2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 14.5c.8 1 1.8 1.5 2.5 1.5s1.7-.5 2.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function TechIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 19h8M10 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 9v3M10.5 10.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SafeShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 5.5 6.2v5.3c0 4.1 2.8 7.4 6.5 8.5 3.7-1.1 6.5-4.4 6.5-8.5V6.2L12 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m9.2 12.1 1.9 1.9 3.7-3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CompassionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 20.5c1.5-2.5 3.5-3.5 4.5-3.5s3 1 4.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 20.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SendIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m4.5 12 15-6.5-3 6.5 3 6.5-15-6.5 5.5 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 12h9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function ServicesOfferIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5.5c-2.2 2.4-4 4.6-4 6.8a4 4 0 0 0 8 0c0-2.2-1.8-4.4-4-6.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8.5 18.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 16.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function PharmacyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v8M8.5 12h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function LaboratoryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3h6l3 9a4.5 4.5 0 0 1-8.6 1.7L9 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function NursingIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 8h7l1.5 10h-10L8.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function RadiologyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8.5V7M12 17v-1.5M8.5 12H7M17 12h-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function EyeCareIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function PhysiotherapyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8.5v3l4 2.5 3-5.5 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function NutritionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4c-2 2.5-3 4.5-3 6.5a3 3 0 0 0 6 0c0-2-1-4-3-6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 13v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 18.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function PsychologyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 8.5a3.5 3.5 0 0 1 7 0c0 2.2-1.6 3.2-2.2 4.8-.4 1.1-.3 2.2-.3 2.2H10.5s.1-1.1-.3-2.2c-.6-1.6-2.2-2.6-2.2-4.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 17.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SolarPanelIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7.5h16v9H4V7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7 7.5V5.5M12 7.5V5.5M17 7.5V5.5M7 16.5v2M12 16.5v2M17 16.5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 10.5h3M14 10.5h3M7 13.5h3M14 13.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function OxygenPlantIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="14" rx="5.5" ry="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 7.5h5M10 5.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10.5v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.2 12.5h3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function RainHarvestIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 8.5a4.5 4.5 0 0 1 9 0c0 2.5-1.8 3.5-2.4 5.2-.4 1.1-.3 2.3-.3 2.3h-3.6s.1-1.2-.3-2.3C8.8 12 7 11 7 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.5 17.5c.5 1.2 1.5 2 2.5 2s2-.8 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 19.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function NewspaperIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function FileTextIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4h7l3 3v13H8V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 4v4h4M10 12h6M10 15.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5M10 14 19 5M19 10v9H5V5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1Z" />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5h3v10h-3v-10ZM8 6.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM13 13.1c0-1.2.5-2 1.8-2 1 0 1.5.6 1.5 2.1V18.5h3v-4.2c0-3.1-1.7-4.5-3.9-4.5-1.8 0-2.6 1-3 1.7v-1.4h-3V18.5h3V13.1Z" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3a8.8 8.8 0 0 0-7.6 13.2L3 21l4.9-1.3A8.8 8.8 0 1 0 12 3Zm0 16a7.2 7.2 0 0 1-3.7-1 6.8 6.8 0 0 1-1-.6l-.2-.1-2.9.8.8-2.8-.2-.3a7.2 7.2 0 1 1 7 3Zm4-5.4c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.9-.3.1-.5 0a6.2 6.2 0 0 1-1.8-1.1 6.8 6.8 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.3s0-.2 0-.3-.5-1.3-.7-1.8-.4-.4-.5-.4h-.4c-.1 0-.3 0-.4.2s-.6.7-.6 1.8.6 2.1.7 2.2 2.4 3.7 5.8 5.2c.8.3 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.3-.6 1.5-1.1s.2-1 .1-1.1-.2-.1-.4-.2Z" />
    </svg>
  )
}
