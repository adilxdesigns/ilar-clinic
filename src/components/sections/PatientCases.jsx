import { useState, useCallback } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { patientCases } from '../../data/patientCases'
import './PatientCases.css'

const TYPE_LABELS = { before: 'Before', process: 'Treatment', after: 'After', xray: 'X-Ray', gallery: 'Gallery' }
const TYPE_ICONS  = { before: '⬅️', process: '⚙️', after: '✅', xray: '🩻', gallery: '📷' }
const TYPE_ORDER  = ['before', 'process', 'after', 'xray', 'gallery']

export default function PatientCases() {
  const [activeCase, setActiveCase] = useState(patientCases[0].id)
  const [activeType, setActiveType] = useState('before')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxSlides, setLightboxSlides] = useState([])

  const caseData = patientCases.find(c => c.id === activeCase)

  // Get available types (those with ≥1 image)
  const availableTypes = TYPE_ORDER.filter(t => (caseData?.images[t]?.length ?? 0) > 0)

  // Resolve active type (if switching case, reset to first available)
  const resolvedType = availableTypes.includes(activeType) ? activeType : availableTypes[0] ?? null

  const currentImages = resolvedType ? (caseData?.images[resolvedType] ?? []) : []
  const slides = currentImages.map(src => ({ src }))

  const openLightbox = useCallback((index) => {
    setLightboxSlides(slides)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [slides])

  const handleCaseChange = (id) => {
    setActiveCase(id)
    const newCase = patientCases.find(c => c.id === id)
    const types = TYPE_ORDER.filter(t => (newCase?.images[t]?.length ?? 0) > 0)
    setActiveType(types[0] ?? 'before')
  }

  return (
    <div className="patient-cases">
      {/* Disclaimer */}
      <div className="patient-cases__notice">
        <span>🔒</span>
        <p>Patient images are shown with full consent for educational purposes. All cases are de-identified.</p>
      </div>

      {/* Case selector – horizontal scroll */}
      <div className="patient-cases__selector h-scroll">
        {patientCases.map(c => (
          <button
            key={c.id}
            className={`case-chip ${activeCase === c.id ? 'case-chip--active' : ''}`}
            onClick={() => handleCaseChange(c.id)}
            id={`case-chip-${c.id}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Case detail */}
      {caseData && (
        <div className="case-detail">
          {/* Case header */}
          <div className="case-detail__header">
            <div>
              <h3 className="case-detail__title">{caseData.name}</h3>
              <p className="case-detail__desc">{caseData.description}</p>
            </div>
            <span className="case-detail__count">{currentImages.length} image{currentImages.length !== 1 ? 's' : ''}</span>
          </div>

          {/* Type tabs */}
          <div className="pill-tabs case-detail__type-tabs">
            {availableTypes.map(t => (
              <button
                key={t}
                className={`pill-tab ${resolvedType === t ? 'active' : ''}`}
                onClick={() => setActiveType(t)}
                id={`type-tab-${activeCase}-${t}`}
              >
                {TYPE_ICONS[t]} {TYPE_LABELS[t]}
                <span className="case-type-count">{caseData.images[t].length}</span>
              </button>
            ))}
          </div>

          {/* Image strip – always horizontal scroll on mobile, grid on desktop */}
          {currentImages.length > 0 ? (
            <>
              {/* Mobile strip */}
              <div className="case-detail__mobile-strip h-scroll">
                {currentImages.map((src, i) => (
                  <button
                    key={i}
                    className="case-img-btn"
                    onClick={() => openLightbox(i)}
                    aria-label={`View ${TYPE_LABELS[resolvedType]} image ${i + 1} of case ${caseData.name}`}
                    id={`case-img-${activeCase}-${resolvedType}-${i}`}
                  >
                    <img src={src} alt={`${caseData.name} – ${TYPE_LABELS[resolvedType]} ${i + 1}`}
                      className="case-img" loading="lazy" />
                    <div className="case-img__overlay">⤢</div>
                  </button>
                ))}
              </div>

              {/* Desktop grid */}
              <div className="case-detail__desktop-grid">
                {currentImages.map((src, i) => (
                  <button
                    key={i}
                    className="case-img-btn case-img-btn--grid"
                    onClick={() => openLightbox(i)}
                    aria-label={`View ${TYPE_LABELS[resolvedType]} image ${i + 1} of case ${caseData.name}`}
                    id={`case-grid-${activeCase}-${resolvedType}-${i}`}
                  >
                    <img src={src} alt={`${caseData.name} – ${TYPE_LABELS[resolvedType]} ${i + 1}`}
                      className="case-img" loading="lazy" />
                    <div className="case-img__overlay case-img__overlay--grid">
                      <span>⤢</span>
                      <span className="case-img__label">{TYPE_LABELS[resolvedType]} {i + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="case-detail__empty">No images available for this category.</div>
          )}
        </div>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />
    </div>
  )
}
