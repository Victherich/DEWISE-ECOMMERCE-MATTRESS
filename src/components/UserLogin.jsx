// import React, { useState } from 'react';
// import "../CSS/UserLogin.css";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import userloginimg from "../Images/user login img.png";
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../Features/Slice';


// const UserLogin = () => {
//     const dispatch = useDispatch()
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Show loading spinner while waiting for the response
//       Swal.fire({
//         title: 'Logging in...',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         }
//       });

//       const response = await axios.post('https://dewisemattress.com/api/api4users/user_login.php', {
//         email,
//         password
//       });

//       Swal.close();

//       if (response.data.success) {
//         Swal.fire({title:'Success',text: response.data.message,icon: 'success',allowOutsideClick:false}).then((result)=>{
//             if(result.isConfirmed){
//                 navigate('/userdashboard'); 
//             }
//         });
//         const userInfo = response.data.user;
//         const userToken = response.data.token;

//         dispatch(userLogin({ userInfo, userToken }));
//        // Navigate to user's dashboard after login
//       } else {
//         Swal.fire({text:response.data.error});
//       }
//     } catch (error) {
//       Swal.close();
//       console.error('Login Error:', error);
//       Swal.fire({text:'An error occurred. Please try again.'});
//     }
//   };

//   return (
//     <div className='UserLoginWrap'>
//       <div className='UserLoginUp'>
//         <div className='UserLoginUpLeft'>
//           <h2>Returning Customer</h2>
//           <p>Sign in to speed up the checkout process</p>
//           <form onSubmit={handleLogin} style={{width:"100%"}}>
//             <div className='UserFormGroup'>
//               <label htmlFor="email">Email Address:</label>
              
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//             </div>
//             <div className='UserFormGroup'>
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='UserFormGroup'>
//               <p style={{ color: "blue", textAlign: "right", width: "100%", fontSize: "0.9rem", textDecoration: 'underline', cursor:"pointer"}}
//               onClick={()=>navigate("/userforgotpassword")}>
//                 Forgot Password?
//               </p>
//               <button className='UserLoginButton' type="submit">Sign In</button>
//             </div>
//           </form>
//         </div>
//         <div className='UserLoginUpLine'></div>
//         <div className='UserLoginUpRight'>
//           <h2>New Customer or Guest</h2>
//           <p>Proceed and you will have the opportunity to create an account if one does not already exist for you.</p>
//           <button onClick={() => navigate("/usersignup")} className='UserLoginButton ContinueButton'>Continue</button>
//         </div>
//       </div>
//       <div className='UserLoginDown'>
//         <img src={userloginimg} alt="UserLoginPageImg" />
//       </div>
//     </div>
//   );
// };


// export default UserLogin;






import React, { useState } from 'react';
import "../CSS/UserLogin.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash, FaHome } from 'react-icons/fa';
import { userLogin } from '../Features/Slice';

const UserLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordShow, setPasswordShow] = useState("password");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: name === 'email' ? value.toLowerCase().trim() : value,
        }));
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailError("Please enter a valid email address");
            return false;
        }
        setEmailError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            Swal.fire({
                title: 'Logging in...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            const response = await axios.post(
                'https://dewisemattress.com/api/api4users/user_login.php',
                formData
            );

            Swal.close();

            if (response.data.success) {
                Swal.fire({
                    title: 'Success',
                    text: response.data.message,
                    icon: 'success',
                    allowOutsideClick: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/userdashboard');
                    }
                });

                const userInfo = response.data.user;
                const userToken = response.data.token;
                dispatch(userLogin({ userInfo, userToken }));
            } else {
                Swal.fire({
                    icon: 'error',
                    text: response.data.error || 'Login failed. Please try again.',
                });
            }
        } catch (error) {
            Swal.close();
            console.error('Login Error:', error);
            Swal.fire({
                icon: 'error',
                text: 'An error occurred. Please try again.',
            });
        }
    };

    return (
        <div className="agentbody">
            <div className="agentformWrap">
                <div
                    className="HeaderUpRight1"
                    style={{ color: "#000080", fontWeight: "bold" }}
                    onClick={() => navigate("/")}
                >
                    <FaHome style={{ cursor: "pointer" }} />
                    <p>Home</p>
                </div>
                <form onSubmit={handleSubmit} className="agentForm" style={{ height: "60%" }}>
                    <div className="AgentFormPage1">
                        <div className="SignUpHeadingWrap">
                            <h1>Login</h1>
                        </div>

                        <div className="agentinput">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                required
                            />
                            <p style={{ fontSize: "small", color: "red" }}>{emailError}</p>
                        </div>

                        <div className="agentinput" style={{ position: "relative" }}>
                            <label htmlFor="password">Password</label>
                            <input
                                type={passwordShow}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                required
                            />
                            {passwordShow === "text" ? (
                                <FaEye
                                    onClick={() => setPasswordShow("password")}
                                    style={{
                                        color: "#000080",
                                        fontSize: "1.5rem",
                                        cursor: "pointer",
                                        position: "absolute",
                                        top: "38%",
                                        right: "10px",
                                    }}
                                />
                            ) : (
                                <FaEyeSlash
                                    onClick={() => setPasswordShow("text")}
                                    style={{
                                        color: "#000080",
                                        fontSize: "1.5rem",
                                        cursor: "pointer",
                                        position: "absolute",
                                        top: "38%",
                                        right: "10px",
                                    }}
                                />
                            )}
                            <p
                                onClick={() => navigate("/userforgotpassword")}
                                style={{
                                    color: "#000080",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    marginTop: "10px",
                                }}
                            >
                                Forgot Password?
                            </p>
                        </div>

                        <button className="AgentSignUpNextButton">Login</button>
                        <p className="myspan">
                            Don't have an account?
                            <span
                                onClick={() => navigate("/usersignup")}
                                style={{ color: "#000080", cursor: "pointer" , fontWeight:"bold"}}
                            >
                                {" "}
                                Sign Up
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
