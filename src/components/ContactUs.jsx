import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ContactContainer = styled.div`
  padding: 50px;
  background-color: #fff;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: #003366;
  margin-bottom: 15px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f9;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;

  svg {
    margin-right: 10px;
    color: #FFB42C;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  color: #333;
  
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  color: #333;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #FFB42C;
  color: white;
  padding: 12px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e69c29;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 25px;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 20px;
`;

const ContactUs = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingAlert = Swal.fire({text:"Submitting..."})
    Swal.showLoading()

    // Clear previous messages
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://www.glmarketplace.ng/api/api4users/contact_form_endpoint.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        Swal.fire({text:result.message})
        navigate("/")
        setFormData({ name: '', email: '', phone: '', message: '' });  // Reset form fields
      } else {
        setErrorMessage(result.error);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }finally{
        loadingAlert.close()
    }
  };

  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <SubHeading>We'd love to hear from you!</SubHeading>

      <Form onSubmit={handleSubmit}>
        {/* Name Field */}
        <InputField>
          <FaUser />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputField>

        {/* Email Field */}
        <InputField>
          <FaEnvelope />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputField>

        {/* Phone Field */}
        <InputField>
          <FaPhoneAlt />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </InputField>

        {/* Message Field */}
        <InputField>
          <FaCommentDots />
          <TextArea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </InputField>

        {/* Submit Button */}
        <Button type="submit">Send Message</Button>
      </Form>

      {/* Display success or error message */}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ContactContainer>
  );
};

export default ContactUs;
