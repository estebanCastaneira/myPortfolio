import ContactLine from "../contactline/ContactLine"
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-zinc-900 py-10">
      <div className="w-[80%] my-0 mx-auto flex flex-col">
        <div>
          <p className="font-thin text-lg text-center">
            © Copyright {year} Esteban Castañeira.
          </p>
          <p className="font-thin text-lg text-center mt-1">
            Montevideo, Uruguay 🧉 🇺🇾.
          </p>
        </div>
        <div className="self-start ">
          <ContactLine />
        </div>
      </div>
    </footer>
  )
}

export default Footer
