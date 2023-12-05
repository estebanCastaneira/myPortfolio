import { useRef } from "react"
function Contact() {
  const sectionContact = useRef(null)
  return (
    <div id="contact" ref={sectionContact} className="h-screen pt-32 sm:py-24">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Conta<span className="flicker">c</span>t
      </h2>
    </div>
  )
}

export default Contact
