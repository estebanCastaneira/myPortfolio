import LinkedinIcon from "../assets/icons/LinkedinIcon"
import GithubIcon from "../assets/icons/GithubIcon"
import neonText from "../functions/neonText"
function Header() {
  return (
    <header className="bg-zinc-800 py-4 sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-10">
      <nav>
        <div className="w-[85%] my-0 mx-auto flex justify-between items-center sm:items-start ">
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
                <GithubIcon width={30} height={30} />
              </a>
            </div>
          </div>
          <div>
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
          </div>
          {/* Hamburger Icon */}
          <button
            className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 sm:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
