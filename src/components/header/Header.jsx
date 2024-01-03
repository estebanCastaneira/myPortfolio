import ContactLine from "../contactline/ContactLine"
import Dropdown from "./Dropdown"
import LangSwitch from "./LangSwitch"
import scrollToSection from "../../functions/scrollToSection"

function Header({ activeSection, setLang, lang }) {
  const handleOnClik = (section) => {
    scrollToSection(section)
  }
  return (
    <header className="bg-zinc-800 py-4 fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-40 z-20 w-full">
      <nav>
        <div className="w-[80%] my-0 mx-auto flex justify-between items-center sm:items-start ">
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-bold mr-10 text-lg">
              Esteban Castañeira
              <span
                className={`sm:ml-2 font-thin block sm:inline-block transform transition hover:scale-90 hover:cursor-pointer tracking-widest z-20 ${
                  activeSection === "hero" && "neonText"
                }`}
                onClick={() => handleOnClik("hero")}
              >
                Full Stack Devel<span className="flicker">o</span>per
              </span>
            </h1>
            <ContactLine />
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
                  {lang === "en" ? (
                    <>
                      Abo<span className="flicker">u</span>t
                    </>
                  ) : (
                    <>
                      Sob<span className="flicker">r</span>e Mi
                    </>
                  )}
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
                  {lang === "en" ? (
                    <>
                      Conta<span className="flicker">c</span>t
                    </>
                  ) : (
                    <>
                      Conta<span className="flicker">c</span>to
                    </>
                  )}
                </button>
              </li>
              <LangSwitch setLang={setLang} lang={lang} />
            </ul>

            <Dropdown
              activeSection={activeSection}
              setLang={setLang}
              lang={lang}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
