import { useRef } from "react"

function Portfolio() {
  const sectionPortfolio = useRef(null)
  return (
    <div id="portfolio" ref={sectionPortfolio} className="h-screen">
      <h2>Portfolio</h2>
    </div>
  )
}

export default Portfolio
