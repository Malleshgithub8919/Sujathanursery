export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span className="brand-text">
              <strong>Sujatha Nursery</strong>
            </span>
          </div>
          <p>Bringing nature closer to you with thoughtful plant choices and greener living spaces.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h3>Plant Categories</h3>
          <ul>
            <li><a href="#plants">Flowering Plants</a></li>
            <li><a href="#plants">Indoor Plants</a></li>
            <li><a href="#plants">Fruit Plants</a></li>
            <li><a href="#plants">Landscape Plants</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><a href="mailto:hello@sujathanursery.in">hello@sujathanursery.in</a></li>
            <li>123 Green Way, Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2025 Sujatha Nursery. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
