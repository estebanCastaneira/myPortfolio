import pdf_icon from "/icons/pdf_icon.png"

function PdfIcon() {
  return (
    <a
      href="/files/estebancastaneiracv.pdf"
      download="estebancastaneiraresumee"
      className="inline-flex transform transition-transform hover:scale-125"
    >
      <img
        src={pdf_icon}
        alt="pdf icon"
        type="img/png"
        width={25}
        height={25}
      />
    </a>
  )
}

export default PdfIcon
