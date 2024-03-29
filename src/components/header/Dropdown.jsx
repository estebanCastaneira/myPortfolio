import LangSwitch from "./LangSwitch"
import { useEffect, useState, useRef } from "react"
import scrollToSection from "../../functions/scrollToSection"
function Dropdown({ activeSection, setLang, lang }) {
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const resizeMatch = (event) => {
      if (event.matches) {
        setIsOpen(false)
      }
    }
    const closeDropdown = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }
    const desktopMediaQuery = window.matchMedia("(min-width: 640px)")
    desktopMediaQuery.addEventListener("change", resizeMatch)
    document.addEventListener("click", closeDropdown)

    return () => {
      document.removeEventListener("click", closeDropdown)
      desktopMediaQuery.removeEventListener("change", resizeMatch)
    }
  }, [isOpen])
  return (
    <div className="relative flex flex-col items-center" ref={dropdownRef}>
      <button
        className="block active:border-white focus:border-white target:border-white duration-300 bg-transparent p-2 text-white focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 sm:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="[&>svg]:w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="backdrop-filter backdrop-blur-lg absolute top-12 rounded-lg border border-zinc-700 p-3 mr-4">
          <ul className="flex flex-col items-center gap-6 ">
            <li className="flex justify-center hover:brightness-105 px-4 py-1 w-full">
              <button
                className={`neon tracking-widest ${
                  activeSection === "about" && "neonText"
                }`}
                onClick={() => {
                  scrollToSection("about")
                  setIsOpen(false)
                }}
              >
                {lang === "en" ? (
                  <>
                    {" "}
                    Abo<span className="flicker">u</span>t
                  </>
                ) : (
                  <>
                    {" "}
                    Sob<span className="flicker">r</span>e Mi
                  </>
                )}
              </button>
            </li>
            <li className="flex justify-center hover:brightness-105  px-4 py-1 w-full">
              <button
                className={`neon tracking-widest ${
                  activeSection === "portfolio" && "neonText"
                }`}
                onClick={() => {
                  scrollToSection("portfolio")
                  setIsOpen(false)
                }}
              >
                Portfo<span className="flicker">l</span>io
              </button>
            </li>
            <li className="flex justify-center hover:brightness-105  px-4 py-1 w-full">
              <button
                className={`neon tracking-widest ${
                  activeSection === "contact" && "neonText"
                }`}
                onClick={() => {
                  scrollToSection("contact")
                  setIsOpen(false)
                }}
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
        </div>
      )}
    </div>
  )
}
export default Dropdown
