import React, { useState } from 'react';
import '../CSS/UserLogin.css'; // Ensure you have the correct CSS for styling
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import Swal from 'sweetalert2';

const UserForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [sendLinkButtonText,setSendLinkbuttonText]=useState("Get Link")

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://www.heovin.com.ng/api/api4users/user_forgot_password.php", { email });
      setMessage(response.data.message);
      
      Swal.fire({
        icon: response.data.success ? 'success' : 'error',
        title: response.data.success ? 'Success' : 'Error',
        text: `${response.data.message} Please check your inbox or spam`,
        confirmButtonText: 'Ok'
      });
      
      // Redirect to login page or reset password page if needed
      if (response.data.success) {
        setSendLinkbuttonText("Resend Link")
      }
    } catch (error) {
      console.error('Error during forgot password request:', error);
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
        confirmButtonText: 'OK'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className='ContactFormWrap'>
      <div className="contact-form-container">
        <h2>User Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">
            {isSubmitting ? (
              <ClipLoader color={"#ffffff"} loading={isSubmitting} css={override} size={15} />
            ) : (
              <p>{sendLinkButtonText}</p>
            )}
          </button>
          <p onClick={() => navigate("/userlogin")} style={{ position: "relative", color: "orange", cursor: "pointer", textDecoration: "underline" }}>Login</p>
        </form>
      </div>
    </div>
  );
};

export default UserForgotPassword;
