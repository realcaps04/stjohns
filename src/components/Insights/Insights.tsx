import { useId, useState } from 'react'
import { insightsContent, type InsightPost, type InsightTabId } from '../../data/insights'
import {
  ArrowRightIcon,
  CalendarIcon,
  DoctorIcon,
  FileTextIcon,
  MedicalCrossIcon,
  NewspaperIcon,
} from '../icons'
import './Insights.css'

const PULSE_PATH = 'M0 20 H150 L158 20 163 15 168 20 174 7 186 32 196 5 204 23 210 18 220 20 H420'

function InsightsPulse() {
  return (
    <svg className="insights__pulse" viewBox="0 0 420 36" fill="none" aria-hidden="true">
      <path className="insights__pulse-track" d={PULSE_PATH} />
      <path className="insights__pulse-path" d={PULSE_PATH} />
      <circle className="insights__pulse-dot" cx="412" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function TabIcon({ tabId }: { tabId: InsightTabId }) {
  const className = 'insights-tab__icon'
  if (tabId === 'press') return <NewspaperIcon className={className} />
  if (tabId === 'blogs') return <FileTextIcon className={className} />
  return <CalendarIcon className={className} />
}

function InsightCard({ post }: { post: InsightPost }) {
  return (
    <article className="insight-card">
      <a className="insight-card__media" href={post.href} target="_blank" rel="noreferrer">
        <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" />
      </a>

      <div className="insight-card__body">
        <a className="insight-card__category" href={post.categoryHref} target="_blank" rel="noreferrer">
          {post.category}
        </a>

        <h3 className="insight-card__title">
          <a href={post.href} target="_blank" rel="noreferrer">
            {post.title}
          </a>
        </h3>

        <p className="insight-card__description">{post.description}</p>

        <footer className="insight-card__meta">
          <span className="insight-card__meta-item">
            <DoctorIcon className="insight-card__meta-icon" />
            <a href={post.authorHref} target="_blank" rel="noreferrer">
              {post.author}
            </a>
          </span>
          <span className="insight-card__meta-divider" aria-hidden="true" />
          <span className="insight-card__meta-item">
            <CalendarIcon className="insight-card__meta-icon" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
        </footer>
      </div>
    </article>
  )
}

export function Insights() {
  const { title, body, tabs, viewAllLabel, viewAllHref } = insightsContent
  const [activeTab, setActiveTab] = useState<InsightTabId>('press')
  const tablistId = useId()

  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]

  return (
    <section className="insights" id="insight" aria-labelledby="insights-heading">
      <div className="insights__decor insights__decor--dots" aria-hidden="true" />
      <div className="insights__decor insights__decor--cross" aria-hidden="true">
        <MedicalCrossIcon className="insights__cross-icon" />
      </div>

      <div className="insights__inner">
        <header className="insights__header">
          <span className="insights__glyph" aria-hidden="true">
            <NewspaperIcon className="insights__glyph-icon" />
          </span>

          <h2 id="insights-heading" className="insights__title">
            {title}
          </h2>

          <InsightsPulse />

          <p className="insights__body">{body}</p>
        </header>

        <div className="insights__panel">
          <div className="insights__tabs" role="tablist" aria-label="Insights categories" id={tablistId}>
            {tabs.map((tab) => {
              const selected = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${tablistId}-${tab.id}`}
                  className={`insights-tab${selected ? ' insights-tab--active' : ''}`}
                  aria-selected={selected}
                  aria-controls={`${tablistId}-panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <TabIcon tabId={tab.id} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div
            className="insights__cards"
            role="tabpanel"
            id={`${tablistId}-panel-${currentTab.id}`}
            aria-labelledby={`${tablistId}-${currentTab.id}`}
          >
            {currentTab.posts.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="insights__footer">
          <a className="insights__view-all" href={viewAllHref} target="_blank" rel="noreferrer">
            {viewAllLabel}
            <ArrowRightIcon className="insights__view-all-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
