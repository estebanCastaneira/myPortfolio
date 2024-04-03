import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import me from "/img/me.webp"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger)
function AboutMe({ lang }) {
  const textRef = useRef()
  const imgRef = useRef()
  const { t } = useTranslation()
  useEffect(() => {
    const animateFromLeft = gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: imgRef.current,
        },
      }
    )
    const animateFromRight = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: textRef.current,
        },
      }
    )

    return () => {
      animateFromLeft.kill()
      animateFromRight.kill()
    }
  }, [])
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-20">
        <div className="sm:w-[50%] flex justify-center">
          <img
            className="rounded-full w-[88%] profile"
            src={me}
            ref={imgRef}
            alt="Esteban Castañeira Picture"
            type="img/webp"
            loading="lazy"
          />
        </div>
        <div className="sm:w-[50%] sm:text-xl aboutMe" ref={textRef}>
          <p className="mb-3">{t("aboutMe1")}</p>
          <p className="mb-3">{t("aboutMe2")}</p>
          <p className="mb-3">{t("aboutMe3")}</p>
        </div>
      </div>
    </>
  )
}

export default AboutMe
