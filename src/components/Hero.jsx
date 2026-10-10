import { useEffect, useState } from 'react'
import nurseryPhotoOne from '../assets/nursery-intro-2.png'
import nurseryPhotoTwo from '../assets/nursery-intro-1.png'

const heroImages = [nurseryPhotoOne, nurseryPhotoTwo]

export default function Hero({ onExplore }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-slides" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            key={image}
            className={`hero-slide ${activeImage === index ? 'is-active' : ''}`}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Welcome to Sujatha Nursery</span>
          <h1>Let Nature Find Its Way Home.</h1>
          <p>
            Discover plants for every space, every season, and every growing dream. From vibrant flowers to lush greenery,
            bring nature closer to you.
          </p>
          <div className="hero-actions">
            <button type="button" className="button button-primary" onClick={onExplore}>
              Explore Plants
            </button>
            <a href="#about" className="button button-secondary">
              Find Your Green
            </a>
          </div>
          <div className="split-pills" aria-label="Plant categories">
            {['Wide Variety', 'Healthy Plants', 'Expert Guidance', 'Garden Solutions'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span />
      </div>
      <div className="hero-slide-controls" role="group" aria-label="Choose nursery photo">
        {heroImages.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`hero-slide-dot ${activeImage === index ? 'is-active' : ''}`}
            aria-label={`Show nursery photo ${index + 1}`}
            aria-pressed={activeImage === index}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>
    </section>
  )
}
