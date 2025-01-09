// import React, { useState } from 'react';
// import '../CSS/UserLogin.css'; // Ensure you have the correct CSS for styling
// import { useNavigate } from 'react-router-dom';
// import { css } from '@emotion/react';
// import ClipLoader from 'react-spinners/ClipLoader';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const UserForgotPassword = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState('');
//   const [sendLinkButtonText,setSendLinkbuttonText]=useState("Get Link")

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await axios.post("https://www.glmarketplace.ng/api/api4users/user_forgot_password.php", { email });
//       setMessage(response.data.message);
      
//       Swal.fire({
//         icon: response.data.success ? 'success' : 'error',
//         title: response.data.success ? 'Success' : 'Error',
//         text: `${response.data.message} Please check your inbox or spam`,
//         confirmButtonText: 'Ok'
//       });
      
//       // Redirect to login page or reset password page if needed
//       if (response.data.success) {
//         setSendLinkbuttonText("Resend Link")
//       }
//     } catch (error) {
//       console.error('Error during forgot password request:', error);
//       let errorMessage = 'An error occurred while processing your request. Please try again.';

//       if (error.response) {
//         const { status, data } = error.response;
//         if (status === 404) {
//           errorMessage = data.error || 'User not found. Please check your email and try again.';
//         } else if (status === 500) {
//           errorMessage = 'Server error. Please try again later.';
//         }
//       }

//       Swal.fire({
//         icon: 'error',
//         title: 'Request Failed',
//         text: errorMessage,
//         confirmButtonText: 'OK'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
//   `;

//   return (
//     <div className='ContactFormWrap'>
//       <div className="contact-form-container">
//         <h2>User Forgot Password</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">
//             {isSubmitting ? (
//               <ClipLoader color={"#ffffff"} loading={isSubmitting} css={override} size={15} />
//             ) : (
//               <p>{sendLinkButtonText}</p>
//             )}
//           </button>
//           <p onClick={() => navigate("/userlogin")} style={{ position: "relative", color: "orange", cursor: "pointer", textDecoration: "underline" }}>Login</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserForgotPassword;


import React, { useState } from 'react';
import '../CSS/UserLogin.css'; // Use the CSS file from ForgotPasswordPage for consistent styling
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import BackButton from './BackButton';

const UserForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [sendLinkButtonText, setSendLinkButtonText] = useState('Get Link');

  const handleChange = (e) => {
    setEmail(e.target.value.toLowerCase().trim());
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post('https://www.glmarketplace.ng/api/api4users/user_forgot_password.php', { email });
      setMessage(response.data.message);

      Swal.fire({
        icon: response.data.success ? 'success' : 'error',
        title: response.data.success ? 'Success' : 'Error',
        text: `${response.data.message} Please check your inbox or spam`,
        confirmButtonText: 'Ok',
      });

      if (response.data.success) {
        setSendLinkButtonText('Resend Link');
      }
    } catch (error) {
      let errorMessage = 'An error occurred while processing your request. Please try again.';
      if (error.response) {
        const { status, data } = error.response;
        if (status === 404) {
          errorMessage = data.error || 'User not found. Please check your email and try again.';
        } else if (status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      }

      Swal.fire({
        icon: 'error',
        title: 'Request Failed',
        text: errorMessage,
        confirmButtonText: 'OK',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="agentbody">
      <div className="agentformWrap">
        <div className="HeaderUpRight1" style={{ color: '#FF550C', fontWeight: 'bold' }} onClick={handleNavigate}>
          <FaHome style={{ cursor: 'pointer' }} />
          <p>Home</p>
        </div>
        <form onSubmit={handleSubmit} className="agentForm" style={{ height: '60%' }}>
          <div className="AgentFormPage1">
            <div className="SignUpHeadingWrap">
              <img src="" alt="Forgot Password" />
              <h1>Forgot Password</h1>
            </div>
            <div className="agentinput">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
              <p style={{ fontSize: 'small', color: 'red' }}>{emailError}</p>
            </div>
            <button className="AgentSignUpNextButton" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : sendLinkButtonText}
            </button>
          </div>
          {message && <p style={{ color: '#FF550C' }}>{message}</p>}
        </form>
      </div>
      <BackButton />
    </div>
  );
};

export default UserForgotPassword;

