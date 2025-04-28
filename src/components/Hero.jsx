// import React from 'react'
// import '../CSS/Hero.css'
// import heroimg from '../Images/Heovin cONCEPT.jpg'

// const Hero = () => {
//   return (
//     <div className='HeroWrap'>
//         <img src={heroimg} alt="heroimg"/>
//     </div>
//   )
// }

// export default Hero



import React, { useState ,useEffect} from 'react'
import "../CSS/Hero.css"
import heroImg5 from "../Images/heroimg5.jpeg"
import heroImg6 from "../Images/heroimg6.jpeg"
import heroImg7 from "../Images/heroimg7.jpeg"
import heroImg8 from "../Images/heroimg8.jpeg"
import Hero3 from './Hero3'


const Hero = () => {
    const [HeroSwitch,setHeroSwitch]=useState(0)
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setHeroSwitch(prevState=>(prevState+1)%3)
        },3000)

        return ()=>clearInterval(intervalId)
    },[])
    
  return (
    <div className='HeroWrap'>
        <div className='HeroRight'>
            {/* <img src={heroImg5} alt="heroImg5"/> */}
            <img src={heroImg5} alt="heroImg6"/>
            {/* <img src={heroImg7} alt="heroImg7"/> */}
            <img src={heroImg7} alt="heroImg8"/>
        </div>
        <div className='HeroLeft'>
       
      <Hero3/>
        </div>
        <div className='HeroRight'>
            {/* <img src={heroImg5} alt="heroImg5"/> */}
            <img src={heroImg6} alt="heroImg6"/>
            {/* <img src={heroImg7} alt="heroImg7"/> */}
            <img src={heroImg8} alt="heroImg8"/>
        </div>
        
        <div className='CircleWrap'>
             <div className={HeroSwitch===0?'CircleActive':'Circle'}>
                </div>      
                <div className={HeroSwitch===1?'CircleActive':'Circle'}>
                </div> 
                <div className={HeroSwitch===2?'CircleActive':'Circle'}>
                </div> 
                             
        </div>
    </div>
  )
}

export default Hero





