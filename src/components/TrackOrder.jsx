// OrderTrackingPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import track from '../Images3/track.jpg'

// Styled components for layout
const OrderTrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #000080;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;

  input {
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #000080;
    }
  }

  button {
    background-color: #000080;
    color: white;
    font-size: 1.1rem;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: #4b0082;
      transition: background-color 0.3s ease;
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;

  h2 {
    color: #000080;
    font-size: 1.6rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const OrderTrackingPage = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    // In a real application, you'd call an API to fetch tracking info
    // Here we'll just mock the response
    Swal.fire({ text: "Coming soon...", showConfirmButton: false, timer: 2000 });
    setTrackingInfo({
      status: 'Shipped',
      trackingId: '123456789',
      estimatedDelivery: 'May 5, 2025',
    });
  };

  return (
    <OrderTrackingContainer>
      <Heading>Track Your Order</Heading>

      {/* Banner Image */}
      <BannerImage src={track} alt="Order Tracking Banner" />

      <Form onSubmit={handleTrackOrder}>
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Billing Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Track</button>
      </Form>

      {trackingInfo && (
        <InfoSection>
          <h2>Order Status</h2>
          <p>Status: {trackingInfo.status}</p>
          <p>Tracking ID: {trackingInfo.trackingId}</p>
          <p>Estimated Delivery: {trackingInfo.estimatedDelivery}</p>
        </InfoSection>
      )}

      <InfoSection>
        <h2>Additional Information</h2>
        <p>
          <strong>Ship Package:</strong> Your order will be shipped via trusted delivery services.
        </p>
        <p>
          <strong>14 Days Return Period:</strong> We offer a 14-day return period for your peace of mind.
        </p>
        <p>
          <strong>Flexible Shipping:</strong> You can arrange shipping with us or pick up from any of our pick-up locations.
        </p>
        <p>
          <strong>Payment Methods:</strong> We accept all major online payment methods.
        </p>
        <p>
          <strong>Contact Us:</strong> If you need any help, feel free to get in touch with us.
        </p>
      </InfoSection>
    </OrderTrackingContainer>
  );
};

export default OrderTrackingPage;
