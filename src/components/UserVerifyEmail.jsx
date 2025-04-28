// // import React, { useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const UserVerifyEmail = () => {
// //   const { token } = useParams(); // Get the token from the URL
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const verifyEmail = async () => {
// //       try {
// //         Swal.fire({
// //           title: 'Verifying...',
// //           text: 'Please wait while we verify your email.',
// //           allowOutsideClick: false,
// //           onBeforeOpen: () => {
// //             Swal.showLoading();
// //           }
// //         });

// //         // Post the token to the verification endpoint
// //         const response = await axios.post('https://dewisemattress.com/api/api4users/user_verify_email.php', { token });

// //         Swal.close();

// //         if (response.data.success) {
// //           Swal.fire('Success', 'Your email has been verified successfully!', 'success');
// //           navigate('/userlogin'); // Redirect to login
// //         } else {
// //           Swal.fire('Error', response.data.error, 'error');
// //         }
// //       } catch (error) {
// //         Swal.close();
// //         console.error('Verification Error:', error);
// //         Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// //       }
// //     };

// //     verifyEmail();
// //   }, [token, navigate]);

// //   return (
// //     <div className='ContactFormWrap'>
// //       <div className="contact-form-container">
// //         <h2>Email Verification</h2>
// //         <p>Please wait while we verify your email...</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserVerifyEmail;



// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const UserVerifyEmail = () => {
//   const { token } = useParams(); // Get the token from the URL
//   const navigate = useNavigate();

  
    
//         const verifyEmail = async () => {
//             try {
//               Swal.fire({
//                 title: 'Verifying...',
//                 text: 'Please wait while we verify your email.',
//                 allowOutsideClick: false,
//                 didOpen: () => {
//                   Swal.showLoading();
//                 }
//               });
      
//               // Post the token to the verification endpoint
//               const response = await axios.post('https://dewisemattress.com/api/api4users/user_verify_email.php', { token });
      
//               Swal.close();
//               console.log(response.data)
      
//               if (response.data.success) {
         
//                 Swal.fire('Success', response.data.message, 'success');
//                 navigate('/userlogin'); // Redirect to login
//               } else {
//                 Swal.fire('Error', response.data.error, 'error');
//               }
//                 //   Swal.fire('Success', response.data.message, 'success');
//                 //  navigate('/userlogin'); // Redirect to login
//             } catch (error) {
//               Swal.close();
//               console.error('Verification Error:', error);
//               Swal.fire('Error', 'An error occurred. Please try again.', 'error');
//             }
//           };
      

    


//   return (
//     <div className='ContactFormWrap'>
//       <div className="contact-form-container">
//         <h2>Email Verification</h2>
//         <button onClick={verifyEmail}>Click to Verify</button>
//       </div>
//     </div>
//   );
// };

// export default UserVerifyEmail;





import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../CSS/VerifyEmail.css'; // Assuming this CSS file contains the styles
import { FaHome } from 'react-icons/fa';

const UserVerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verificationMessage, setVerificationMessage] = useState('');
  const [verificationMessageError, setVerificationMessageError] = useState('');

  const verifyEmail = async () => {
    try {
      Swal.fire({
        title: 'Verifying...',
        text: 'Please wait while we verify your email.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.post('https://dewisemattress.com/api/api4users/user_verify_email.php', { token });
      Swal.close();

      Swal.fire({icon:"success"});
      navigate('/userlogin');

      // if (response.data.success) {
      //   setVerificationMessage(response.data.message);
       
      // } else {
      //   setVerificationMessageError(response.data.error);
      //   Swal.fire('Error', response.data.error, 'error');
      // }
    } catch (error) {
      Swal.close();
      console.error('Verification Error:', error);
      let errorMessage = 'An error occurred. Please try again.';

      if (error.response) {
        if (error.response.data && error.response.data.error) {
          errorMessage = error.response.data.error;
        } else if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        } else {
          errorMessage = 'Unexpected error from server.';
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your internet connection.';
      } else {
        errorMessage = error.message;
      }

      // setVerificationMessageError(errorMessage);
      // Swal.fire('Error', errorMessage, 'error');
    }
  };

  useEffect(() => {
    verifyEmail();
  }, [token]);

  return (
    <div className="VerifyContainer">
      <h2>Email Verification</h2>
      {!verificationMessage && !verificationMessageError && <h2>Please wait...</h2>}
      {verificationMessage && <h2>{verificationMessage}</h2>}
      {verificationMessageError && <h2>{verificationMessageError}</h2>}
      {verificationMessage && (
        <button className="AgentSignUpNextButton" onClick={() => navigate('/userlogin')}>
          Login
        </button>
      )}
      {verificationMessageError && (
        <button className="AgentSignUpNextButton" onClick={() => navigate('/')}>
          <FaHome /> Home
        </button>
      )}
    </div>
  );
};

export default UserVerifyEmail;


