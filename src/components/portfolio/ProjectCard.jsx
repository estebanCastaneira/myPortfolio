import link_icon from "/icons/link_icon.png"
function ProjectCard({ project }) {
  const divStyle = {
    backgroundImage: `url(${project.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "400px",
    height: "400px",
  }
  return (
    <a href={project.url} target="_blank">
      <div
        id={project.name}
        className="project-card relative border border-violet-800 bg-transparent opacity-60 hover:opacity-100 "
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <h3 className="neonText text-lg text-center whitespace-nowrap font-bold">
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
