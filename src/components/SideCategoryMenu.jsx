import React from 'react'
import "../CSS/SideCategoryMenu.css"
import { useNavigate } from 'react-router-dom'

const SideCategoryMenu = () => {
const navigate = useNavigate()
const subCategories = [
  { id: 1,  name: 'Calcium Supplements' },
  { id: 2,  name: 'Alpha Lipoic Acid' },
  { id: 3,  name: 'Cinnamon Supplements' },
  { id: 4,  name: 'CoQ-10' },
  { id: 5,  name: 'Flaxseed Products' },
  { id: 6, name: 'Ginkgo Biloba' },
  { id: 7,  name: 'L-Carnitine' },
  { id: 8,  name: 'Omega-3' },
  { id: 9, name: 'Homeopathic' },
  { id: 10, name: 'Eye Products' }
];


  return (
    <div className='SideCategoryMenu'>
      <p style={{fontWeight:"bold",fontSize:"1.3rem"}} className='pcategory1' onClick={()=>navigate("/subcategory")}>Shop All Categories</p>
      {/* <p style={{fontWeight:"bold",fontSize:"1.3rem"}} className='pcategory1'>Shop All Brands</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>PipingRock's Best</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem",color:"#CB6B37"}}>Sale Items</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Essential Oils</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Men's Vitamins</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Melatonin</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>CoQ10</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Ashwagandha</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Weight Support</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Skin Care</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Immune Support</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Supplements</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Probiotics</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Fragrance Oils</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Mushrooms</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Joint Support</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Women's Vitamins</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Sports & Fitness</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Beauty & Personal Care</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Bulk Herbs</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Pet Products</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Liquid Extracts</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Herbal Supplements</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Vitamin D</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Turmeric</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Spices</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Magnesium</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Homeopathics</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Collagen</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Aromatherapy</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Lutein</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Vitamin C</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Zinc</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Nuts & Seeds</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Hyaluronic Acid</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Elderberry</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Compare and Save</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>N-Acetyl Cysteine</p> */}
      {/* <p style={{fontWeight:"bold",fontSize:"1.1rem"}}>Organic Products</p> */}
      {/* <p style={{fontSize:"1.1rem"}}>Herbal Teas</p> */}

      <p style={{fontWeight:"bold",fontSize:"1.3rem"}} className='pcategory1' onClick={() => navigate("/productlistpage", "All Product")}>Shop All Products</p>
      {subCategories.map((subCategory)=>(
        <p style={{fontWeight:"bold",fontSize:"1.2rem",color:"black"}} className='pcategory1' onClick={() => navigate("/productlistpage",  { state: { category: subCategory.name }})}>{subCategory.name}</p>
      
      ))} 
    </div>

  )
}

export default SideCategoryMenu
