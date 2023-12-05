import { useState, useEffect } from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
function App() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sectionHero = document.getElementById("hero")
      const sectionAbout = document.getElementById("about")
      const sectionPortfolio = document.getElementById("portfolio")
      const sectionContact = document.getElementById("contact")

      const rect1 = sectionHero.getBoundingClientRect()
      const rect2 = sectionAbout.getBoundingClientRect()
      const rect3 = sectionPortfolio.getBoundingClientRect()
      const rect4 = sectionContact.getBoundingClientRect()

      const offset = window.innerHeight * 0.4
      if (rect1.top - offset <= 0 && rect1.bottom - offset > 0) {
        setActiveSection("hero")
      }
      if (rect2.top - offset <= 0 && rect2.bottom - offset > 0) {
        setActiveSection("about")
      }
      if (rect3.top - offset <= 0 && rect3.bottom - offset > 0) {
        setActiveSection("portfolio")
      }
      if (rect4.top - offset <= 0 && rect4.bottom - offset > 0) {
        setActiveSection("contact")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="bg-gradient-to-t from-zinc-800 to-violet-950">
        <Header activeSection={activeSection} />
        <main className="">
          <Hero />
          <div className="w-[80%] mx-auto">
            <About />
            <Portfolio />
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
