function LinkedinIcon({
  width = 40,
  height = 40,
  mainColor = "#fff",
  secondColor = "#000",
  thirdColor = "#8bb7f0",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={width}
      height={height}
    >
      <path fill={secondColor} d="M2.5 2.5H37.5V37.5H2.5z" />
      <path fill={thirdColor} d="M37,3v34H3V3H37 M38,2H2v36h36V2L38,2z" />
      <path
        fill={mainColor}
        d="M8 16.077L13.538 16.077 13.538 27.085 13.538 32 8 32zM10.769 14.462L10.769 14.462C9.108 14.462 8 13.285 8 11.831s1.108-2.562 2.769-2.562 2.7 1.108 2.769 2.562C13.538 13.285 12.5 14.462 10.769 14.462zM32.027 32h-5.468c0 0 0-8.27 0-8.885s-.068-2.734-2.392-2.734c-2.05 0-2.392 1.982-2.392 2.734s0 8.885 0 8.885h-5.468V16.281h5.468v2.119c0 0 1.094-2.119 4.306-2.119 3.281 0 5.946 2.255 5.946 6.834V32z"
      />
    </svg>
  )
}

export default LinkedinIcon
