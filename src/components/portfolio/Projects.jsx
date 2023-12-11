import ProjectCard from "./ProjectCard"
import projectsData from "../../data/projects.json"
import { useEffect, useState } from "react"
function Projects() {
  const [projects, setProjects] = useState([])
  const [isMobile, setIsMobile] = useState()
  useEffect(() => {
    setProjects(projectsData.data)
    setIsMobile(window.matchMedia("(max-width: 767px)").matches)
  }, [])

  return (
    <div className="projectsContainer flex flex-wrap justify-center lg:justify-start mt-20">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} isMobile={isMobile} />
      ))}
    </div>
  )
}

export default Projects
