function emailValidation(email) {
  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regExp.test(email)
}
export default emailValidation
