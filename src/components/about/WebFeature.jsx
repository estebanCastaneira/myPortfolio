import { useEffect, useRef } from "react"
import { gsap } from "gsap"

function WebFeature({ feature }) {
  const featureRef = useRef(null)

  const handleExpand = (event) => {
    gsap.to(event.target, {
      duration: 0.8,
      scale: 1.3,
      ease: "power2.out",
    })
  }

  const handleShrink = (event) => {
    gsap.to(event.target, {
      duration: 0.8,
      scale: 1,
      ease: "power2.out",
    })
  }
  useEffect(() => {}, [])
  return (
    <div
      className="flex flex-col justify-start items-center gap-3"
      ref={featureRef}
      onMouseMove={handleExpand}
      onMouseOut={handleShrink}
    >
      <div className="bg-gradient-to-bl from-violet-50 via-transparent to-violet-800 rounded-full p-8 ">
        <img
          src={feature.icon}
          alt={`${feature.name} icon`}
          width={50}
          height={50}
        />
      </div>

      <h4 className="tracking-widest text-lg">{feature.name}</h4>
      <p className="text-center text-sm sm:w-[70%]">{feature.description}</p>
    </div>
  )
}

export default WebFeature
