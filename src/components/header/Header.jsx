import Dropdown from "./Dropdown"
import LinkedinIcon from "../../assets/icons/LinkedinIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import neonText from "../../functions/neonText"
import scrollToSection from "../../functions/scrollToSection"

function Header() {
  return (
    <header className="bg-zinc-800 py-4 sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-10">
      <nav>
        <div className="w-[80%] my-0 mx-auto flex justify-between items-center sm:items-start ">
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-bold mr-10 text-lg">
              Esteban Castañeira
              <span
                className="sm:ml-2 font-thin block sm:inline-block transform transition hover:scale-90 hover:cursor-pointer tracking-widest neon"
                style={neonText("#008fff")}
                onClick={() => scrollToSection("hero")}
              >
                Full Stack Devel<span className="delay">o</span>per
              </span>
            </h2>
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
              <li className="hover:scale-90 transform transition ">
                <button
                  className="tracking-widest neon"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li className="hover:scale-90 transform transition">
                <button
                  className="tracking-widest neon"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </button>
              </li>
              <li className="hover:scale-90 transform transition">
                <button
                  className="tracking-widest neon"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
            <Dropdown />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header