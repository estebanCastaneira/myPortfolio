import { useRef } from "react"
import scroll_icon from "/icons/scroll_icon.png"
function Hero() {
  const sectionHero = useRef(null)
  return (
    <div
      id="hero"
      ref={sectionHero}
      className="relative flex items-center justify-center  bg-gradient-to-br from-black to-violet-950"
    >
      <video
        autoPlay
        loop
        className="h-screen object-cover transform md:transform-none lg:w-auto filter-video opacity-40"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <h3 className="text-4xl sm:text-7xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] text-center w-full whitespace-nowrap neonText tracking-widest">
        Hello World<span className="cursor">_</span>
      </h3>
      <div className="absolute bottom-0 animate-bounce hidden lg:block">
        <img
          src={scroll_icon}
          alt="scroll icon"
          type="img/png"
          width={64}
          height={64}
        />
      </div>
    </div>
  )
}

export default Hero
