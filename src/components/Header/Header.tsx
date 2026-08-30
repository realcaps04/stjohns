import { useEffect, useId, useRef, useState } from 'react'
import { navLinks } from '../../data/content'
import { scrollToElement } from '../../lib/smoothScroll'
import { BookButton } from '../BookButton/BookButton'
import { FindDoctorButton } from '../FindDoctorButton/FindDoctorButton'
import { CloseIcon, MenuIcon } from '../icons'
import { Logo } from '../Logo/Logo'
import { TopBar } from '../TopBar/TopBar'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [atBottom, setAtBottom] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false })
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1100px)').matches : false,
  )
  const menuTitleId = useId()
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
    document.body.classList.toggle('is-locked', menuOpen)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1100px)')
    const sync = () => {
      const desktop = media.matches
      setIsDesktop(desktop)
      if (desktop) setMenuOpen(false)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
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
  }, [activeId, isDesktop, scrolled])

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
    setMenuOpen(false)
    scrollToElement(href)
    window.history.replaceState(null, '', href)
  }

  return (
    <>
      <TopBar />
      <header
        className={[
          'site-header',
          scrolled ? 'is-scrolled' : '',
          atBottom && !menuOpen ? 'is-hidden' : '',
          menuOpen ? 'is-overlay-open' : '',
        ]
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

            {!isDesktop && (
              <button
                type="button"
                className="icon-btn header-actions__menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <CloseIcon className="icon-btn__glyph" /> : <MenuIcon className="icon-btn__glyph" />}
              </button>
            )}
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} id="mobile-nav" hidden={!menuOpen}>
        <div
          className="mobile-nav__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
        >
          <h2 id={menuTitleId} className="sr-only">
            Site menu
          </h2>
          <nav aria-label="Mobile">
            <ul className="mobile-nav__list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="mobile-nav__link"
                    href={link.href}
                    aria-current={link.id === activeId ? 'page' : undefined}
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
          <div className="mobile-nav__cta">
            <FindDoctorButton full />
            <BookButton full className="mobile-nav__book" />
          </div>
        </div>
      </div>

    </>
  )
}
