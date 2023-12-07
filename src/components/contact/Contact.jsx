import { useRef, useState } from "react"
import sendEmail from "../../functions/sendEmail"
import Input from "./Input"

function Contact() {
  const sectionContact = useRef(null)
  const form = useRef(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleOnChangeTextA = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await sendEmail(form, name, email, message)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id="contact" ref={sectionContact} className="py-32 sm:py-24">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Conta<span className="flicker">c</span>t
      </h2>
      <div className="mt-24">
        <form ref={form} onSubmit={handleSubmit}>
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
                type={"phone"}
                name={"phone"}
                placeholder={"Your phone...(optional)"}
                value={phone}
                setValue={setPhone}
              />

              <div className="w-full sm:w-[80%] flex flex-col gap-3">
                <label className="z-10">Message :</label>
                <textarea
                  name="message"
                  placeholder="Leave your message..."
                  className="p-3 rounded-xl w-full h-64 bg-transparent border border-violet-900 focus:border-white"
                  value={message}
                  onChange={handleOnChangeTextA}
                ></textarea>
              </div>
              <div className="my-5">
                <button className="send-button text-2xl py-4 px-6 bg-transparent border border-violet-900 hover:scale-110 focus:border-white focus:scale-110 transition-all rounded-xl">
                  Send
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact
