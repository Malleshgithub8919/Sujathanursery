import introPhotoOne from '../assets/nursery-intro-1.png'
import introPhotoTwo from '../assets/nursery-intro-2.png'

export default function GardenIntro({ onSkip }) {
  return (
    <div className="intro-overlay" aria-live="polite">
      <div className="intro-scene">
        <div className="intro-photos" aria-hidden="true">
          <img src={introPhotoOne} alt="" />
          <img src={introPhotoTwo} alt="" />
        </div>

        <div className="intro-gates">
          <span className="gate left" />
          <span className="gate right" />
        </div>

        <div className="intro-content">
          <div className="brand-badge">Sujatha Nursery</div>
          <h2>Enter the Living Garden</h2>
        </div>

        <button type="button" className="skip-intro" onClick={onSkip}>
          Skip Intro
        </button>
      </div>
    </div>
  )
}
