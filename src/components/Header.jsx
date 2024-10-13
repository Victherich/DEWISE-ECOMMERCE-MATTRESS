import React, { useEffect, useState } from 'react'
import {FaArrowDown, FaCartPlus, FaChevronDown, FaChevronRight, FaHamburger, FaHome, FaSearch, FaUserCircle} from "react-icons/fa"
import "../CSS/Header.css"
import flag from "../Images/flag.png"
import logo from "../Images/logo.jpeg"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
    const navigate = useNavigate()
    const cart = useSelector(state=>state.cartItems)
    console.log(cart)
    const [totalQty,setTotalQty]=useState(0)
  const totalAmount = useSelector(state=>state.totalAmount)



   
        useEffect(() => {
            const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
            console.log(totalItems); // or set it to some state if needed
            setTotalQty(totalItems)

        }, [cart]);

        
   


  return (
    <div>
        <div className='HeaderWrap1'>
            <img src={logo} alt="logo" onClick={()=>navigate("/")}/>
        {/* <h1>Piping<span className='HeaderLogoSpan1'>Rock</span></h1> */}
        <div className='HeaderCenterWrap1'>
        <div className='HeaderLanguageWrap1'>
            <img src={flag} alt="flag"/>
            <p>|<span className='HeaderLang1'>EN</span>|<span className='HeaderLang1'>USD</span><FaChevronDown className='ArrowDownIcon1'/></p>
        </div>
        <div className='SearchBarWrap1'>
            <input placeholder='Search Products'/>
            <div className='SearchIconWrap1'>
                <FaSearch className='SearchIcon1'/>
            </div>
        </div>
        <div className='HeaderUserArea1'>
            <p onClick={()=>navigate("/userlogin")}>Sign In / Join</p>
            <span>My Account <FaChevronRight className='HeaderUserAreaIcon1'/></span>
        </div>
        </div>
        <div className='HeaderCartImgWrap1' onClick={()=>navigate("/cartpage")}>
            {/* <img src="" alt="cartImg"/> */}
            <div style={{display:"flex"}}>
            <FaCartPlus className='HeaderCartIcon1'/> <p>({totalQty})</p>
            </div>
            <p>${totalAmount.toFixed(2)}</p>
        </div>
    </div>
    <div className='HeaderWrap2'>
        <div className='HeaderWrap2Up'>
            <FaHamburger className='FaBurger'/>
            <img src={flag} alt="flag" className='MobileFlag'/>
            <img src={logo} alt="logo" onClick={()=>navigate("/")} className='MobileLogo'/>
            {/* <h2>Piping<span>Rock</span></h2> */}
            <FaUserCircle className='FaUserCircle'/>
            <FaCartPlus className='FaCartPlus' onClick={()=>navigate("/cartpage")}/>
        </div>
        <div className='HeaderWrap2Down'>
        <div className='SearchBarWrap2'>
            <input placeholder='Search Products'/>
            <div className='SearchIconWrap2'>
                <FaSearch className='SearchIcon2'/>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Header
