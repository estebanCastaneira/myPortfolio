import { useEffect, useState } from "react"

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowW, setWindowW] = useState(window.innerWidth)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowW(window.innerWidth)
    }
    const closeMenu = () => {
      // Define el ancho límite para cerrar el menú (ajústalo según tus necesidades)
      const limitWidth = 640

      if (windowW <= limitWidth && isOpen) {
        setIsOpen(false)
      }
    }
    const handleResize = () => {
      updateWindowWidth()
      closeMenu()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [windowW, isOpen])
  return (
    <div className="relative flex flex-col items-center">
      <button
        className="block border-transparent active:border-white duration-300 bg-transparent p-2 text-white focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 sm:hidden"
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
        <div className="bg-zinc-800 bg-opacity-20 absolute top-20 rounded-lg border border-zinc-700 p-3">
          <ul className="flex flex-col items-center gap-6 ">
            <li className="flex justify-center hover:brightness-105 px-4 py-1 w-full">
              <a href="#">About</a>
            </li>
            <li className="flex justify-center hover:brightness-105  px-4 py-1 w-full">
              <a href="#">Portfolio</a>
            </li>
            <li className="flex justify-center hover:brightness-105  px-4 py-1 w-full">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
export default Dropdown
