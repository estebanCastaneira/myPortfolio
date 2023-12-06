import emailjs from "@emailjs/browser"

export default async function sendEmail(form) {
  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    return result.text
  } catch (error) {
    return error.text
  }
}
