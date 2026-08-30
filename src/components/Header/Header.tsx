import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../../data/content'
import { scrollToElement } from '../../lib/smoothScroll'
import { BookButton } from '../BookButton/BookButton'
import { FindDoctorButton } from '../FindDoctorButton/FindDoctorButton'
import { Logo } from '../Logo/Logo'
import { TopBar } from '../TopBar/TopBar'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [atBottom, setAtBottom] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false })
  const navListRef = useRef<HTMLUListElement>(null)

  const moveIndicatorTo = (el: Element | null) => {
    const list = navListRef.current
    if (!list || !el) {
      setIndicator((prev) => ({ ...prev, visible: false }))
      return
    }
    const listBox = list.getBoundingClientRect()
    const box = el.getBoundingClientRect()
    setIndicator({
      x: box.left - listBox.left,
      width: box.width,
      visible: true,
    })
  }

  const syncIndicator = (id = activeId) => {
    const list = navListRef.current
    if (!list) return
    const el = list.querySelector(`[data-nav-id="${id}"]`)
    moveIndicatorTo(el)
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const viewport = window.innerHeight
      const page = document.documentElement.scrollHeight
      setScrolled(y > 18)
      setAtBottom(y > 48 && y + viewport >= page - 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const onResize = () => syncIndicator()
    syncIndicator()
    const list = navListRef.current
    if (!list) return undefined
    const observer = new ResizeObserver(onResize)
    observer.observe(list)
    window.addEventListener('resize', onResize)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [activeId, scrolled])

  useEffect(() => {
    const observed = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el))

    if (!observed.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const match = navLinks.find((link) => link.href === `#${visible.target.id}`)
        if (match) setActiveId(match.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    observed.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string, href: string) => {
    setActiveId(id)
    scrollToElement(href)
    window.history.replaceState(null, '', href)
  }

  return (
    <>
      <TopBar />
      <header
        className={['site-header', scrolled ? 'is-scrolled' : '', atBottom ? 'is-hidden' : '']
          .filter(Boolean)
          .join(' ')}
      >
        <div className="site-header__inner">
          <a
            className="brand"
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              goTo('home', '#home')
            }}
          >
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            <ul
              className="desktop-nav__list"
              ref={navListRef}
              onMouseLeave={() => syncIndicator()}
            >
              <li
                className="desktop-nav__indicator"
                aria-hidden="true"
                style={{
                  transform: `translateX(${indicator.x}px)`,
                  width: indicator.width,
                  opacity: indicator.visible ? 1 : 0,
                }}
              />
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="desktop-nav__link"
                    data-nav-id={link.id}
                    href={link.href}
                    aria-current={link.id === activeId ? 'page' : undefined}
                    onMouseEnter={(event) => moveIndicatorTo(event.currentTarget)}
                    onFocus={(event) => moveIndicatorTo(event.currentTarget)}
                    onClick={(event) => {
                      event.preventDefault()
                      goTo(link.id, link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <FindDoctorButton className="header-actions__find" />
            <BookButton className="header-actions__book header-actions__book--desktop" />
            <BookButton
              className="header-actions__book header-actions__book--mobile"
              label="Book my appointment"
            />
          </div>
        </div>
      </header>

      <nav className="mobile-tab-nav" aria-label="Mobile primary">
        <ul className="mobile-tab-nav__list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className="mobile-tab-nav__link"
                href={link.href}
                aria-current={link.id === activeId ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  goTo(link.id, link.href)
                }}
              >
                {link.shortLabel}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
