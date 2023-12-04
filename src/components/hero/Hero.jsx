import { useRef } from "react"

function Hero() {
  const sectionHero = useRef(null)
  return (
    <div id="hero" ref={sectionHero} className="h-screen">
      <h2>Hero</h2>
    </div>
  )
}

export default Hero
