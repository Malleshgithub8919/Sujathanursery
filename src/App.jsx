import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import PlantCategories from './components/PlantCategories'
import FeaturedPlants from './components/FeaturedPlants'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { categories } from './data/categories'
import { plants } from './data/plants'
import { services } from './data/services'
import { galleryImages } from './data/gallery'
import { categoryImages } from './data/categoryImages'

const categoryMeta = {
  flowering: 'flowering',
  indoor: 'indoor',
  outdoor: 'outdoor',
  fruit: 'fruit',
  ornamental: 'ornamental',
  palm: 'palm',
  avenue: 'avenue',
  landscape: 'landscape',
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [preselectedPlant, setPreselectedPlant] = useState('')

  const categoriesWithImages = useMemo(
    () => categories.map((category) => ({ ...category, image: categoryImages[category.id] })),
    [],
  )

  const handleExplore = () => {
    setSelectedCategory('all')
    document.getElementById('plants')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCategorySelect = (category) => {
    const normalized = categoryMeta[category] || category
    setSelectedCategory(normalized)
    setTimeout(() => {
      document.getElementById('plants')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const handleEnquire = (plantName) => {
    setPreselectedPlant(plantName)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Header />
      <main>
        <Hero onExplore={handleExplore} />
        <About />
        <PlantCategories
          categories={categoriesWithImages}
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
          onReset={() => setSelectedCategory('all')}
        />
        <FeaturedPlants
          plants={plants}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategorySelect}
          onEnquire={handleEnquire}
        />
        <Services services={services} />
        <Gallery images={galleryImages} />
        <Reviews />
        <Contact preselectedPlant={preselectedPlant} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
