import React from 'react'
import "../CSS/SideCategoryMenu.css"
import { useNavigate } from 'react-router-dom'

const SideCategoryMenu = () => {
const navigate = useNavigate()
const subCategories = [
  // { id: 14, name: 'PipingRock\'s Best' },
  { id: 14, name: 'Heovin\'s Best' },
  { id: 15, name: 'Sale Items' },
  { id: 16, name: 'Essential Oils' },
  { id: 17, name: 'Men\'s Vitamins' },
  { id: 18, name: 'Melatonin' },
  { id: 19, name: 'CoQ-10' },
  { id: 20, name: 'Ashwagandha' },
  { id: 21, name: 'Weight Support' },
  { id: 22, name: 'Skin Care' },
  { id: 23, name: 'Immune Support' },
  { id: 24, name: 'Supplements' },
  { id: 25, name: 'Probiotics' },
  { id: 26, name: 'Fragrance Oils' },
  { id: 27, name: 'Mushrooms' },
  { id: 28, name: 'Joint Support' },
  { id: 29, name: 'Women\'s Vitamins' },
  { id: 30, name: 'Sports & Fitness' },
  { id: 31, name: 'Beauty & Personal Care' },
  { id: 32, name: 'Bulk Herbs' },
  { id: 33, name: 'Pet Products' },
  { id: 34, name: 'Liquid Extracts' },
  { id: 35, name: 'Herbal Supplements' },
  { id: 36, name: 'Vitamin D' },
  { id: 37, name: 'Turmeric' },
  { id: 38, name: 'Spices' },
  { id: 39, name: 'Magnesium' },
  { id: 40, name: 'Homeopathics' },
  { id: 41, name: 'Collagen' },
  { id: 42, name: 'Aromatherapy' },
  { id: 43, name: 'Lutein' },
  { id: 44, name: 'Vitamin C' },
  { id: 45, name: 'Zinc' },
  { id: 46, name: 'Nuts and Seeds' },
  { id: 47, name: 'Hyaluronic Acid' },
  { id: 48, name: 'Elderberry' },
  { id: 49, name: 'Compare and Save' },
  { id: 50, name: 'N-Acetyl Cysteine' },
  { id: 51, name: 'Organic Products' },
  { id: 52, name: 'Herbal Teas' },
  
];



  return (
    <div className='SideCategoryMenu'>
      <p style={{fontWeight:"bold",fontSize:"1.2rem"}} className='pcategory1' onClick={() => navigate("/productlistpage",  { state: { category: "All Category" }})}>Shop All Categories</p>
      
      <p style={{fontWeight:"bold",fontSize:"1.2rem"}} className='pcategory1' onClick={() => navigate("/productlistpage",  { state: { category: "All Product" }} )}>Shop All Products</p>
      
      <p style={{fontWeight:"bold",fontSize:"1.2rem"}} className='pcategory1' onClick={() => navigate("/productlistpage",  { state: { category: "All Brands" }})}>Shop All Brands</p>
      {subCategories.map((subCategory,index)=>(
        <p key={index} className='pcategory1'
         onClick={() => navigate("/productlistpage",  { state: { category: subCategory.name }})}>{subCategory.name}</p>
      
      ))} 
    </div>

  )
}

export default SideCategoryMenu
