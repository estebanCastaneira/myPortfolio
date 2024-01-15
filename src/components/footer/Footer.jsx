import ContactLine from "../contactline/ContactLine"
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-zinc-900 py-10">
      <div className="w-[80%] my-0 mx-auto flex flex-col justify-end items-center gap-2 relative">
        <p className="font-thin text-lg  whitespace-nowrap">
          © Copyright {year} Esteban Castañeira.
        </p>
        <div className="flex flex-col gap-2">
          <p className="font-thin text-lg">Montevideo, Uruguay 🧉 🇺🇾</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
