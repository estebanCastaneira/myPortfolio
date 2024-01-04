const scrollToSection = (targetId) => {
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    targetElement.scrollIntoView({
      top: 100,
      behavior: "smooth",
      block: "start",
    })
  }
}

export default scrollToSection
