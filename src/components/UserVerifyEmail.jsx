// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const UserVerifyEmail = () => {
//   const { token } = useParams(); // Get the token from the URL
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyEmail = async () => {
//       try {
//         Swal.fire({
//           title: 'Verifying...',
//           text: 'Please wait while we verify your email.',
//           allowOutsideClick: false,
//           onBeforeOpen: () => {
//             Swal.showLoading();
//           }
//         });

//         // Post the token to the verification endpoint
//         const response = await axios.post('https://www.heovin.com.ng/api/api4users/user_verify_email.php', { token });

//         Swal.close();

//         if (response.data.success) {
//           Swal.fire('Success', 'Your email has been verified successfully!', 'success');
//           navigate('/userlogin'); // Redirect to login
//         } else {
//           Swal.fire('Error', response.data.error, 'error');
//         }
//       } catch (error) {
//         Swal.close();
//         console.error('Verification Error:', error);
//         Swal.fire('Error', 'An error occurred. Please try again.', 'error');
//       }
//     };

//     verifyEmail();
//   }, [token, navigate]);

//   return (
//     <div className='ContactFormWrap'>
//       <div className="contact-form-container">
//         <h2>Email Verification</h2>
//         <p>Please wait while we verify your email...</p>
//       </div>
//     </div>
//   );
// };

// export default UserVerifyEmail;



import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserVerifyEmail = () => {
  const { token } = useParams(); // Get the token from the URL
  const navigate = useNavigate();

  
    
        const verifyEmail = async () => {
            try {
              Swal.fire({
                title: 'Verifying...',
                text: 'Please wait while we verify your email.',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                }
              });
      
              // Post the token to the verification endpoint
              const response = await axios.post('https://www.heovin.com.ng/api/api4users/user_verify_email.php', { token });
      
              Swal.close();
              console.log(response.data)
      
              if (response.data.success) {
         
                Swal.fire('Success', response.data.message, 'success');
                navigate('/userlogin'); // Redirect to login
              } else {
                Swal.fire('Error', response.data.error, 'error');
              }
                //   Swal.fire('Success', response.data.message, 'success');
                //  navigate('/userlogin'); // Redirect to login
            } catch (error) {
              Swal.close();
              console.error('Verification Error:', error);
              Swal.fire('Error', 'An error occurred. Please try again.', 'error');
            }
          };
      

    


  return (
    <div className='ContactFormWrap'>
      <div className="contact-form-container">
        <h2>Email Verification</h2>
        <button onClick={verifyEmail}>Click to Verify</button>
      </div>
    </div>
  );
};

export default UserVerifyEmail;

