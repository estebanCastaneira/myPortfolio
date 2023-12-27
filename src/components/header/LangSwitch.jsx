import i18next from "i18next"

function LangSwitch({ setLang, lang }) {
  const handleOnClik = (code) => {
    i18next.changeLanguage(code)
    document.getElementsByTagName("html")[0].lang = code
    return setLang(code)
  }

  return (
    <div className="flex gap-2 justify-center items-center transition transform">
      <li className="">
        <button
          className={`${
            lang === "es" ? "neonText" : "text-zinc-400"
          } neon tracking-widest hover:scale-90`}
          onClick={() => handleOnClik("es")}
        >
          ES
        </button>
      </li>
      <div>
        <span>|</span>
      </div>
      <li>
        <button
          className={`${
            lang === "en" ? "neonText" : "text-zinc-400"
          } neon tracking-widest hover:scale-90`}
          onClick={() => handleOnClik("en")}
        >
          EN
        </button>
      </li>
    </div>
  )
}

export default LangSwitch
