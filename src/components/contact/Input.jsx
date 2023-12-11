import { useState } from "react"
import emailValidation from "../../functions/emailValidation"
function Input({ label, type, name, placeholder, value, setValue }) {
  const [validEmail, setValidEmail] = useState(true)

  const handleOnChange = (e) => {
    setValue(e.target.value)
    if (name === "email") {
      setValidEmail(emailValidation(e.target.value))
    }
  }

  return (
    <div className="flex flex-col w-full sm:w-[80%]">
      <label className="z-10">{label}</label>
      <input
        className={`p-3 rounded-xl bg-transparent border border-violet-800  ${
          validEmail ? "input " : "wrong-email"
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}
export default Input
