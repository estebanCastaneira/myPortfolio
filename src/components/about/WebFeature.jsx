import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function WebFeature({ feature, lang }) {
  const featureRef = useRef()

  useEffect(() => {
    const animation = gsap.fromTo(
      featureRef.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: featureRef.current,
        },
      }
    )

    return () => {
      animation.kill()
    }
  }, [])
  return (
    <div
      className="flex flex-col justify-start items-center gap-3"
      ref={featureRef}
    >
      <div className="bg-gradient-to-bl from-violet-50 via-transparent to-violet-800 rounded-full p-8 ">
        <img
          src={feature.icon}
          alt={`${feature.name_en} icon`}
          width={50}
          height={50}
          loading="lazy"
        />
      </div>

      <h4 className="tracking-widest text-lg">
        {lang === "en" ? feature.name_en : feature.name_es}
      </h4>
      <p className="text-center text-sm sm:w-[70%]">
        {lang === "en" ? feature.description_en : feature.description_es}
      </p>
    </div>
  )
}

export default WebFeature
