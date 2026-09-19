import { useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { galleryCategories } from '../../data/galleryData'
import PatientCases from './PatientCases'
import './Gallery.css'

const PREVIEW_COUNT = 6 // per category in collapsed state

export default function Gallery() {
  const [activeTab, setActiveTab]       = useState('awards')
  const [expanded, setExpanded]         = useState({})
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxSlides, setLightboxSlides] = useState([])
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  const openLightbox = useCallback((slides, index) => {
    setLightboxSlides(slides)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const activeCategory = galleryCategories.find(c => c.id === activeTab)
  const isExpanded    = expanded[activeTab] || false
  const displayImages = isExpanded
    ? activeCategory?.images
    : activeCategory?.images.slice(0, PREVIEW_COUNT)

  const slides = activeCategory?.images.map(img => ({ src: img.src })) ?? []

  return (
    <section id="gallery" className="section bg-light" ref={ref}>
      <div className="container">
        {/* Heading */}
        <div className={`text-center reveal ${inView ? 'visible' : ''}`} style={{ marginBottom: 'var(--space-8)' }}>
          <span className="section-label">Visual Journey</span>
          <h2 className="section-title">Photo <span>Gallery</span></h2>
          <div className="gold-divider" style={{ margin: '0 auto' }} />
        </div>

        {/* Category pill tabs – horizontal scroll on mobile */}
        <div className={`pill-tabs gallery__tabs reveal ${inView ? 'visible' : ''}`}
          style={{ marginBottom: 'var(--space-8)', transitionDelay: '0.1s' }}>
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              className={`pill-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(cat.id); setExpanded(e => ({ ...e, [cat.id]: false })) }}
              id={`gallery-tab-${cat.id}`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
          <button
            className={`pill-tab ${activeTab === 'cases' ? 'active' : ''}`}
            onClick={() => setActiveTab('cases')}
            id="gallery-tab-cases"
          >
            🩺 Patient Cases
          </button>
        </div>

        {/* Patient cases sub-section */}
        {activeTab === 'cases' ? (
          <PatientCases />
        ) : (
          activeCategory && (
            <div className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
              {/* Mobile: horizontal scroll strip */}
              <div className="gallery__mobile-strip h-scroll">
                {displayImages.map((img, i) => (
                  <button
                    key={i}
                    className="gallery__thumb-btn"
                    onClick={() => openLightbox(slides, i)}
                    aria-label={`View ${img.alt}`}
                    id={`gallery-img-${activeTab}-${i}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="gallery__thumb-img"
                      loading="lazy"
                    />
                    <div className="gallery__thumb-overlay">
                      <span className="gallery__thumb-zoom">⤢</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Desktop: grid */}
              <div className="gallery__desktop-grid">
                {displayImages.map((img, i) => (
                  <button
                    key={i}
                    className="gallery__grid-btn"
                    onClick={() => openLightbox(slides, i)}
                    aria-label={`View ${img.alt}`}
                    id={`gallery-grid-${activeTab}-${i}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="gallery__grid-img"
                      loading="lazy"
                    />
                    <div className="gallery__grid-overlay">
                      <span className="gallery__grid-zoom">⤢</span>
                      <span className="gallery__grid-alt">{img.alt}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Expand / collapse */}
              {activeCategory.images.length > PREVIEW_COUNT && (
                <div className="gallery__expand">
                  <button
                    className="gallery__expand-btn"
                    onClick={() => setExpanded(e => ({ ...e, [activeTab]: !isExpanded }))}
                    id="gallery-expand-btn"
                  >
                    {isExpanded
                      ? '↑ Show Less'
                      : `↓ View All ${activeCategory.images.length} Photos`}
                  </button>
                </div>
              )}

              {/* Count badge */}
              <div className="gallery__count">
                {displayImages.length} of {activeCategory.images.length} photos shown
              </div>
            </div>
          )
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />
    </section>
  )
}
