import { useRef } from "react"
import AboutMe from "./AboutMe"
import WebDevelopment from "./WebDevelopment"
function About({ lang }) {
  const sectionAbout = useRef(null)
  return (
    <div id="about" ref={sectionAbout} className="pt-32 sm:py-24">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        {lang === "en" ? (
          <>
            Abo<span className="flicker">u</span>t
          </>
        ) : (
          <>
            Acer<span className="flicker">c</span>a De
          </>
        )}
      </h2>
      <WebDevelopment lang={lang} />
      <AboutMe lang={lang} />
    </div>
  )
}

export default About
