import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export const useCustomData = () => {
  const [customData, setCustomData] = useState({})
  const {category} = useSelector(store => store.template)

  useEffect(() => {}, [category])

  return { customData, setCustomData }

}