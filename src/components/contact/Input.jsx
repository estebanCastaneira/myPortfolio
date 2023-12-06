function Input({ label, type, placeholder }) {
  return (
    <div className="flex flex-col w-full sm:w-[80%] gap-3">
      <label className="z-10">{label}</label>
      <input
        className="p-3 rounded-xl bg-transparent border border-violet-900"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
export default Input
