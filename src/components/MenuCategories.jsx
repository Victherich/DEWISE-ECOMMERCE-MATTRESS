import React from 'react'
import "../CSS/MenuCategories.css"
import { useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const MenuCategories = () => {
  const navigate = useNavigate()
  const subCategories = [
    { id: 4,  name: 'Crazy Deals' },
    { id: 5,  name: 'Supplements' },
    { id: 6,  name: 'Vitamins' },
    { id: 7,  name: 'Essential Oils' },
    { id: 8,  name: 'Herbs' },
    { id: 9,  name: 'Beauty' },
    { id: 10, name: 'Weight Support' },
    { id: 11, name: 'Sports' },
    { id: 12, name: 'Joint Support' },
];
  



  return (
    <div className='MenuCategories'>
        {/* <p onClick={()=>navigate("/")}>Home <FaHome/>  </p> */}
        {/* <p onClick={()=>navigate("/subcategory")}>Shop All Category</p> */}
        {subCategories.map((subCategory)=>(
        <p  onClick={() => navigate("/productlistpage",  { state: { category: subCategory.name }})}>{subCategory.name}</p>
      
      ))} 
        <button onClick={()=>navigate("/cartpage")}   >Checkout</button>
    </div>
  )
}

export default MenuCategories
