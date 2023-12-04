const scrollToSection = (targetId) => {
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export default scrollToSection
