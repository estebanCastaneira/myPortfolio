import { useRef } from "react"
import AboutMe from "./AboutMe"
import WebDevelopment from "./WebDevelopment"
function About() {
  const sectionAbout = useRef(null)
  return (
    <div id="about" ref={sectionAbout} className="pt-32 sm:py-24">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Abo<span className="flicker">u</span>t
      </h2>
      <WebDevelopment />
      <AboutMe />
    </div>
  )
}

export default About
