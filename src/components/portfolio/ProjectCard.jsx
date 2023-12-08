function ProjectCard({ project }) {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>project.description</p>
        <a href={project.url}>Go There!</a>
      </div>
    </div>
  )
}

export default ProjectCard
