import ProjectCard from "./ProjectCard"
import projectsData from "../../data/projects.json"
import { useEffect } from "react"
function Projects() {
  useEffect(() => {
    const projects = projectsData.data
    console.log(projects)
  }, [])

  return (
    <div className="projectsContainer">
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Projects
