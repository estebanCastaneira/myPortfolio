import { useRef } from "react"
import scroll_icon from "/icons/scroll_icon.png"
import { useTranslation } from "react-i18next"
function Hero() {
  const sectionHero = useRef(null)
  const { t } = useTranslation()

  return (
    <div
      id="hero"
      ref={sectionHero}
      className="relative flex items-center justify-center  bg-gradient-to-br from-black to-violet-950"
    >
      <video
        autoPlay
        loop
        muted
        id="video"
        className="h-screen object-cover transform md:transform-none w-full filter-video opacity-40"
        loading="lazy"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <h3
        id="textHero"
        className="cursor-default text-4xl sm:text-7xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] text-center w-full whitespace-nowrap neonText tracking-widest"
      >
        {t("helloWorld")}
        <span className="cursor">_</span>
      </h3>
      <div className="absolute bottom-0 animate-bounce block">
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
