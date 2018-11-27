import { useState } from 'react'

const useFormInput = (initialValue, type = 'text') => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    return setValue(e.target.value)
  }

  return {
    value,
    type,
    onChange: handleChange
  }
}

export default useFormInput
