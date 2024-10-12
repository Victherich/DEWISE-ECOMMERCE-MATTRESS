import React from 'react'
import "../CSS/MenuCategories.css"
import { useNavigate } from 'react-router-dom'

const MenuCategories = () => {
  const navigate = useNavigate()
  return (
    <div className='MenuCategories'>
        {/* <p>Crazy Deals</p> */}
        <p onClick={()=>navigate('/subcategory')}>Supplements</p>
        <p onClick={()=>navigate('/subcategory')}>Vitamins</p>
        {/* <p>Essential Oils</p> */}
        <p onClick={()=>navigate('/subcategory')}>Herbs</p>
        {/* <p>Beauty</p> */}
        {/* <p>Weight Support</p> */}
        {/* <p>Sports</p> */}
        {/* <p>Joint Support</p> */}
        <button onClick={()=>navigate("/cartpage")}   >Checkout</button>
    </div>
  )
}

export default MenuCategories
