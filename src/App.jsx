import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
function App() {
  return (
    <>
      <div className="bg-zinc-900 min-h-screen">
        <Header />
        <main className="w-[80%] mx-auto">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
