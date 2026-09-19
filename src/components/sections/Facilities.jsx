import { useInView } from 'react-intersection-observer'
import './Facilities.css'

export default function Facilities() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="facilities" className="section bg-white" ref={ref}>
      <div className="container">
        <div className={`fac__inner reveal ${inView ? 'visible' : ''}`}>
          <div className="fac__text">
            <span className="section-eyebrow">On-Site Infrastructure</span>
            <h2 className="section-title">
              Clinic <em>Facilities</em>
            </h2>
            <div className="rule-gold" />
            <p className="section-lead">
              Immediate, in-house diagnostic support — no referral delays,
              no separate visits.
            </p>
          </div>

          <div className="fac__cards">
            <div className="fac-card">
              {/* SVG X-Ray icon */}
              <div className="fac-card__icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="fac-card__svg">
                  <rect x="4" y="4" width="56" height="56" rx="6" fill="#e8eef5" stroke="#d0d8e8" strokeWidth="1.5"/>
                  <rect x="12" y="12" width="40" height="40" rx="3" fill="#f8f9fb" stroke="#c5cdd8" strokeWidth="1"/>
                  {/* Skeletal hand X-ray simplified */}
                  <rect x="26" y="14" width="5" height="18" rx="2.5" fill="#a0b0c8" opacity="0.7"/>
                  <rect x="33" y="16" width="4" height="16" rx="2" fill="#a0b0c8" opacity="0.6"/>
                  <rect x="20" y="16" width="4" height="16" rx="2" fill="#a0b0c8" opacity="0.6"/>
                  <rect x="14" y="20" width="4" height="12" rx="2" fill="#a0b0c8" opacity="0.5"/>
                  <rect x="39" y="20" width="4" height="10" rx="2" fill="#a0b0c8" opacity="0.5"/>
                  {/* Wrist */}
                  <rect x="18" y="32" width="22" height="10" rx="5" fill="#8fa5c0" opacity="0.5"/>
                  <rect x="16" y="41" width="26" height="8" rx="3" fill="#7a96b5" opacity="0.45"/>
                  {/* Text label */}
                  <text x="32" y="58" textAnchor="middle" fontSize="7" fill="#8fa5c0" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">X-RAY</text>
                </svg>
              </div>
              <div className="fac-card__body">
                <div className="fac-card__badge">Available On-Site</div>
                <h3 className="fac-card__title">Digital X-Ray</h3>
                <p className="fac-card__desc">
                  In-house X-ray imaging for immediate orthopaedic assessment and diagnosis,
                  eliminating the need for external referrals and reducing waiting time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
