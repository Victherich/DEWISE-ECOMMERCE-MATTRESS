// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaPhoneAlt, FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const ContactContainer = styled.div`
//   padding: 50px;
//   background-color: #fff;
//   text-align: center;
  
//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

// const Heading = styled.h1`
//   font-size: 2.5rem;
//   color: #000080;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const SubHeading = styled.h2`
//   font-size: 1.5rem;
//   color: #000080;
//   margin-bottom: 15px;
// `;

// const Form = styled.form`
//   max-width: 600px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
  
//   @media (max-width: 768px) {
//     max-width: 100%;
//     padding: 0 20px;
//   }
// `;

// const InputField = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: #f4f4f9;
//   padding: 12px;
//   border-radius: 5px;
//   border: 1px solid #ccc;

//   svg {
//     margin-right: 10px;
//     color: #000080;
//   }
// `;

// const Input = styled.input`
//   flex: 1;
//   border: none;
//   background: none;
//   font-size: 1rem;
//   color: #333;
  
//   &:focus {
//     outline: none;
//   }
// `;

// const TextArea = styled.textarea`
//   flex: 1;
//   border: none;
//   background: none;
//   font-size: 1rem;
//   color: #333;
//   resize: none;

//   &:focus {
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   background-color: #000080;
//   color: white;
//   padding: 12px 30px;
//   font-size: 1.2rem;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: gray;
//   }

//   @media (max-width: 768px) {
//     font-size: 1rem;
//     padding: 10px 25px;
//   }
// `;

// const SuccessMessage = styled.p`
//   color: green;
//   margin-top: 20px;
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   margin-top: 20px;
// `;

// const ContactUs = () => {
//     const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const loadingAlert = Swal.fire({text:"Submitting..."})
//     Swal.showLoading()

//     // Clear previous messages
//     setSuccessMessage('');
//     setErrorMessage('');

//     try {
//       const response = await fetch('https://dewisemattress.com/api/api4users/contact_form_endpoint.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSuccessMessage(result.message);
//         Swal.fire({text:result.message})
//         navigate("/")
//         setFormData({ name: '', email: '', phone: '', message: '' });  // Reset form fields
//       } else {
//         setErrorMessage(result.error);
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred. Please try again later.');
//     }finally{
//         loadingAlert.close()
//     }
//   };

//   return (
//     <ContactContainer>
//       <Heading>Contact Us</Heading>
//       <SubHeading>We'd love to hear from you!</SubHeading>

//       <Form onSubmit={handleSubmit}>
//         {/* Name Field */}
//         <InputField>
//           <FaUser />
//           <Input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </InputField>

//         {/* Email Field */}
//         <InputField>
//           <FaEnvelope />
//           <Input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </InputField>

//         {/* Phone Field */}
//         <InputField>
//           <FaPhoneAlt />
//           <Input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </InputField>

//         {/* Message Field */}
//         <InputField>
//           <FaCommentDots />
//           <TextArea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </InputField>

//         {/* Submit Button */}
//         <Button type="submit">Send Message</Button>
//       </Form>

//       {/* Display success or error message */}
//       {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
//       {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
//     </ContactContainer>
//   );
// };

// export default ContactUs;




import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import contactBg from '../Images3/c1.png'; // Add a cozy image
import Gallery from './Gallery';

const ContactContainer = styled.div`
  padding: 80px 20px;
  background: linear-gradient(to right, #f0f4ff, #e8f0ff);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  background: url(${contactBg}) no-repeat center/cover;
  opacity: 0.1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 2;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #001f54;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.6rem;
  color: #0f52ba;
  margin-bottom: 40px;
`;

const InspiringText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 0 auto 60px;
  max-width: 700px;
  line-height: 1.6;
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9fbff;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;

  svg {
    margin-right: 10px;
    color: #0f52ba;
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
  background: linear-gradient(to right, #0f52ba, #5c7cfa);
  color: white;
  padding: 14px 40px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(to right, #5c7cfa, #0f52ba);
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
  const navigate = useNavigate();
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
    const loadingAlert = Swal.fire({text:"Submitting..."});
    Swal.showLoading();

    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://dewisemattress.com/api/api4users/contact_form_endpoint.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        Swal.fire({text:result.message});
        navigate("/");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMessage(result.error);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      loadingAlert.close();
    }
  };

  return (
    <ContactContainer>
      <BackgroundImage />
      <ContentWrapper>
        <Heading>Get In Touch</Heading>
        <SubHeading>We are here to bring you Comfort, Innovation & Dreams</SubHeading>
        <InspiringText>
          Whether you have a question about our luxury mattresses, need support, or just want to share your dream bedroom ideas, 
          our team is ready and excited to hear from you. Let's create comfort together!
        </InspiringText>
        <Gallery/>

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

        {/* Success or Error Message */}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ContentWrapper>
    </ContactContainer>
  );
};

export default ContactUs;

