function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-zinc-900 py-10">
      <div className="w-[80%] my-0 mx-auto">
        <p className="text-center font-thin text-lg whitespace-nowrap">
          © Copyright {year} Esteban Castañeira
        </p>
        <p className="text-center text-lg mt-2">Montevideo, Uruguay</p>
      </div>
    </footer>
  )
}

export default Footer
