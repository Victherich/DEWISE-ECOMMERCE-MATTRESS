import React from 'react'
import MenuCategories from './MenuCategories'
import "../CSS/LandingPage.css"
import SideCategoryMenu from './SideCategoryMenu'
import FooterDown from './FooterDown'
import FooterUp from './FooterUp'
import PercentOff from './PercentOff'
import LandingPageContentLowerLeft from './LandingPageContentLowerLeft'
import LandingPageContainerLowerRight from './LandingPageContainerLowerRight'
import Hero from './Hero'

const LandingPage = () => {
  return (
    <div>
      
      <div className='LandingPageDash'>
       <SideCategoryMenu/>
        <div className="LandingPageContentWrap">
          {/* <PercentOff/> */}
          <Hero/>
          <div className='LandingPageContentWrapLower'>
              <LandingPageContentLowerLeft/>
              <LandingPageContainerLowerRight/>
          </div>
        </div>
        

      </div>

    </div>
  )
}

export default LandingPage
