import React from 'react'
import "../CSS/MenuCategories.css"
import { useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const MenuCategories = () => {
  const navigate = useNavigate()
  const subCategories = [
    { id: 1,  name: 'Calcium Supplements' },
    { id: 2,  name: 'Alpha Lipoic Acid' },
    { id: 3,  name: 'Cinnamon Supplements' },
  
 
  ];
  



  return (
    <div className='MenuCategories'>
        <p onClick={()=>navigate("/")}>Home <FaHome/>  </p>
        <p onClick={()=>navigate("/subcategory")}>Shop All Category</p>
        {subCategories.map((subCategory)=>(
        <p  onClick={() => navigate("/productlistpage",  { state: { category: subCategory.name }})}>{subCategory.name}</p>
      
      ))} 
        <button onClick={()=>navigate("/cartpage")}   >Checkout</button>
    </div>
  )
}

export default MenuCategories
