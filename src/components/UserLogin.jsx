// import React from 'react'
// import "../CSS/UserLogin.css"
// import { useNavigate } from 'react-router-dom'
// import userloginimg from "../Images/user login img.png"

// const UserLogin = () => {
//     const navigate =useNavigate()
//   return (
//     <div className='UserLoginWrap'>
//         <div className='UserLoginUp'>
//         <div className='UserLoginUpLeft'>
//             <h2>Returning Customer</h2>
//             <p>Sign in to speed up the checkout process</p>
//             <div className='UserFormGroup'>
//                 <label htmlFor="">Email Address:</label>
//                 <input/>
//             </div>
//             <div className='UserFormGroup'>
//                 <label htmlFor="">Password:</label>
//                 <input/>
//             </div>
//             <div className='UserFormGroup'>
//             <p style={{color:"blue",textAlign:"right",width:"100%",fontSize:"0.9rem",textDecoration:'underline'}}>Forgot Password?</p>
//             <button className='UserLoginButton'> Sign In</button>
//             </div>
//         </div>
//         <div className='UserLoginUpLine'>

//         </div>
//         <div className='UserLoginUpRight'>
//             <h2>New Customer or Guest</h2>
//             <p>Proceed and you will have the opportunity to create an account if one does not already exist for you.</p>
//             <button onClick={()=>navigate("/usersignup")} className='UserLoginButton ContinueButton' >Continue</button>
//         </div>
//         </div>
        
     
//         <div className='UserLoginDown'>
//             <img src={userloginimg} alt="UserLoginPageImg"/>
//         </div>

      
//     </div>
//   )
// }

// export default UserLogin



import React, { useState } from 'react';
import "../CSS/UserLogin.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import userloginimg from "../Images/user login img.png";
import { useDispatch } from 'react-redux';
import { userLogin } from '../Features/Slice';


const UserLogin = () => {
    const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Show loading spinner while waiting for the response
      Swal.fire({
        title: 'Logging in...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const response = await axios.post('https://www.heovin.com.ng/api/api4users/user_login.php', {
        email,
        password
      });

      Swal.close();

      if (response.data.success) {
        Swal.fire('Success', response.data.message, 'success');
        const userInfo = response.data.user;
        const userToken = response.data.token;

        dispatch(userLogin({ userInfo, userToken }));
        navigate('/userdashboard'); // Navigate to user's dashboard after login
      } else {
        Swal.fire({text:response.data.error});
      }
    } catch (error) {
      Swal.close();
      console.error('Login Error:', error);
      Swal.fire({text:'An error occurred. Please try again.'});
    }
  };

  return (
    <div className='UserLoginWrap'>
      <div className='UserLoginUp'>
        <div className='UserLoginUpLeft'>
          <h2>Returning Customer</h2>
          <p>Sign in to speed up the checkout process</p>
          <form onSubmit={handleLogin} style={{width:"100%"}}>
            <div className='UserFormGroup'>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                
              />
            </div>
            <div className='UserFormGroup'>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='UserFormGroup'>
              <p style={{ color: "blue", textAlign: "right", width: "100%", fontSize: "0.9rem", textDecoration: 'underline', cursor:"pointer"}}
              onClick={()=>navigate("/userforgotpassword")}>
                Forgot Password?
              </p>
              <button className='UserLoginButton' type="submit">Sign In</button>
            </div>
          </form>
        </div>
        <div className='UserLoginUpLine'></div>
        <div className='UserLoginUpRight'>
          <h2>New Customer or Guest</h2>
          <p>Proceed and you will have the opportunity to create an account if one does not already exist for you.</p>
          <button onClick={() => navigate("/usersignup")} className='UserLoginButton ContinueButton'>Continue</button>
        </div>
      </div>
      <div className='UserLoginDown'>
        <img src={userloginimg} alt="UserLoginPageImg" />
      </div>
    </div>
  );
};

export default UserLogin;