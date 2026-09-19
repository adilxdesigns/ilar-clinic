import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { 
  Bone, Zap, Activity, Layers, Eye, Stethoscope, Shield, Baby, Microscope, Ruler, Sparkles, Scan, 
  Heart, Scissors, Pill, Calendar, Users, ShieldCheck, Flower2, ChevronRight, ChevronDown, ChevronUp 
} from 'lucide-react'
import { orthoServices, gynaecologyServices } from '../../data/services'
import './Services.css'

const ICON_MAP = {
  Bone, Zap, Activity, Layers, Eye, Stethoscope, Shield, Baby, Microscope, Ruler, Sparkles, Scan,
  Heart, Scissors, Pill, Calendar, Users, ShieldCheck, Flower2
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('ortho')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const services = activeTab === 'ortho' ? orthoServices : gynaecologyServices

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setIsExpanded(false)
  }

  // Display initial 4 items on mobile if not expanded, or all items on desktop / when expanded
  const displayedServices = (isMobile && !isExpanded) ? services.slice(0, 4) : services

  return (
    <section id="services" className="section bg-cream" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className={`svc__header reveal ${inView ? 'visible' : ''}`}>
          <div className="svc__header-left">
            <span className="section-eyebrow">Clinical Services</span>
            <h2 className="section-title">
              What We <em>Treat</em>
            </h2>
            <div className="rule-gold" />
          </div>
          {/* Tab switcher */}
          <div className="svc__tabs">
            <button
              className={`svc__tab ${activeTab === 'ortho' ? 'svc__tab--active' : ''}`}
              onClick={() => handleTabChange('ortho')}
              id="tab-ortho"
            >
              Orthopaedics
            </button>
            <button
              className={`svc__tab ${activeTab === 'gynae' ? 'svc__tab--active' : ''}`}
              onClick={() => handleTabChange('gynae')}
              id="tab-gynae"
            >
              Women&apos;s Health
            </button>
          </div>
        </div>

        {/* Services list */}
        <div className={`svc__grid reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
          {displayedServices.map((svc, i) => {
            const IconComp = ICON_MAP[svc.icon] || Activity
            return (
              <div className="svc-item" key={svc.id}>
                <div className="svc-item__icon-wrapper">
                  <IconComp className="svc-item__icon" size={20} />
                </div>
                <div className="svc-item__body">
                  <div className="svc-item__header">
                    <span className="svc-item__number">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="svc-item__title">{svc.title}</h3>
                  </div>
                  <p className="svc-item__desc">{svc.desc}</p>
                </div>
                <ChevronRight className="svc-item__arrow" size={18} />
              </div>
            )
          })}
        </div>

        {/* Expand / Collapse Button for Mobile */}
        {isMobile && services.length > 4 && (
          <div className="svc__expand-wrapper">
            <button
              className="svc__expand-btn"
              onClick={() => setIsExpanded(v => !v)}
              id="svc-expand-toggle"
            >
              {isExpanded ? (
                <>
                  Show Less Services <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View All {services.length} Services <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
