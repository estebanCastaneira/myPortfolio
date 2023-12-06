import { useRef } from "react"
import Input from "./Input"
function Contact() {
  const sectionContact = useRef(null)
  return (
    <div id="contact" ref={sectionContact} className="py-32 sm:py-24">
      <h2 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        Conta<span className="flicker">c</span>t
      </h2>
      <div className="mt-24">
        <form action="">
          <fieldset>
            <div className="flex flex-col justify-center items-center text-xl gap-8">
              <Input
                label={"Name :"}
                type={"text"}
                placeholder={"Your name..."}
              />
              <Input
                label={"E-Mail :"}
                type={"email"}
                placeholder={"Your e-mail..."}
              />
              <Input
                label={"Phone :"}
                type={"phone"}
                placeholder={"Your phone...(optional)"}
              />

              <div className="w-full sm:w-[80%] flex flex-col gap-3">
                <label className="z-10">Message :</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Leave your message..."
                  className="p-3 rounded-xl w-full h-64 bg-transparent border border-violet-900"
                ></textarea>
              </div>
              <div className="my-5">
                <button className="send-button text-2xl py-4 px-6 bg-transparent border border-violet-900 hover:scale-110 transition-all rounded-xl">
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
