import { useRef } from "react"
import me from "/img/me.jpg"
function About() {
  const sectionAbout = useRef(null)
  return (
    <div id="about" ref={sectionAbout} className="py-32 sm:py-28">
      <h2 className="neonText text-4xl text-center">
        About <span className="flicker">M</span>e
      </h2>
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center my-20">
        <div className="container-profile sm:w-[50%] ">
          <div className="profile w-[85%]">
            <img className="rounded-full" src={me} alt="" />
          </div>
        </div>
        <div className="sm:w-[50%] sm:text-lg">
          <p>Hello, there! I'm Esteban.</p>
          <p>
            In 2020 the pandemic prompted me to reevaluate my career in
            Psychology. I chose to leave it behind and quickly discovered a
            passion for Programming. Since then, I've been dedicating time to
            developing my programming skills and knowledge.
          </p>
          <p>
            Now, having successfully completed my studies as a Jr. Full Stack
            Dev, I'm seeking opportunities in the IT field to apply what I've
            learned, contribute to projects, and continue growing in this
            exciting area.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
{
  /*  */
}
