import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Plants', href: '#plants' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(window.location.hash || '#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const syncHash = () => setActiveLink(window.location.hash || '#home')

    onScroll()
    syncHash()

    window.addEventListener('scroll', onScroll)
    window.addEventListener('hashchange', syncHash)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-shell">
        <a href="#home" className="brand" aria-label="Sujatha Nursery home" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span className="brand-text">
            <strong>Sujatha Nursery</strong>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeLink === item.href ? 'active' : ''}
              onClick={() => {
                setActiveLink(item.href)
                closeMenu()
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="button button-primary nav-cta" href="#plants">
            Explore Plants
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
