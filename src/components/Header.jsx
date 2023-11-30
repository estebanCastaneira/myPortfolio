import Linkedin from "../assets/icons/Linkedin"
function Header() {
  return (
    <header className="bg-zinc-800 py-9">
      <div className="min-w-[85%] flex justify-around m-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="font-bold">
            Esteban Castañeira{" "}
            <span className="text-blue-200 font-thin block sm:inline-block">
              Full Stack Developer
            </span>
          </p>
          <a href="https://www.linkedin.com/in/estebancastaneira/">
            <Linkedin width={25} height={25} color="#27272a" />
          </a>
        </div>
        <div className="flex gap-9">
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Header
