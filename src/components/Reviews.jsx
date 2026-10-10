export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section section-shell">
      <div className="container section-head center-head">
        <div>
          <span className="section-label">Our Customers Say</span>
          <h2>We Would Love Your Feedback</h2>
        </div>
      </div>

      <div className="container review-invitation">
        <p>
          Visited Sujatha Nursery? Share your experience and help other plant lovers find us.
        </p>
        <a
          className="button button-primary"
          href="https://www.google.com/maps/search/?api=1&query=Sujatha+Nursery+Bengaluru+India"
          target="_blank"
          rel="noreferrer"
        >
          Find Us on Google Maps
        </a>
      </div>
    </section>
  )
}
