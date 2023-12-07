function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-zinc-900 py-8">
      <div className="w-[80%] my-0 mx-auto">
        <p className="text-center font-thin text-lg whitespace-nowrap">
          © Copyright {year} Esteban Castañeira
        </p>
      </div>
    </footer>
  )
}

export default Footer
