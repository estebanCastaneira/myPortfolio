import { useEffect, useRef, useState } from "react"
import isInViewPort from "../../functions/isInViewporrt"

function ProjectCard({ project, isMobile, lang }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mouseEnter, setMoueseEnter] = useState(false)

  const handleOnMouseEnter = () => {
    setMoueseEnter(true)
  }
  const handleOnMouseLeave = () => {
    setMoueseEnter(false)
  }

  const divStyle = {
    backgroundImage: `url(${project.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% , 80% ",

    width: "380px",
    height: "380px",
    transition: "transform 0.3s ease-in-out",
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(isInViewPort(elementRef))
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <a
      className={`${
        isVisible && isMobile ? "opacity-100" : "opacity-50"
      } project-card relative transition-all sm:opacity-50 sm:hover:opacity-100 sm:hover:scale-105 `}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      ref={elementRef}
    >
      <div id={project.id}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10">
          <h3
            className={`${
              (mouseEnter || isVisible) && "neonText"
            } text-lg text-center font-bold whitespace-nowrap`}
          >
            {project.name.toUpperCase()}
          </h3>
          <p className="bg-black bg-opacity-80 p-2 break-words text-center">
            {lang === "en" ? project.description_en : project.description_es}
          </p>
        </div>

        <div className="relative" style={divStyle}>
          <div className="absolute h-full w-full bg-gradient-to-t from-zinc-800 to-violet-950 opacity-60"></div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
