function WebFeature({ feature }) {
  return (
    <div className="flex flex-col justify-start items-center gap-3">
      <div className="bg-gradient-to-bl from-violet-50 via-transparent to-violet-800 rounded-full p-8 ">
        <img
          src={feature.icon}
          alt={`${feature.name} icon`}
          width={50}
          height={50}
        />
      </div>

      <h4 className="tracking-widest text-lg">{feature.name}</h4>
      <p className="text-center text-sm sm:w-[70%]">{feature.description}</p>
    </div>
  )
}

export default WebFeature
