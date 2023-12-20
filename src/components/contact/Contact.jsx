import { useRef, useState } from "react"
import sendEmail from "../../functions/sendEmail"
import emailValidation from "../../functions/emailValidation"
import scrollToSection from "../../functions/scrollToSection"
import Input from "./Input"
import Notifications from "./Notifications"

function Contact() {
  const sectionContact = useRef(null)
  const form = useRef(null)

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
    if (message.length <= 100) {
      validationErrors.message =
        "Your message should have at least 100 characters"
    }
    if (!emailValidation(email)) {
      validationErrors.email = "Please, enter a valid e-mail"
    }
    if (!name) {
      validationErrors.name = "Please, enter a contact name"
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
            success: "Message sended!!! I'll be on touch",
          })
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        return setFormValidation({
          fail: "Something went wrong... Please, try later",
        })
      }
    }
  }

  return (
    <div id="contact" ref={sectionContact} className="pt-32 sm:pt-24 pb-16">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Conta<span className="flicker">c</span>t
      </h2>
      <div className="mt-24">
        <form ref={form} onSubmit={handleSubmit} noValidate>
          <fieldset>
            <div className="flex flex-col justify-center items-center text-xl gap-8">
              <Input
                type={"text"}
                name={"name"}
                placeholder={"Your name..."}
                value={name}
                setValue={setName}
              />
              <Input
                type={"email"}
                name={"email"}
                placeholder={"Your e-mail..."}
                value={email}
                setValue={setEmail}
              />
              <Input
                type={"tel"}
                name={"phone"}
                placeholder={"Your phone... (optional)"}
                value={phone}
                setValue={setPhone}
              />

              <div className="w-full sm:w-[80%] flex flex-col justify-center gap-3">
                <textarea
                  name="message"
                  placeholder="Leave your message..."
                  className="p-3 rounded-xl w-full h-64 bg-black border border-violet-800 focus:border-white"
                  value={message}
                  onChange={handleOnChangeTextArea}
                ></textarea>
                <p
                  className={`mr-2 text-sm self-end ${
                    message.length < 100
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
                    {isLoading ? "Loading..." : "Send"}
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <Notifications formValidation={formValidation} />
    </div>
  )
}

export default Contact
