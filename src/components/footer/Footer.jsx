import ContactLine from "../contactline/ContactLine"
import { useEffect, useState } from "react"
function Footer() {
  const [year, setYear] = useState()
  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYear(currentYear)
  }, [])

  return (
    <footer className="bg-zinc-900 py-10">
      <div className="w-[80%] my-0 mx-auto text-lg flex flex-col justify-end items-center gap-2">
        <p className="font-thin whitespace-nowrap">
          © Copyright {year} Esteban Castañeira.
        </p>
        <p className="font-thin">Montevideo, Uruguay 🧉 🇺🇾</p>
      </div>
    </footer>
  )
}

export default Footer
