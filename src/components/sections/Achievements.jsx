import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { BookOpen, FileText, Award } from 'lucide-react'
import { stats, awards, publications } from '../../data/achievements'
import './Achievements.css'

function Counter({ target, suffix, start }) {
  const [value, setValue] = useState(0)
  const raf = useRef(null)
  useEffect(() => {
    if (!start) return
    const duration = 1800
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(e * target))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [start, target])
  return <>{value}{suffix}</>
}

export default function Achievements() {
  const { ref: sRef, inView: sIn } = useInView({ triggerOnce: true, threshold: 0.12 })
  const { ref: aRef, inView: aIn } = useInView({ triggerOnce: true, threshold: 0.08 })
  const { ref: pRef, inView: pIn } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* ── Stats Section ── */}
      <section id="achievements" className="section bg-ink" ref={sRef}>
        <div className="container">
          <div className={`ach__header reveal ${sIn ? 'visible' : ''}`}>
            <div>
              <span className="section-eyebrow" style={{ color: 'rgba(212,170,88,0.9)' }}>
                Academic &amp; Clinical Record
              </span>
              <h2 className="section-title text-white">
                Numbers That <em>Define</em> Excellence
              </h2>
              <div className="rule-gold" />
            </div>
          </div>

          <div className={`ach__stats-grid reveal ${sIn ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {stats.map(s => (
              <div className="ach__stat" key={s.label}>
                <div className="ach__stat-value">
                  <Counter target={s.value} suffix={s.suffix} start={sIn} />
                </div>
                <div className="ach__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards Section ── */}
      <section className="section bg-white" ref={aRef}>
        <div className="container">
          <div className={`reveal ${aIn ? 'visible' : ''}`} style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-eyebrow">Recognitions</span>
            <h2 className="section-title">
              Awards &amp; <em>Honours</em>
            </h2>
            <div className="rule-gold" />
            <p className="section-lead" style={{ marginTop: 'var(--space-2)' }}>
              Dr. D. R. Ramprasath — a decorated orthopaedic surgeon honoured at
              national and district levels.
            </p>
          </div>

          <div className={`awards__list reveal ${aIn ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {awards.map((award, i) => (
              <div className="award-row" key={i}>
                <div className="award-row__medal">
                  {award.toLowerCase().includes('gold') ? 'Gold' : award.toLowerCase().includes('silver') ? 'Silver' : 'Award'}
                </div>
                <p className="award-row__text">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publications ── */}
      <section id="publications" className="section pub__section bg-cream" ref={pRef}>
        <div className="container">
          <div className={`pub__header-wrap reveal ${pIn ? 'visible' : ''}`}>
            <span className="section-eyebrow">Academic Work</span>
            <h2 className="section-title">
              Publications &amp; <em>Editorial</em>
            </h2>
            <div className="rule-gold" />
          </div>
          <div className={`pub__grid reveal ${pIn ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {publications.map((p, i) => {
              const IconComp = p.iconName === 'BookOpen' ? BookOpen : FileText
              return (
                <div className="pub-card" key={i}>
                  <div className="pub-card__header">
                    <div className="pub-card__icon-wrapper">
                      <IconComp size={22} className="pub-card__icon" />
                    </div>
                    <span className="pub-card__type">{p.type}</span>
                  </div>
                  <h3 className="pub-card__title">{p.title}</h3>
                  <p className="pub-card__desc">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
