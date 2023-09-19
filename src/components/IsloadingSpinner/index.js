import React, { useState, useEffect } from 'react'

import LoadingSpinner from './LoadingSpinner'

const IsloadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return <div>{isLoading ? <LoadingSpinner /> : <></>}</div>
}

export default IsloadingSpinner
