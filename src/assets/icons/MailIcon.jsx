import mail_icon from "/icons/mail_icon.png"
function MailIcon() {
  return (
    <a
      href="mailto:estebanc_b@hotmail.com"
      className="inline-flex transform transition-transform hover:scale-125"
    >
      <img src={mail_icon} alt="mail icon" type="img/png" />
    </a>
  )
}

export default MailIcon
