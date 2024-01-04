import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import Input from "./Input"
import Notifications from "./Notifications"
import sendEmail from "../../functions/sendEmail"
import emailValidation from "../../functions/emailValidation"
import scrollToSection from "../../functions/scrollToSection"

function Contact({ lang }) {
  const sectionContact = useRef(null)
  const form = useRef(null)
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formValidation, setFormValidation] = useState({})

  const handleOnChangeTextArea = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = {}
    if (message.length <= 50 || message.length >= 200) {
      validationErrors.message = "messageErr"
    }
    if (!emailValidation(email)) {
      validationErrors.email = "emailErr"
    }
    if (!name) {
      validationErrors.name = "nameErr"
    }
    setFormValidation(validationErrors)
    scrollToSection("notifications")
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true)
      try {
        const response = await sendEmail(form)
        console.log(response)
        if (response === "OK") {
          setName(""),
            setEmail(""),
            setPhone(""),
            setMessage(""),
            setIsLoading(false)
          return setFormValidation({
            success: "mailSuccess",
          })
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        return setFormValidation({
          fail: "mailFail",
        })
      }
    }
  }
  return (
    <div id="contact" ref={sectionContact} className="pt-32 pb-16">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        {lang === "en" ? (
          <>
            Conta<span className="flicker">c</span>t
          </>
        ) : (
          <>
            Conta<span className="flicker">c</span>to
          </>
        )}
      </h2>
      <div className="mt-20">
        <form ref={form} onSubmit={handleSubmit} noValidate>
          <fieldset>
            <div className="flex flex-col justify-center items-center text-xl gap-8">
              <Input
                type={"text"}
                name={"name"}
                placeholder={lang === "en" ? "Your name..." : "Nombre..."}
                value={name}
                setValue={setName}
              />
              <Input
                type={"email"}
                name={"email"}
                placeholder={lang === "en" ? "Your e-mail..." : "Email..."}
                value={email}
                setValue={setEmail}
              />
              <Input
                type={"tel"}
                name={"phone"}
                placeholder={
                  lang === "en"
                    ? "Your phone... (optional)"
                    : "Teléfono... (opcional)"
                }
                value={phone}
                setValue={setPhone}
              />

              <div className="w-full sm:w-[80%] flex flex-col justify-center gap-3">
                <textarea
                  name="message"
                  placeholder={
                    lang === "en" ? "Leave your message..." : "Su mensaje..."
                  }
                  className="p-3 rounded-xl w-full h-64 bg-black border border-violet-800 focus:border-white"
                  value={message}
                  onChange={handleOnChangeTextArea}
                ></textarea>
                <p
                  className={`mr-2 text-sm self-end ${
                    message.length < 50 || message.length > 200
                      ? "text-red-600 font-thin"
                      : "text-white font-bold"
                  }`}
                >
                  {message.length}
                </p>
              </div>
              <div className="my-5">
                <div>
                  <button
                    className={`send-button text-2xl py-4 px-6 bg-black border border-violet-800 hover:scale-110 focus:scale-110 hover:bg-violet-950 transition-all rounded-xl ${
                      isLoading && "cursor-none pointer-events-none"
                    }`}
                  >
                    {!isLoading ? t("sendBtn") : t("sending")}
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <Notifications formValidation={formValidation} t={t} />
    </div>
  )
}

export default Contact
