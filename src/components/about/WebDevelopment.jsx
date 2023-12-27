import { useEffect, useState } from "react"
import WebFeature from "./WebFeature"
import wfData from "../../data/webFeatures.json"

function WebDevelopment({ lang }) {
  const [webFeatures, setWebFeatures] = useState([])
  useEffect(() => {
    setWebFeatures(wfData.data)
  }, [])

  return (
    <div className="my-20 grid grid-cols-2 sm:grid-cols-4 sm:grid-flow-col gap-5">
      {webFeatures.map((feature) => (
        <WebFeature key={feature.id} feature={feature} lang={lang} />
      ))}
    </div>
  )
}

export default WebDevelopment
