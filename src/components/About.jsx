import aboutPhoto from '../assets/nursery-about.png'

const highlights = [
  'Healthy & Quality Plants',
  'Wide Plant Variety',
  'Expert Guidance',
  'Plants for Every Space',
]

export default function About() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="container about-grid">
        <div className="about-visuals">
          <img className="about-photo photo-main" src={aboutPhoto} alt="Plants displayed at Sujatha Nursery" />
        </div>

        <div className="about-content">
          <span className="section-label">About Sujatha Nursery</span>
          <h2>Nurturing Green Lives Every Day.</h2>
          <p>
            Sujatha Nursery is a place where nature, people, and beautiful living spaces come together. We offer a wide range
            of plants and practical guidance to help homes, balconies, and gardens feel healthier, brighter, and more alive.
          </p>
          <div className="highlight-list">
            {highlights.map((item) => (
              <div key={item} className="highlight-item">
                <span className="highlight-icon">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="button button-primary inline-button">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
