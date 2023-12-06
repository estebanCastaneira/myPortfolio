function Input({ label, type, name, placeholder, value, setValue }) {
  const handleOnChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="flex flex-col w-full sm:w-[80%] gap-3">
      <label className="z-10">{label}</label>
      <input
        className="p-3 rounded-xl bg-transparent border border-violet-900"
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
