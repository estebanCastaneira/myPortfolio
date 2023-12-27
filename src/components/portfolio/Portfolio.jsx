import { useRef } from "react"
import Projects from "./Projects"
function Portfolio({ lang }) {
  const sectionPortfolio = useRef(null)
  return (
    <div id="portfolio" ref={sectionPortfolio} className="pt-32 sm:py-24">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Portfo<span className="flicker">l</span>io
      </h2>
      <Projects lang={lang} />
    </div>
  )
}

export default Portfolio
