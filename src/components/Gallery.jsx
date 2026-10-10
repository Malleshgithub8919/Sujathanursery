import { useMemo, useState } from 'react'
import Lightbox from './Lightbox'

export default function Gallery({ images }) {
  const [showAll, setShowAll] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const visibleImages = useMemo(
    () => (showAll ? images : images.slice(0, 5)),
    [images, showAll],
  )

  return (
    <section id="gallery" className="gallery-section section-shell">
      <div className="container section-head">
        <div>
          <span className="section-label">Our Gallery</span>
          <h2>A Closer Look at Green</h2>
        </div>
        <button type="button" className="button button-secondary small-button" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? 'Show Less' : 'View All Photos'}
        </button>
      </div>

      <div className="container gallery-grid">
        {visibleImages.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            className={`gallery-item gallery-item-${index + 1}`}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open gallery image ${index + 1}`}
          >
            <img src={image} alt="Nursery garden display" loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        isOpen={selectedIndex !== null}
        image={visibleImages[selectedIndex] || images[selectedIndex]}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  )
}
