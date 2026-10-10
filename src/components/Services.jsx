export default function Services({ services }) {
  return (
    <section id="services" className="services-section section-shell">
      <div className="container section-head dark-head">
        <div>
          <span className="section-label">Our Services</span>
          <h2>Let Us Help Your Garden Grow</h2>
        </div>
        <a href="#contact" className="button button-secondary small-button light-button">View All Services</a>
      </div>

      <div className="container services-grid">
        {services.map((service) => (
          <article key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact">Enquire</a>
          </article>
        ))}
      </div>
    </section>
  )
}
