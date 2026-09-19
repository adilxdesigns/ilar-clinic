import { Phone } from 'lucide-react'
import './Footer.css'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Doctors',      href: '#doctors' },
  { label: 'Services',     href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Contact',      href: '#contact' },
]

const orthoServices = ['Fractures', 'Pain Management', 'Arthritis', 'Joint Replacement', 'Arthroscopy', 'Spine']
const gynaecServices = ['Pregnancy', 'Infertility', 'Laparoscopy', 'Menstrual Disorders', 'Menopause', 'Cancer Screening']

export default function Footer() {
  const handleLink = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo-row">
            <img src="./assets/ilarcliniclogo.jpeg" alt="ILAR CLINIC Logo" className="footer__logo-img" />
            <div>
              <div className="footer__name">ILAR CLINIC</div>
              <div className="footer__tagline">EXPERIENCE MEETS AFFORDABILITY</div>
            </div>
          </div>
          <p className="footer__desc">
            23 years of expert care in Orthopaedics and Women&apos;s Health.
            Serving patients in Perambur, Chennai with compassion and affordability.
          </p>
          <div className="footer__contacts">
            <a href="tel:9566024185" className="footer__contact-link" id="footer-call-btn">
              <Phone size={15} /> 9566024185
            </a>
            <a href="tel:04431327356" className="footer__contact-link" id="footer-landline-btn">
              <Phone size={15} /> 04431327356
            </a>
          </div>
          <div className="footer__hours">
            <span>🕕</span> Every day &nbsp;|&nbsp; 6:00 PM – 9:00 PM
          </div>
        </div>

        {/* Quick links */}
        <div className="footer__col">
          <h3 className="footer__col-title">Quick Links</h3>
          <ul className="footer__list">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="footer__list-link" onClick={e => handleLink(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Orthopaedic */}
        <div className="footer__col">
          <h3 className="footer__col-title">Orthopaedics</h3>
          <ul className="footer__list">
            {orthoServices.map(s => <li key={s}><span className="footer__list-item">{s}</span></li>)}
          </ul>
        </div>

        {/* Gynaecology */}
        <div className="footer__col">
          <h3 className="footer__col-title">Women's Health</h3>
          <ul className="footer__list">
            {gynaecServices.map(s => <li key={s}><span className="footer__list-item">{s}</span></li>)}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} ILAR CLINIC. All Rights Reserved.</p>
          <p className="footer__address">
            📍 106, 105/1, BB Rd, opposite Aavin Parlour, Chinnaiyan Colony, Perambur, Chennai – 600011
          </p>
        </div>
      </div>
    </footer>
  )
}
