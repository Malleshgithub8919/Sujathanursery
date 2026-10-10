import { useEffect, useState } from 'react'

export default function PlantCategories({ categories, selectedCategory, onSelect, onReset }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(() => (
    window.matchMedia('(max-width: 640px)').matches
      ? 1
      : window.matchMedia('(max-width: 980px)').matches
        ? 2
        : 4
  ))

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
    if (categories.length <= visibleCount) return undefined

    const intervalId = window.setInterval(() => {
      setSlideIndex((currentIndex) => (currentIndex + 1) % categories.length)
    }, 2500)

    return () => window.clearInterval(intervalId)
  }, [categories.length, visibleCount])

  const visibleCategories = categories.length > 0
    ? Array.from(
      { length: Math.min(visibleCount, categories.length) },
      (_, offset) => categories[(slideIndex + offset) % categories.length],
    )
    : []

  const moveSlide = (direction) => {
    setSlideIndex((currentIndex) => (
      (currentIndex + direction + categories.length) % categories.length
    ))
  }

  return (
    <section className="categories-section section-shell">
      <div className="container section-head">
        <div>
          <span className="section-label">Explore by Category</span>
          <h2>A World That Grows With You</h2>
        </div>
        <button type="button" className="button button-secondary small-button" onClick={onReset}>
          View All Categories
        </button>
      </div>

      <div className="container category-carousel" aria-roledescription="carousel" aria-label="Plant categories">
        <div className="category-grid" key={slideIndex} aria-live="polite">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`category-card ${selectedCategory === category.id ? 'selected' : ''}`}
              onClick={() => onSelect(category.id)}
            >
              <span className="category-image" style={{ backgroundImage: `url(${category.image})` }} />
              <span className="category-body">
                <strong>{category.name}</strong>
                <small>{category.description}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      {categories.length > 1 && (
        <div className="container category-carousel-controls">
          <button
            type="button"
            className="category-carousel-arrow"
            onClick={() => moveSlide(-1)}
            aria-label="Previous plant categories"
          >
            ‹
          </button>
          <div className="category-carousel-dots" aria-label="Choose plant category slide">
            {categories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                className={`category-carousel-dot ${slideIndex === index ? 'active' : ''}`}
                onClick={() => setSlideIndex(index)}
                aria-label={`Show ${category.name}`}
                aria-pressed={slideIndex === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="category-carousel-arrow"
            onClick={() => moveSlide(1)}
            aria-label="Next plant categories"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
