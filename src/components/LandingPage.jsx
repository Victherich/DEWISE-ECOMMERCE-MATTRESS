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
import ProductListPageLanding from './ProductlistPageLanding'
import ProductListPageDeals from './ProductListPageDeals'
import PopularCategories from './PopularCategories'
import PopularCategories2 from './PopularCategories2'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <PopularCategories/>
      <ProductListPageLanding/>
      <PopularCategories2/>
      <ProductListPageDeals/>
      
      
      {/* <div className='LandingPageDash'>
       <SideCategoryMenu/>
        <div className="LandingPageContentWrap">
          <PercentOff/>
          <Hero/>
          <div className='LandingPageContentWrapLower'>
              <LandingPageContentLowerLeft/>
              <LandingPageContainerLowerRight/>
          </div>
        </div>
        

      </div> */}

    </div>
  )
}

export default LandingPage
