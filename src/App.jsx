import { useState, useEffect } from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import i18n from "../i18n.js"
function App() {
  const [activeSection, setActiveSection] = useState("hero")
  const [lang, setLang] = useState("en")
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "portfolio", "contact"]
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (!section) continue
        const rect = section.getBoundingClientRect()
        const offset = window.innerHeight * 0.4
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          setActiveSection(section.id)
        }
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
        <Header activeSection={activeSection} setLang={setLang} lang={lang} />

        <Hero />
        <main className="w-[80%] mx-auto">
          <About lang={lang} />
          <Portfolio lang={lang} />
          <Contact lang={lang} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
