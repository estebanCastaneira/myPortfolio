import { useState, useEffect } from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
function App() {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      // Obtener las posiciones y dimensiones de las secciones
      const sectionHero = document.getElementById("hero")
      const sectionAbout = document.getElementById("about")
      const sectionPortfolio = document.getElementById("portfolio")
      const sectionContact = document.getElementById("contact")

      const rect1 = sectionHero.getBoundingClientRect()
      const rect2 = sectionAbout.getBoundingClientRect()
      const rect3 = sectionPortfolio.getBoundingClientRect()
      const rect4 = sectionContact.getBoundingClientRect()

      // Determinar en qué sección se encuentra el usuario
      if (rect1.top <= 0 && rect1.bottom > 0) {
        setActiveSection("hero")
      } else if (rect2.top <= 0 && rect2.bottom > 0) {
        setActiveSection("about")
      } else if (rect3.top <= 0 && rect3.bottom > 0) {
        setActiveSection("portfolio")
      } else if (rect4.top <= 0 && rect4.bottom > 0) {
        setActiveSection("contact")
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="bg-zinc-900 min-h-screen">
        <Header activeSection={activeSection} />
        <main className="w-[80%] mx-auto">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
