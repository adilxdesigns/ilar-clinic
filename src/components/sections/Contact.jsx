import { useInView } from 'react-intersection-observer'
import { Phone, PhoneCall, MessageSquare, MapPin, Clock, Landmark } from 'lucide-react'
import './Contact.css'

const SMS_PRETEXT = encodeURIComponent(
  'Hello, I would like to book an appointment at ILAR CLINIC. Please let me know the available slots. Thank you.'
)

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="section bg-navy" ref={ref}>
      <div className="container contact__inner">
        {/* Heading */}
        <div className={`text-center reveal ${inView ? 'visible' : ''}`} style={{ marginBottom: 'var(--space-12)', color: 'var(--clr-white)' }}>
          <span className="section-label" style={{ background: 'rgba(201,168,76,0.18)', color: 'var(--clr-gold-light)' }}>
            Get In Touch
          </span>
          <h2 className="section-title text-white">Book Your <span>Appointment</span></h2>
          <div className="gold-divider" style={{ margin: '0 auto var(--space-4)' }} />
          <p className="section-subtitle text-white" style={{ margin: '0 auto', opacity: 0.75 }}>
            Call us to schedule your visit. We are available every evening, 6 PM to 9 PM.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left – Call CTAs */}
          <div className={`contact__cta-col reveal ${inView ? 'visible' : ''}`}>
            {/* Primary call */}
            <div className="contact__cta-card contact__cta-card--primary">
              <div className="contact__cta-icon-bg">
                <PhoneCall size={22} className="contact__cta-lucide-icon" />
              </div>
              <div>
                <p className="contact__cta-label">Primary Appointment Number</p>
                <p className="contact__cta-number">9566024185</p>
                <p className="contact__cta-note">CALL ONLY · No WhatsApp</p>
              </div>
              <a href="tel:9566024185" className="btn-call contact__call-btn" id="contact-primary-call">
                <Phone size={18} strokeWidth={2.5} />
                CALL FOR APPOINTMENT
              </a>
            </div>

            {/* Landline */}
            <div className="contact__cta-card">
              <div className="contact__cta-icon-bg">
                <Phone size={20} className="contact__cta-lucide-icon" />
              </div>
              <div>
                <p className="contact__cta-label">Landline</p>
                <p className="contact__cta-number contact__cta-number--sm">04431327356</p>
              </div>
              <a href="tel:04431327356" className="btn-call-outline contact__landline-btn" id="contact-landline-call">
                <Phone size={16} />
                CALL LANDLINE
              </a>
            </div>

            {/* SMS */}
            <div className="contact__cta-card">
              <div className="contact__cta-icon-bg">
                <MessageSquare size={20} className="contact__cta-lucide-icon" />
              </div>
              <div>
                <p className="contact__cta-label">Send an SMS Request</p>
                <p className="contact__cta-note">Opens your SMS app with pre-filled text</p>
              </div>
              <a
                href={`sms:9566024185?body=${SMS_PRETEXT}`}
                className="btn-sms contact__sms-btn"
                id="contact-sms-btn"
              >
                <MessageSquare size={16} />
                SMS NOW
              </a>
            </div>
          </div>

          {/* Right – Info + Map */}
          <div className={`contact__info-col reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            {/* Info cards */}
            <div className="contact__info-cards">
              <div className="contact__info-card">
                <MapPin size={20} className="contact__info-icon" />
                <div>
                  <p className="contact__info-title">Clinic Address</p>
                  <p className="contact__info-body">
                    106, 105/1, BB Rd, opposite Aavin Parlour,<br />
                    Chinnaiyan Colony, Perambur,<br />
                    Chennai, Tamil Nadu – 600011
                  </p>
                </div>
              </div>
              <div className="contact__info-card">
                <Clock size={20} className="contact__info-icon" />
                <div>
                  <p className="contact__info-title">Working Hours</p>
                  <p className="contact__info-body">
                    Every Day &nbsp;|&nbsp; <strong>6:00 PM – 9:00 PM</strong>
                  </p>
                </div>
              </div>
              <div className="contact__info-card">
                <Landmark size={20} className="contact__info-icon" />
                <div>
                  <p className="contact__info-title">Appointment Method</p>
                  <p className="contact__info-body">
                    <strong>Call Only</strong> · No walk-in bookings required ·
                    WhatsApp not available
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.454004174074!2d80.25172226953026!3d13.110838999201093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265bdc5818aa7%3A0x124bfb4e51d15409!2s105%2F2%2C%20Chinnaiyan%20Colony%2C%20Perambur%2C%20Chennai%2C%20Tamil%20Nadu%20600011!5e0!3m2!1sen!2sin!4v1789754231621!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ILAR CLINIC Location Map"
              />
              <p className="contact__map-note">
                <MapPin size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                Google Business listing currently under verification
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
