import me from "/img/me.webp"
function AboutMe() {
  return (
    <div>
      <h3 className="neonText text-4xl sm:text-6xl text-center tracking-widest">
        <span className="flicker">M</span>e
      </h3>
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-10">
        <div className="container-profile sm:w-[50%] ">
          <div className="profile w-[88%]">
            <img
              className="rounded-full"
              src={me}
              alt="Esteban Castañeira Picture"
              type="img/webp"
            />
          </div>
        </div>
        <div className="sm:w-[50%] sm:text-xl">
          <p className="mb-3">Hello, there! 👋🏽</p>
          <p className="mb-3">
            In 2020 the pandemic led to a reassessment of my career in
            Psychology. Opting to move on, quickly discovered a passion for
            Programming. Since then, time has been devoted to developing
            programming skills and expanding knowledge. 🤓 📚
          </p>
          <p className="mb-3">
            Now, with successful completion of studies as a Jr. Full Stack Dev,
            the focus is on seeking opportunities in the IT field. The aim is to
            apply acquired knowledge, contribute to projects, and continue
            growing in this dynamic area. 🔎 💻 👉🏽 🚀 💪🏽
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
