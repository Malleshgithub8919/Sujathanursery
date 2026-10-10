import { useEffect, useState } from 'react'

export default function FeaturedPlants({ plants, selectedCategory, onCategoryClick, onEnquire }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(() => (
    window.matchMedia('(max-width: 640px)').matches
      ? 1
      : window.matchMedia('(max-width: 980px)').matches
        ? 2
        : 4
  ))

  const filteredPlants = selectedCategory === 'all'
    ? plants
    : plants.filter((plant) => plant.category === selectedCategory)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 640px)')
    const tabletQuery = window.matchMedia('(max-width: 980px)')
    const updateVisibleCount = () => {
      setVisibleCount(mobileQuery.matches ? 1 : tabletQuery.matches ? 2 : 4)
    }

    mobileQuery.addEventListener('change', updateVisibleCount)
    tabletQuery.addEventListener('change', updateVisibleCount)

    return () => {
      mobileQuery.removeEventListener('change', updateVisibleCount)
      tabletQuery.removeEventListener('change', updateVisibleCount)
    }
  }, [])

  useEffect(() => {
    setSlideIndex(0)
  }, [selectedCategory])

  useEffect(() => {
    if (filteredPlants.length <= visibleCount) return undefined

    const intervalId = window.setInterval(() => {
      setSlideIndex((currentIndex) => (currentIndex + 1) % filteredPlants.length)
    }, 2500)

    return () => window.clearInterval(intervalId)
  }, [filteredPlants.length, visibleCount])

  const visiblePlants = filteredPlants.length > 0
    ? Array.from(
      { length: Math.min(visibleCount, filteredPlants.length) },
      (_, offset) => filteredPlants[(slideIndex + offset) % filteredPlants.length],
    )
    : []

  const moveSlide = (direction) => {
    setSlideIndex((currentIndex) => (
      (currentIndex + direction + filteredPlants.length) % filteredPlants.length
    ))
  }

  return (
    <section id="plants" className="featured-section section-shell">
      <div className="container section-head">
        <div>
          <span className="section-label">Our Featured Plants</span>
          <h2>Find Your Next Favourite</h2>
        </div>
        <div className="filter-pills" aria-label="Plant filters">
          {['All', 'Indoor', 'Outdoor', 'Flowering', 'Fruit', 'Palm'].map((pill) => (
            <button
              key={pill}
              type="button"
              className={`pill ${selectedCategory === pill.toLowerCase() || (pill === 'All' && selectedCategory === 'all') ? 'active' : ''}`}
              onClick={() => onCategoryClick(pill === 'All' ? 'all' : pill.toLowerCase())}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      <div className="container plant-carousel" aria-roledescription="carousel" aria-label="Featured plants">
        <div className="plant-grid" key={`${selectedCategory}-${slideIndex}`} aria-live="polite">
          {visiblePlants.map((plant) => (
            <article key={plant.id} className="plant-card">
              <div className="plant-image-wrap">
                <img src={plant.image} alt={plant.name} loading="lazy" />
              </div>
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <div className="plant-meta">
                  <span>{plant.category}</span>
                  <button type="button" className="button button-primary thin" onClick={() => onEnquire(plant.name)}>
                    Enquire Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {filteredPlants.length > 1 && (
        <div className="container plant-carousel-controls">
          <button
            type="button"
            className="plant-carousel-arrow"
            onClick={() => moveSlide(-1)}
            aria-label="Previous featured plants"
          >
            ‹
          </button>
          <div className="plant-carousel-dots" aria-label="Choose featured plant slide">
            {filteredPlants.map((plant, index) => (
              <button
                key={plant.id}
                type="button"
                className={`plant-carousel-dot ${slideIndex === index ? 'active' : ''}`}
                onClick={() => setSlideIndex(index)}
                aria-label={`Show ${plant.name}`}
                aria-pressed={slideIndex === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="plant-carousel-arrow"
            onClick={() => moveSlide(1)}
            aria-label="Next featured plants"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
