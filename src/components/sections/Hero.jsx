import { Phone, ShieldCheck, Star } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        {/* Left Column: Text & Content */}
        <div className="hero__left">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-badge">
              <ShieldCheck size={14} className="hero__eyebrow-icon" />
              Perambur, Chennai
            </span>
            <span className="hero__eyebrow-text">23 Years of Excellence</span>
          </div>

          <h1 className="hero__name">
            ILAR&nbsp;<em>CLINIC</em>
          </h1>

          <p className="hero__tagline">Experience Meets Affordability</p>

          <p className="hero__desc">
            Expert orthopaedic care and comprehensive women's health services — delivered with
            clinical precision and genuine compassion for over two decades.
          </p>

          <div className="hero__ctas">
            <a href="tel:9566024185" className="btn-call" id="hero-call-btn">
              <Phone size={15} strokeWidth={2.5} />
              Call for Appointment
            </a>
            <a href="tel:04431327356" className="btn-call-outline" id="hero-landline-btn">
              <Phone size={14} />
              044–3132–7356
            </a>
          </div>

          <div className="hero__stats">
            {[
              { value: '23+', label: 'Years Experience' },
              { value: '39+', label: 'Podium Talks' },
              { value: '32+', label: 'Publications' },
              { value: '10',  label: 'Awards' },
            ].map(s => (
              <div key={s.label} className="hero__stat-card">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="hero__right">
          <div className="hero__image-card">
            <img
              src="./assets/homepage_bgphoto.jpeg"
              alt="ILAR Clinic – Perambur Chennai"
              className="hero__card-img"
              fetchpriority="high"
            />
            <div className="hero__card-badge">
              <div className="hero__card-badge-icon">
                <Star size={18} fill="#a07830" color="#a07830" />
              </div>
              <div className="hero__card-badge-text">
                <strong>23 Years Trusted Care</strong>
                <span>Orthopaedics & Gynaecology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
