import ProjectCard from "./ProjectCard"
import projectsData from "../../data/projects.json"
import { useEffect, useState } from "react"
function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(projectsData.data)
  }, [])
  console.log(projects)
  return (
    <div className="projectsContainer flex flex-wrap justify-center mt-20">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
