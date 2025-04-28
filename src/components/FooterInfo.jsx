// FooterInfo.js
import React from "react";
import styled from "styled-components";

// Importing icons from react-icons
import { FaTruck, FaCreditCard, FaHeadphonesAlt, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import { IoMdReturnLeft } from 'react-icons/io';

const FooterInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  padding: 20px;
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
      color: #000080; /* Set icon color, you can change this as needed */
    }

    h3 {
      font-size: 1rem;
    //   font-weight: bold;
      margin: 0;
    }
  }
`;

const FooterInfo = () => {
  return (
    <FooterInfoContainer>
      <div className="footer-item">
        <FaTruck />
        <h3>FREE SHIPPING</h3>
      </div>
      <div className="footer-item">
        <FaCreditCard />
        <h3>ONLINE PAYMENT</h3>
      </div>
      <div className="footer-item">
        <FaHeadphonesAlt />
        <h3>CUSTOMER CARE</h3>
      </div>
      <div className="footer-item">
        <FaShieldAlt />
        <h3>24/7 SUPPORT</h3>
      </div>
      <div className="footer-item">
        <FaShieldAlt />
        <h3>100% SAFE</h3>
      </div>
      <div className="footer-item">
        <IoMdReturnLeft />
        <h3>RETURN POLICY</h3>
      </div>
    </FooterInfoContainer>
  );
};

export default FooterInfo;
