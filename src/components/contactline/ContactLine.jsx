import LinkedinIcon from "../../assets/icons/LinkedinIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import MailIcon from "../../assets/icons/MailIcon"
import PdfIcon from "../../assets/icons/PdfIcon"
function ContactLine() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.linkedin.com/in/estebancastaneira/"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex transform transition-transform hover:scale-125"
      >
        <LinkedinIcon width={25} height={25} />
      </a>
      <a
        href="https://github.com/estebanCastaneira"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex transform transition-transform hover:scale-125"
      >
        <GithubIcon width={30} height={30} />
      </a>
      <MailIcon />
      <PdfIcon />
    </div>
  )
}

export default ContactLine
