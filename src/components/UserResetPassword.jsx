import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

const UserResetPassword = () => {
  const location = useLocation();
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    token: token,
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError("");
    }
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("https://www.heovin.com.ng/api/api4users/user_reset_password.php", {
        token: formData.token,
        password: formData.password
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          text: 'Your password has been reset successfully.',
          confirmButtonText: 'Ok'
        })
          navigate('/userlogin');
    
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Reset Password Failed',
          text: response.data.error || 'An error occurred. Please try again.',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Reset Password error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Reset Password Failed',
        text: 'An error occurred while resetting your password. Please try again.',
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
    <div className='ContactFormWrap' key={location.pathname}>
      <div className="contact-form-container">
        <h2>User Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '10px', top: '65%', cursor: 'pointer', transform: 'translateY(-50%)' }}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {confirmPasswordError && <p style={{ fontSize: "small", color: "red" }}>{confirmPasswordError}</p>}
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '10px', top: '65%', cursor: 'pointer', transform: 'translateY(-50%)' }}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <ClipLoader color={"#ffffff"} loading={isSubmitting} css={override} size={15} />
            ) : (
              "Reset Password"
            )}
          </button>
          <p onClick={() => navigate("/adminlogin")} style={{ position: "relative", color: "orange", cursor: "pointer", textDecoration: "underline" }}>Login</p>
        </form>
      </div>
    </div>
  );
};

export default UserResetPassword;
