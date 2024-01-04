import { useRef } from "react"
import AboutMe from "./AboutMe"
import WebDevelopment from "./WebDevelopment"
function About({ lang }) {
  const sectionAbout = useRef(null)
  return (
    <div id="about" ref={sectionAbout} className="pt-32">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        {lang === "en" ? (
          <>
            Abo<span className="flicker">u</span>t Me
          </>
        ) : (
          <>
            Sob<span className="flicker">r</span>e Mi
          </>
        )}
      </h2>
      <AboutMe lang={lang} />
      <WebDevelopment lang={lang} />
    </div>
  )
}

export default About
