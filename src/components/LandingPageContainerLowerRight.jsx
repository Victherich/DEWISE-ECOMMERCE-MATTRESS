import React from 'react'
import crazydeals from "../Images/crazydeals.png"
import weightsupport from "../Images/weight support.png"
import "../CSS/LandingPageContainerLowerRight.css"

const LandingPageContainerLowerRight = () => {
  return (
    <div className='CrazyDeals'>
      <img src={crazydeals} alt="imgpic" className='CrazyDealsImg1'/>
      <div className='MoreCategory'>
        <img src={weightsupport} alt="imgpic"/>
        <p>Weight Support</p>
      </div>
    </div>
  )
}

export default LandingPageContainerLowerRight
