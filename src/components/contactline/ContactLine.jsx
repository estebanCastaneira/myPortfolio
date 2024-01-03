import LinkedinIcon from "../../assets/icons/LinkedinIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import MailIcon from "../../assets/icons/MailIcon"
import PdfIcon from "../../assets/icons/PdfIcon"
import { useTranslation } from "react-i18next"
function ContactLine() {
  const { t } = useTranslation()
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.linkedin.com/in/estebancastaneira/"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex transform transition-transform hover:scale-125"
        title={t("linkedin")}
      >
        <LinkedinIcon width={25} height={25} />
      </a>
      <a
        href="https://github.com/estebanCastaneira"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex transform transition-transform hover:scale-125"
        title={t("github")}
      >
        <GithubIcon width={30} height={30} />
      </a>
      <MailIcon t={t} />
      <PdfIcon t={t} />
    </div>
  )
}

export default ContactLine
