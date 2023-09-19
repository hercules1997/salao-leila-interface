import React from 'react'

// import iconBurguer from '../../../assets/topBurger.png'
import { LoadingSpinnerLoading, Spinner } from './LoadingSpinner.js'
const LoadingSpinner = () => {
  return (
    <LoadingSpinnerLoading>
      <span>
        {/* <img src={iconBurguer} /> */}
        <Spinner>
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
          <div className="bounce4"></div>
        </Spinner>
      </span>
    </LoadingSpinnerLoading>
  )
}

export default LoadingSpinner
