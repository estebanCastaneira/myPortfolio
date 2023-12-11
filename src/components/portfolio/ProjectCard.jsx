import { useEffect, useState } from "react"
function ProjectCard({ project, isMobile }) {
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
    backgroundPosition: "center",
    width: "380px",
    height: "380px",
    transition: "transform 0.3s ease-in-out", // Agrega una transición para la propiedad 'transform'
  }
  return (
    <a
      className="project-card relative  bg-transparent opacity-100 sm:opacity-50 sm:hover:opacity-100 sm:hover:scale-105 hover:z-10"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div id={project.id}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <h3
            className={`${
              (mouseEnter || isMobile) && "neonText"
            } text-lg text-center font-bold whitespace-nowrap`}
          >
            {project.name.toUpperCase()}
          </h3>
          <p className="bg-black bg-opacity-70 p-2 break-words text-center">
            {project.description}
          </p>
        </div>

        <div style={divStyle}></div>
      </div>
    </a>
  )
}

export default ProjectCard
