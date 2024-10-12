import React from 'react'
import "../CSS/PercentOff.css"
import { useLocation } from 'react-router-dom'

const PercentOff = () => {
  const location = useLocation()
  return (
    <div className={location.pathname==="/"?'PercentOffWrap':'PercentOffWrap2'} >
        <div className='PercentOffUp'>
            <div className={location.pathname==='/'?'PercentOffUpA':"PercentOffUpA2"}>
                <h1>
                  50% OFF
                </h1>
                <div className={location.pathname==="/"?'ShopNowWrap':"ShopNowWrap2"}>
                    <p>ON SELECT ITEMS</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
        <div className={location.pathname==="/"?'PercentOffDown':'PercentOffDown2'}>
          <p>HURRY! <span>Expires October 5, 2024</span></p>
        </div>
        <div className={location.pathname==='/'?'PERCENTOFFOVERLAY':'PERCENTOFFOVERLAY2'}>
            <h1>50% OFF 5O% OFF 50% OFF</h1>
            <h1>50% OFF 5O% OFF 50% OFF</h1>
            <h1>50% OFF 5O% OFF 50% OFF</h1>
            
        </div>
    </div>
  )
}

export default PercentOff
