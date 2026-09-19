import { useInView } from 'react-intersection-observer'
import './About.css'

const highlights = [
  { num: '23+', label: 'Years of Practice' },
  { num: 'Dual', label: 'Specialties' },
  { num: '1', label: 'X-Ray On-Site' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="container about__inner">
        {/* Left – text */}
        <div className={`about__text reveal-left ${inView ? 'visible' : ''}`}>
          <span className="section-eyebrow">About the Clinic</span>
          <h2 className="section-title">
            Trusted Healthcare,<br /><em>Since 2001</em>
          </h2>
          <div className="rule-gold" />
          <p className="about__body">
            ILAR CLINIC is a dedicated multi-specialty clinic in Perambur, Chennai,
            providing expert care in <strong>Orthopaedics</strong> and{' '}
            <strong>Obstetrics &amp; Gynaecology / Women's Health</strong> since 2001.
            Founded on the belief that clinical excellence and genuine affordability
            are not a compromise, the clinic has earned the trust of thousands of families.
          </p>
          <p className="about__body">
            Led by <strong>Dr. D. R. Ramprasath</strong>, Professor of Orthopaedics
            at Stanley Medical College, and <strong>Dr. L. V. Anuradha</strong>, an
            internationally trained obstetrician and gynaecologist, the team brings
            decades of combined expertise to every consultation.
          </p>

          {/* Highlight row */}
          <div className="about__highlights">
            {highlights.map(h => (
              <div key={h.label} className="about__highlight">
                <span className="about__highlight-num">{h.num}</span>
                <span className="about__highlight-label">{h.label}</span>
              </div>
            ))}
          </div>

          <p className="about__disclaimer">
            Final clinic introduction subject to clinic approval before publication.
          </p>
        </div>

        {/* Right – visual */}
        <div className={`about__visual reveal-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {/* Main feature card */}
          <div className="about__feature-card">
            <div className="about__feature-top">
              <div className="about__feature-logo-wrap">
                <img src="./assets/ilarcliniclogo.jpeg" alt="ILAR Clinic logo" className="about__feature-logo" />
              </div>
              <div>
                <div className="about__feature-name">ILAR CLINIC</div>
                <div className="about__feature-tagline">Experience Meets Affordability</div>
              </div>
            </div>

            <div className="about__feature-divider" />

            <div className="about__feature-specs">
              {[
                { label: 'Primary Specialty',   value: 'Orthopaedics' },
                { label: 'Second Specialty',    value: "Women's Health" },
                { label: 'Facility',            value: 'X-Ray On-Site' },
                { label: 'Consultation Hours',  value: '6 PM – 9 PM, Daily' },
                { label: 'Location',            value: 'Perambur, Chennai' },
              ].map(row => (
                <div key={row.label} className="about__spec-row">
                  <span className="about__spec-label">{row.label}</span>
                  <span className="about__spec-value">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
