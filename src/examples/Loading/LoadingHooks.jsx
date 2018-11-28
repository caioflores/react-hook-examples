import React, { useState, useEffect } from 'react'
import './Loading.css'

function LoadingHooks(props) {
  const [loading, setLoading] = useState(props.value)
  
  useEffect(() => {
    setLoading(props.value)
  }, [props]);

  if (loading) {
    return (
      <div className="lds-ring">
        <div />
      </div>
    )
  }
  return false
}

export default LoadingHooks