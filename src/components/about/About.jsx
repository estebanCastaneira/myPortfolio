import { useRef } from "react"
import AboutMe from "./AboutMe"
function About() {
  const sectionAbout = useRef(null)
  return (
    <div
      id="about"
      ref={sectionAbout}
      className="pt-32 sm:py-24 w-[80%] mx-auto"
    >
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Abo<span className="flicker">u</span>t
      </h2>
      <h2></h2>
      <AboutMe />
    </div>
  )
}

export default About
