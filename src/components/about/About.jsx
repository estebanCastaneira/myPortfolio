import { useRef } from "react"
function About() {
  const sectionAbout = useRef(null)
  return (
    <div id="about" ref={sectionAbout} className="h-screen">
      <h2>About</h2>
    </div>
  )
}

export default About
