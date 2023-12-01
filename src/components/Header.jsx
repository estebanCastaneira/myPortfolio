import LinkedinIcon from "../assets/icons/LinkedinIcon"
import GithubIcon from "../assets/icons/GithubIcon"
import neonText from "../functions/neonText"
function Header() {
  return (
    <header className="bg-zinc-800 py-4">
      <div className="w-[85%] flex justify-between my-0 mx-auto">
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold">
            Esteban Castañeira{" "}
            <span
              className="text-blue-200 font-thin block sm:inline-block transform transition hover:scale-110 hover:cursor-pointer"
              style={neonText("#008fff")}
            >
              Full Stack Developer
            </span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/estebancastaneira/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex transform transition-transform hover:scale-125"
            >
              <LinkedinIcon width={25} height={25} />
            </a>
            <a
              href="https://github.com/estebanCastaneira"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex transform transition-transform hover:scale-125"
            >
              <GithubIcon width={30} height={30} className="hover:scale-110" />
            </a>
          </div>
        </div>
        <nav>
          <ul className="sm:flex hidden gap-9 ">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
