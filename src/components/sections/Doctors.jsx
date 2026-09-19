import { useInView } from 'react-intersection-observer'
import { Stethoscope, HeartPulse, Award, ShieldCheck, GraduationCap, CheckCircle2 } from 'lucide-react'
import './Doctors.css'

function DoctorRamprasath({ visible }) {
  return (
    <div className={`doc-card reveal-left ${visible ? 'visible' : ''}`}>
      <div className="doc-card__top-bar doc-card__top-bar--ortho" />
      
      <div className="doc-card__content">
        {/* Header with Avatar & Title */}
        <div className="doc-card__header">
          <div className="doc-card__avatar-frame">
            <img
              src="./assets/doctorphoto_ramprasath.jpeg"
              alt="Dr. D. R. Ramprasath – MS Ortho, Professor of Orthopaedics"
              className="doc-card__avatar-img"
              loading="eager"
            />
            <span className="doc-card__avatar-check">
              <CheckCircle2 size={16} fill="#a07830" color="#ffffff" />
            </span>
          </div>

          <div className="doc-card__meta">
            <span className="doc-card__dept-pill doc-card__dept-pill--ortho">
              <Stethoscope size={13} /> Orthopaedics Specialist
            </span>
            <h3 className="doc-card__name">Dr. D. R. Ramprasath</h3>
            <p className="doc-card__quals">MS Ortho, D.Ortho</p>
          </div>
        </div>

        {/* Role Position */}
        <div className="doc-card__role-box">
          <GraduationCap size={18} className="doc-card__role-icon" />
          <div>
            <strong>Professor of Orthopaedics</strong>
            <span>Stanley Medical College &amp; Hospital</span>
          </div>
        </div>

        <div className="doc-card__divider" />

        {/* Key Badges */}
        <div className="doc-card__badges">
          <span className="doc-badge"><ShieldCheck size={13} /> TNMC No. 61363</span>
          <span className="doc-badge"><Award size={13} /> 23 Years Practice</span>
          <span className="doc-badge"><Award size={13} /> 10 Awards &amp; Medals</span>
        </div>

        {/* Clinical Bio */}
        <p className="doc-card__bio">
          A nationally recognised orthopaedic surgeon with expertise spanning
          joint replacement, Ilizarov fixation, CTEV, deformity correction, and
          complex trauma. Recipient of multiple gold medals and best doctor awards.
        </p>
      </div>
    </div>
  )
}

function DoctorAnuradha({ visible }) {
  return (
    <div className={`doc-card reveal-right ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
      <div className="doc-card__top-bar doc-card__top-bar--gynae" />

      <div className="doc-card__content">
        {/* Header with Avatar & Title */}
        <div className="doc-card__header">
          <div className="doc-card__avatar-frame doc-card__avatar-frame--gynae">
            <div className="doc-card__avatar-emblem" aria-label="Dr. L. V. Anuradha Emblem">
              <HeartPulse size={42} className="doc-card__emblem-icon" />
            </div>
            <span className="doc-card__avatar-check">
              <CheckCircle2 size={16} fill="#0d6e7d" color="#ffffff" />
            </span>
          </div>

          <div className="doc-card__meta">
            <span className="doc-card__dept-pill doc-card__dept-pill--gynae">
              <HeartPulse size={13} /> Women's Health Specialist
            </span>
            <h3 className="doc-card__name">Dr. L. V. Anuradha</h3>
            <p className="doc-card__quals">DGO, DNB (OG), DRM (UKSH, Germany)</p>
          </div>
        </div>

        {/* Role Position */}
        <div className="doc-card__role-box">
          <GraduationCap size={18} className="doc-card__role-icon doc-card__role-icon--teal" />
          <div>
            <strong>Obstetrician &amp; Gynaecologist</strong>
            <span>Advanced Training · UKSH, Germany</span>
          </div>
        </div>

        <div className="doc-card__divider" />

        {/* Key Badges */}
        <div className="doc-card__badges">
          <span className="doc-badge doc-badge--teal"><ShieldCheck size={13} /> DRM – Germany</span>
          <span className="doc-badge doc-badge--teal"><Award size={13} /> Infertility Care</span>
          <span className="doc-badge doc-badge--teal"><Award size={13} /> Laparoscopy</span>
        </div>

        {/* Clinical Bio */}
        <p className="doc-card__bio">
          An accomplished obstetrician and gynaecologist with advanced training
          from UKSH, Germany. Specialising in high-risk pregnancy, infertility, laparoscopic
          surgery, and complete women's healthcare across all stages of life.
        </p>
      </div>
    </div>
  )
}

export default function Doctors() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="doctors" className="section bg-cream" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className={`doctors__header reveal ${inView ? 'visible' : ''}`}>
          <div>
            <span className="section-eyebrow">Our Medical Specialists</span>
            <h2 className="section-title">
              Meet the <em>Experts</em>
            </h2>
            <div className="rule-gold" />
          </div>
          <p className="section-lead doctors__lead">
            Two decades of combined clinical excellence, academic distinction,
            and patient-first care — all under one roof.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="doctors__grid">
          <DoctorRamprasath visible={inView} />
          <DoctorAnuradha   visible={inView} />
        </div>
      </div>
    </section>
  )
}
