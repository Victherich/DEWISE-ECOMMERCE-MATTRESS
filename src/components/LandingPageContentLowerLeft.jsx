import React from 'react'
import "../CSS/LandingPageContentLowerLeft.css"
import supplemetsImg from "../Images/supplements.png"
import antioxidants from "../Images/antioxidants.png"
import brainsupplements from "../Images/brain supplements.png"
import digestiehealth from "../Images/digestie healt.png"
import essentialoil from "../Images/essential oil.png"
import eyenutrients from "../Images/eye nutreints.png"
import hearthealt from "../Images/heart healt.png"
import herbs from "../Images/herbs.png"
import immunesupport2 from "../Images/immune support 2.png"
import immunesupport from "../Images/immune support.png"
import mensitamin from "../Images/men's itamin.png"
import skincare from "../Images/skin care.png"
import sleepsupport from "../Images/sleep support.png"
import sport from "../Images/sport.png"
import weightsupport from "../Images/weight support.png"
import womenitamin from "../Images/women's itamin.png"
import { useNavigate } from 'react-router-dom'
    
    
    const LandingPageContentLowerLeft = () => {
      const navigate = useNavigate()
    
      const CategoryItems = [
        {
          img: supplemetsImg,
          title: "Supplements",
        },
        // {
        //   img: essentialoil,
        //   title: "Essential Oil",
        // },
        // {
        //   img: antioxidants,
        //   title: "Antioxidants",
        // },
        {
          img: brainsupplements,
          title: "Brain Supplements",
        },
    
        // {
        //   img: digestiehealth,
        //   title: "Digestive Health",
        // },
        // {
        //   img: eyenutrients,
        //   title: "Eye Nutrients",
        // },
        // {
        //   img: hearthealt,
        //   title: "Heart Health",
        // },
        {
          img: herbs,
          title: "Herbs",
        },
        {
          img: immunesupport2,
          title: "Immune Support 2",
        },
        {
          img: immunesupport,
          title: "Immune Support",
        },
        {
          img: mensitamin,
          title: "Men's Vitamin",
        },
        // {
        //   img: skincare,
        //   title: "Skin Care",
        // },
        // {
        //   img: sleepsupport,
        //   title: "Sleep Support",
        // },
        // {
        //   img: sport,
        //   title: "Sport",
        // },
        // {
        //   img: weightsupport,
        //   title: "Weight Support",
        // },
        {
          img: womenitamin,
          title: "Women's Vitamin",
        },
      ];
    
  
    



  return (
    <div className='MainCategories'>
       {
        CategoryItems.map((CategoryItem,index)=>(
            <div className='MainCategory' onClick={()=>navigate("/subcategory")} key={index}>
            <img src={CategoryItem.img} alt='img'/>
            <p>{CategoryItem.title}</p>
        </div>
        ))
       }
    </div>
  )
}

export default LandingPageContentLowerLeft
