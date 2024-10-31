import React from 'react'
import '../CSS/Hero.css'
import heroimg from '../Images/Heovin cONCEPT.jpg'

const Hero = () => {
  return (
    <div className='HeroWrap'>
        <img src={heroimg} alt="heroimg"/>
    </div>
  )
}

export default Hero
