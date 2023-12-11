function Notifications({ formValidation }) {
  return (
    <div
      className={`w-full sm:w-[60%] mt-5 mx-auto text-center flex flex-col gap-2 h-[210px]`}
      id="notifications"
    >
      {formValidation.name && (
        <p className="notification text-lg bg-gradient-to-tl from-purple-900  to-red-600  p-3  font-bold rounded-lg">
          {formValidation.name}
        </p>
      )}
      {formValidation.email && (
        <p className="notification text-lg bg-gradient-to-tl from-purple-900 to-red-600  p-3 font-bold rounded-lg">
          {formValidation.email}
        </p>
      )}
      {formValidation.message && (
        <p className="notification text-lg bg-gradient-to-tl from-purple-900 to-red-600  p-3 font-bold rounded-lg">
          {formValidation.message}
        </p>
      )}
      {formValidation.fail && (
        <p className="notification text-lg bg-gradient-to-tl from-teal-900 to-blue-600  p-3 font-bold rounded-lg">
          {formValidation.fail}
        </p>
      )}
      {formValidation.success && (
        <p className="notification text-lg bg-gradient-to-tl from-teal-900 to-emerald-600  p-3 font-bold rounded-lg">
          {formValidation.success}
        </p>
      )}
    </div>
  )
}

export default Notifications
