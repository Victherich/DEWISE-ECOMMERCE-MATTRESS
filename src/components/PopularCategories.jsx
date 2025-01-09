import React from 'react'
import "../CSS/PopularCategories.css"
import cat1 from "../Images/cat1.jpeg"
import cat2 from "../Images/cat2.jpeg"
import cat3 from "../Images/cat3.jpeg"
import cat4 from "../Images/cat4.jpeg"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './Context'

const PopularCategories = () => {
  const {subCategories}=useContext(Context)
  const navigate = useNavigate()




  return (
    <div className='PopularCategoriesWrap'>
        <h1>EXPLORE POPULAR CATEGORIES</h1>
        <div className='PopularCategories'>
            {subCategories.slice(0,5).map((subCategory)=>(
                 <div className='PopularCategory' onClick={()=>navigate(`/productlistpage/${subCategory.name}`)}><p>{subCategory.name}</p></div>
    
            ))}
</div>
    </div>
  )
}

export default PopularCategories
