import ProjectCard from "./ProjectCard"
import projectsData from "../../data/projects.json"
import { useEffect, useState } from "react"
function Projects({ lang }) {
  const [projects, setProjects] = useState([])
  const [isMobile, setIsMobile] = useState()
  useEffect(() => {
    setProjects(projectsData.data)
    setIsMobile(window.matchMedia("(max-width: 640px)").matches)

    const updateWindowWidth = () => {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches)
    }

    const handleResize = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        updateWindowWidth()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  return (
    <div className="projectsContainer flex flex-wrap justify-center lg:justify-start mt-20">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isMobile={isMobile}
          lang={lang}
        />
      ))}
    </div>
  )
}

export default Projects
