import me from "/img/me.jpg"
function AboutMe() {
  return (
    <div>
      <h3 className="neonText text-2xl sm:text-4xl text-center tracking-widest">
        About <span className="flicker">M</span>e
      </h3>
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-10">
        <div className="container-profile sm:w-[50%] ">
          <div className="profile w-[88%]">
            <img className="rounded-full" src={me} alt="" />
          </div>
        </div>
        <div className="sm:w-[50%] sm:text-xl">
          <p>Hello, there! I'm Esteban. 👋🏽</p>
          <p>
            In 2020 the pandemic prompted me to reevaluate my career in
            Psychology. I chose to leave it behind and quickly discovered a
            passion for Programming. Since then, I've been dedicating time to
            developing my programming skills and knowledge. 🤓 📚
          </p>
          <p>
            Now, having successfully completed my studies as a Jr. Full Stack
            Dev, I'm seeking opportunities in the IT field to apply what I've
            learned, contribute to projects, and continue growing in this
            exciting area. 🔎 💻 👉🏽 🚀 💪🏽
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
