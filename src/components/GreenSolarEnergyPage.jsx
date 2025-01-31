import React from "react";
import styled from "styled-components";
import { FaLeaf, FaSolarPanel, FaGlobe } from "react-icons/fa";

const PageWrapper = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0fdf4;
  color: #2f855a;
  font-family: Arial, sans-serif;
  
  // height:200px;

  @media (min-width: 768px) {
    // padding: 4rem;
  }
`;

const Caption = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const WriteUp = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #38a169;
  font-size: 2rem;

  span {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #2d3748;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;

    span {
      font-size: 1rem;
    }
  }
`;

const GreenSolarEnergyPage = () => {
  return (
    <PageWrapper>
      <Caption>Embrace the Power of Green Energy</Caption>
      <WriteUp>
        Solar energy is the key to a sustainable future. By leveraging the power of the
        sun, we can reduce our carbon footprint and create a cleaner, greener world for
        generations to come.
      </WriteUp>
      {/* <Image
        src="https://via.placeholder.com/600x400.png?text=Solar+Panels"
        alt="Solar Panels"
      /> */}
      <IconsWrapper>
        <IconContainer>
          <FaLeaf />
          <span>Eco-Friendly</span>
        </IconContainer>
        <IconContainer>
          <FaSolarPanel />
          <span>Renewable</span>
        </IconContainer>
        <IconContainer>
          <FaGlobe />
          <span>Sustainable</span>
        </IconContainer>
      </IconsWrapper>
    </PageWrapper>
  );
};

export default GreenSolarEnergyPage;
