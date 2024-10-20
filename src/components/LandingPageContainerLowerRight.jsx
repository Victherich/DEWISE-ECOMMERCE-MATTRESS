import React from 'react'
import crazydeals from "../Images/crazydeals.png"
import weightsupport from "../Images/weight support.png"
import "../CSS/LandingPageContainerLowerRight.css"
import { useNavigate } from 'react-router-dom'

const LandingPageContainerLowerRight = () => {
  const navigate = useNavigate()
  return (
    <div className='CrazyDeals'>
      <img src={crazydeals} alt="imgpic" className='CrazyDealsImg1'/>
      <div className='MoreCategory' onClick={() => navigate("/productlistpage", { state: { category: "Weight Support" }} )} >
        <img src={weightsupport} alt="imgpic"/>
        <p  >Weight Support</p>
      </div>
    </div>
  )
}

export default LandingPageContainerLowerRight
