import Lenis from 'lenis'

let lenis: Lenis | null = null

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getScrollOffset(target: Element) {
  const marginTop = Number.parseFloat(getComputedStyle(target).scrollMarginTop)
  return Number.isFinite(marginTop) ? -marginTop : 0
}

export function scrollToElement(target: Element | string, options?: { immediate?: boolean }) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return

  if (lenis) {
    lenis.scrollTo(el as HTMLElement, {
      offset: getScrollOffset(el),
      immediate: options?.immediate ?? false,
    })
    return
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onAnchorClick(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0) return
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  const anchor = (event.target as Element | null)?.closest('a[href^="#"]')
  if (!(anchor instanceof HTMLAnchorElement)) return

  const href = anchor.getAttribute('href')
  if (!href || href === '#') return

  const target = document.querySelector(href)
  if (!target) return

  event.preventDefault()
  scrollToElement(target)
  window.history.replaceState(null, '', href)
}

export function initSmoothScroll() {
  if (prefersReducedMotion() || lenis) return

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => 1 - (1 - t) ** 4,
    smoothWheel: true,
    wheelMultiplier: 0.92,
    touchMultiplier: 1.1,
  })

  const raf = (time: number) => {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  document.addEventListener('click', onAnchorClick)

  return () => {
    document.removeEventListener('click', onAnchorClick)
    lenis?.destroy()
    lenis = null
  }
}
