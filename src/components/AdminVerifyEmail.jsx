import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminVerifyEmail = () => {
  const location = useLocation();
  const { token } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleVerify = async () => {
      try {
        Swal.fire({
          title: 'Verifying...',
          text: 'Please wait while we verify your email.',
          allowOutsideClick: false,
          onOpen: () => {
            Swal.showLoading();
          }
        });

        const response = await axios.post('https://dewisemattress.com/api/admin_verify_email.php', { token });

        Swal.close();
        Swal.fire({icon:"success",timer:2000})
        navigate("/adminlogin")

      } catch (error) {
        Swal.close();
        
        // Log detailed error information for debugging
        console.error("Verification Error:", error);

        const errorMessage = error.response?.data?.error || 'An error occurred. Please try again.';
        Swal.fire({
          icon: 'error',
          title: 'Verification Failed',
          text: errorMessage,
          showConfirmButton: true,
          confirmButtonText: 'Ok'
        });
      }
    };

    handleVerify();
  }, [token, navigate]);

  return (
    <div className='ContactFormWrap' key={location.pathname}>
      <div className="contact-form-container">
        <h2>Email Verification</h2>
      </div>
    </div>
  );
};

export default AdminVerifyEmail;