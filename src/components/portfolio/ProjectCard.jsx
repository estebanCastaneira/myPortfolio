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
    <div
      id={project.name}
      className="project-card relative rounded-xl border border-violet-800 bg-transparent opacity-60 hover:opacity-100 "
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer  ">
        <h3 className="neonText text-lg text-center whitespace-nowrap">
          {project.name.toUpperCase()}
        </h3>
        <p className="bg-black absolute break-words text-center w-full">
          {project.description}
        </p>
      </div>

      <a href={project.url} target="_blank">
        <div className="rounded-xl" style={divStyle}></div>
      </a>
    </div>
  )
}

export default ProjectCard
