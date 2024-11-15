import { useState } from "react"

function useToggle(defaultValue:any) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value:any) {
    const newValue = typeof value === 'boolean' ? value : !value
    setValue(newValue)
  }

  return [value, toggleValue]
}

export default useToggle