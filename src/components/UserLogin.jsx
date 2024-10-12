import React from 'react'
import "../CSS/UserLogin.css"
import { useNavigate } from 'react-router-dom'
import userloginimg from "../Images/user login img.png"

const UserLogin = () => {
    const navigate =useNavigate()
  return (
    <div className='UserLoginWrap'>
        <div className='UserLoginUp'>
        <div className='UserLoginUpLeft'>
            <h2>Returning Customer</h2>
            <p>Sign in to speed up the checkout process</p>
            <div>
                <label htmlFor="">Email Address:</label>
                <input/>
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input/>
            </div>
            <p>Forgot Password?</p>
            <button>Sign In</button>
        </div>
        <div className='UserLoginUpLine'>

        </div>
        <div className='UserLoginUpRight'>
            <h2>New Customer or Guest</h2>
            <p>Proceed and you will have the opportunity to create an account if one does not already exist for you.</p>
            <button onClick={()=>navigate("/usersignup")}>Continue</button>
        </div>
        </div>
        
     
        <div className='UserLoginDown'>
            <img src={userloginimg} alt="UserLoginPageImg"/>
        </div>

      
    </div>
  )
}

export default UserLogin
