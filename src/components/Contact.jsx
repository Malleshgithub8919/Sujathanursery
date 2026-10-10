import { useEffect, useState } from 'react'
import { plants } from '../data/plants'

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  interest: 'Plant Selection Guidance',
  message: '',
}

const interestOptions = [
  'Plant Selection Guidance',
  'Garden Planning',
  'Landscape Planting',
  'Bulk Plant Enquiries',
  'Garden Maintenance',
  'Plant Care Guidance',
  ...plants.map((plant) => plant.name),
]

export default function Contact({ preselectedPlant }) {
  const [formData, setFormData] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (preselectedPlant) {
      setFormData((current) => ({ ...current, interest: preselectedPlant }))
    }
  }, [preselectedPlant])

  const validate = () => {
    const nextErrors = {}

    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!formData.phone.trim()) nextErrors.phone = 'Please add a phone number.'
    if (!formData.message.trim()) nextErrors.message = 'Please tell us what you need.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData(initialValues)
      setErrors({})
    }, 700)
  }

  return (
    <section id="contact" className="contact-section section-shell">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="section-label">Get in Touch</span>
          <h2>Visit Sujatha Nursery</h2>
          <p>We would love to welcome you to our nursery and help you discover plants that fit your home, garden, and lifestyle.</p>

          <div className="contact-list">
            <div><strong>Address</strong><span>123 Green Way, Bengaluru, India</span></div>
            <div><strong>Phone</strong><span>+91 98765 43210</span></div>
            <div><strong>Email</strong><span>hello@sujathanursery.in</span></div>
            <div><strong>Opening Hours</strong><span>Mon-Sat: 9:00am - 7:00pm</span></div>
          </div>

          <div className="map-card">
            <iframe
              title="Sujatha Nursery area map"
              src="https://maps.google.com/maps?q=Sujatha%20Nursery%2C%20Bengaluru%2C%20India&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            className="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Sujatha+Nursery+Bengaluru+India"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Full Name
              <input name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <small>{errors.fullName}</small>}
            </label>
            <label>
              Phone Number
              <input name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <small>{errors.phone}</small>}
            </label>
          </div>

          <div className="form-row">
            <label>
              Email (optional)
              <input name="email" type="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Plant or Service
              <select name="interest" value={formData.interest} onChange={handleChange}>
                {interestOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} />
            {errors.message && <small>{errors.message}</small>}
          </label>

          <div className="form-actions">
            <button type="submit" className="button button-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
            </button>
          </div>

          {status === 'success' && <p className="form-alert success">Front-end demo only: enquiry request captured locally and not sent to a backend.</p>}
          {status === 'error' && <p className="form-alert error">Please complete the required fields and try again.</p>}
        </form>
      </div>
    </section>
  )
}
