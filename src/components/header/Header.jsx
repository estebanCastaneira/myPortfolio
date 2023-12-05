import Dropdown from "./Dropdown"
import LinkedinIcon from "../../assets/icons/LinkedinIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import scrollToSection from "../../functions/scrollToSection"

function Header({ activeSection }) {
  const handleOnClik = (section) => {
    scrollToSection(section)
  }
  return (
    <header className="bg-zinc-800 py-4 fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 w-full">
      <nav>
        <div className="w-[80%] my-0 mx-auto flex justify-between items-center sm:items-start ">
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-bold mr-10 text-lg">
              Esteban Castañeira
              <span
                className={`sm:ml-2 font-thin block sm:inline-block transform transition hover:scale-90 hover:cursor-pointer tracking-widest z-20 ${
                  activeSection === "hero" && "neonText"
                }`}
                onClick={() => handleOnClik("hero")}
              >
                Full Stack Devel<span className="flicker">o</span>per
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
            <ul className="sm:flex hidden gap-9 text-lg">
              <li className="hover:scale-90 transform transition ">
                <button
                  className={`tracking-widest neon ${
                    activeSection === "about" && "neonText"
                  }`}
                  onClick={() => handleOnClik("about")}
                >
                  Abo<span className="flicker">u</span>t
                </button>
              </li>
              <li className="hover:scale-90 transform transition">
                <button
                  className={`tracking-widest neon ${
                    activeSection === "portfolio" && "neonText"
                  }`}
                  onClick={() => handleOnClik("portfolio")}
                >
                  Portfo<span className="flicker">l</span>io
                </button>
              </li>
              <li className="hover:scale-90 transform transition">
                <button
                  className={`tracking-widest neon ${
                    activeSection === "contact" && "neonText"
                  }`}
                  onClick={() => handleOnClik("contact")}
                >
                  Conta<span className="flicker">c</span>t
                </button>
              </li>
            </ul>
            <Dropdown activeSection={activeSection} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
