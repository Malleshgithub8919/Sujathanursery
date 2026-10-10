import storyPhoto from '../assets/nursery-story.png'

const benefits = [
  'Home and balcony greenery',
  'Flowering and foliage variety',
  'Fruit and garden plants',
  'Guidance for plant lovers',
]

export default function NurseryStory() {
  return (
    <section className="story-section section-shell">
      <div className="container story-shell">
        <div className="story-visual">
          <img className="story-image-large" src={storyPhoto} alt="Flowering plants at Sujatha Nursery" />
        </div>

        <div className="story-content">
          <span className="section-label">More Than Plants</span>
          <h2>A Greener, Happier Way of Living</h2>
          <p>
            Plants do more than decorate a space. They add calm, colour, and personality to homes, balconies, patios, and
            garden corners. A thoughtful collection of greenery can soften everyday routines and bring life to every corner.
          </p>
          <ul className="benefit-list">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contact" className="button button-primary inline-button">
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  )
}
