import { useRef } from "react"
function Contact() {
  const sectionContact = useRef(null)
  return (
    <div id="contact" ref={sectionContact} className="h-screen">
      <h2>Contact</h2>
    </div>
  )
}

export default Contact
