import { useRef, useState } from "react"
import sendEmail from "../../functions/sendEmail"
import Input from "./Input"
import emailValidation from "../../functions/emailValidation"

function Contact() {
  const sectionContact = useRef(null)
  const form = useRef(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [formValidation, setFormValidation] = useState({})

  const handleOnChangeTextArea = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let validationErrors = {}
    if (message.length < 140) {
      validationErrors.message =
        "Your message should have at least 140 characters"
    }
    if (!emailValidation(email)) {
      validationErrors.email = "Please, put a valid email"
    }
    if (!name) {
      validationErrors.name = "Please, put a contact name"
    }
    setFormValidation(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setFormValidation(false)
      try {
        const response = await sendEmail(form)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div id="contact" ref={sectionContact} className="py-32 sm:py-24">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Conta<span className="flicker">c</span>t
      </h2>
      <div className="mt-24">
        <form ref={form} onSubmit={handleSubmit} noValidate>
          <fieldset>
            <div className="flex flex-col justify-center items-center text-xl gap-8">
              <Input
                label={"Name :"}
                type={"text"}
                name={"name"}
                placeholder={"Your name..."}
                value={name}
                setValue={setName}
              />
              <Input
                label={"E-Mail :"}
                type={"email"}
                name={"email"}
                placeholder={"Your e-mail..."}
                value={email}
                setValue={setEmail}
              />
              <Input
                label={"Phone :"}
                type={"tel"}
                name={"phone"}
                placeholder={"Your phone... *optional"}
                value={phone}
                setValue={setPhone}
              />

              <div className="w-full sm:w-[80%] flex flex-col gap-3">
                <label className="z-10">Message :</label>
                <textarea
                  name="message"
                  placeholder="Leave your message..."
                  className="p-3 rounded-xl w-full h-64 bg-transparent border border-violet-800 focus:border-white"
                  value={message}
                  onChange={handleOnChangeTextArea}
                ></textarea>
              </div>
              <div className="my-5">
                <div>
                  <button className="send-button text-2xl py-4 px-6 bg-transparent border border-violet-800 hover:scale-110 focus:scale-110 transition-all rounded-xl">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div className={`w-[80%] mx-auto text-center flex flex-col gap-2`}>
        {formValidation.name && (
          <p className="bg-red-700 p-4 rounded-lg">{formValidation.name}</p>
        )}
        {formValidation.email && (
          <p className="bg-red-700 p-4 rounded-lg">{formValidation.email}</p>
        )}
        {formValidation.message && (
          <p className="bg-red-700 p-4 rounded-lg">{formValidation.message}</p>
        )}
      </div>
    </div>
  )
}

export default Contact
