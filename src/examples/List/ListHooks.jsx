import React, { useState } from 'react'
import './List.css'

function ListWithHooks(props) {
  const firstName = useFormInput('João')
  const secondName = useFormInput('Ana')

  return (
    <div className="List">
      <div className="ListRow">
        <input {...firstName} />
      </div>
      <div className="ListRow">
        <input {...secondName} />
      </div>
    </div>
  )
}

const useFormInput = (initialValue, type = 'text') => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => setValue(e.target.value)

  return {
    value,
    type,
    onChange: handleChange
  }
}

export default ListWithHooks
