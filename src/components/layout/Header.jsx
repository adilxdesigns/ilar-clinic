import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import './Header.css'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Doctors',      href: '#doctors' },
  { label: 'Services',     href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Contact',      href: '#contact' },
]

export default function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          {/* Logo */}
          <a href="#home" className="header__logo" onClick={e => handleNavClick(e, '#home')}>
            <img src="./assets/ilarcliniclogo.jpeg" alt="ILAR CLINIC Logo" className="header__logo-img" />
            <span className="header__brand">ILAR CLINIC</span>
          </a>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="header__link"
                onClick={e => handleNavClick(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="tel:9566024185" className="btn-call header__cta" id="header-call-btn">
            <Phone size={16} strokeWidth={2.5} />
            CALL FOR APPOINTMENT
          </a>

          {/* Mobile hamburger */}
          <button
            className="header__hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}

      {/* Mobile drawer */}
      <nav className={`drawer ${open ? 'drawer--open' : ''}`} aria-label="Mobile navigation">
        <div className="drawer__header">
          <img src="./assets/ilarcliniclogo.jpeg" alt="ILAR CLINIC Logo" className="drawer__logo" />
          <span className="drawer__brand">ILAR CLINIC</span>
        </div>
        <ul className="drawer__links">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} className="drawer__link" onClick={e => handleNavClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="drawer__ctas">
          <a href="tel:9566024185" className="btn-call drawer__call" id="drawer-call-btn">
            <Phone size={16} strokeWidth={2.5} />
            CALL 9566024185
          </a>
          <a href="tel:04431327356" className="btn-call-outline drawer__landline" id="drawer-landline-btn">
            <Phone size={14} />
            LANDLINE 04431327356
          </a>
        </div>
      </nav>
    </>
  )
}
