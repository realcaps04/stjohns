import { AwardIcon, BuildingIcon, HeartIcon, PeopleIcon } from '../icons'
import type { StatIcon } from '../../data/content'
import './StatisticsCard.css'

type Stat = {
  id: string
  value: string
  label: string
  shortLabel: string
  icon: StatIcon
}

type StatisticsCardProps = {
  items: readonly Stat[]
}

function StatGlyph({ icon }: { icon: StatIcon }) {
  const className = 'statistics-card__icon'
  const glyph =
    icon === 'award' ? (
      <AwardIcon className={className} />
    ) : icon === 'heart' ? (
      <HeartIcon className={className} />
    ) : icon === 'people' ? (
      <PeopleIcon className={className} />
    ) : (
      <BuildingIcon className={className} />
    )

  return <span className="statistics-card__glyph">{glyph}</span>
}

export function StatisticsCard({ items }: StatisticsCardProps) {
  return (
    <ul className="statistics-card">
      {items.map((item) => (
        <li key={item.id} className="statistics-card__item">
          <StatGlyph icon={item.icon} />
          <p className="statistics-card__value">{item.value}</p>
          <p className="statistics-card__label">
            <span className="statistics-card__label-full">{item.label}</span>
            <span className="statistics-card__label-short">{item.shortLabel}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}
