import './styles/global.css'
import Header       from './components/layout/Header'
import Footer       from './components/layout/Footer'
import Hero         from './components/sections/Hero'
import About        from './components/sections/About'
import Doctors      from './components/sections/Doctors'
import Services     from './components/sections/Services'
import Achievements from './components/sections/Achievements'
import Facilities   from './components/sections/Facilities'
import Gallery      from './components/sections/Gallery'
import Contact      from './components/sections/Contact'
import { Phone }    from 'lucide-react'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Doctors />
        <Services />
        <Achievements />
        <Facilities />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {/* Floating mobile call button */}
      <div className="floating-call" aria-label="Call for appointment">
        <a href="tel:9566024185" id="floating-call-btn">
          <Phone size={18} strokeWidth={2.5} />
          CALL NOW
        </a>
      </div>
    </>
  )
}
