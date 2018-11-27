import React from 'react'
import useFormInput from '../Input/InputHooks'
import './List.css'

function ListWithHooks(props) {
  const firstName = useFormInput('João')
  const secondName = useFormInput('Ana')

  return (
    <div className="List">
      <div className="Row">
        <input {...firstName} />
      </div>
      <div className="Row">
        <input {...secondName} />
      </div>
    </div>
  )
}

export default ListWithHooks
