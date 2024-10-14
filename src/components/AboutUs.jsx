import React from 'react';
import styled from 'styled-components';
import { FaHeartbeat } from 'react-icons/fa'; // Example icon
import { GiStrongMan } from 'react-icons/gi'; // Example icon

const AboutUsContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f9;
  text-align: center;
  color: #333;
  
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

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;

  svg {
    font-size: 4rem;
    color: #FFB42C;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @media (max-width: 768px) {
    svg {
      font-size: 3rem;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: #FFB42C;
  color: white;
  padding: 12px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e69c29;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 25px;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Heading>About Heovin</Heading>
      <SubHeading>Your Health, Our Priority</SubHeading>
      <Text>
        At Heovin, we believe in providing the best supplements to support your health and wellness. 
        With a commitment to quality, innovation, and customer satisfaction, our products are formulated with care 
        to meet the unique needs of every individual. Whether you're looking to boost your immunity, enhance your 
        energy levels, or strengthen your body, Heovin has something for everyone.
      </Text>

      <Text>
        Our mission is simple: to empower individuals to take control of their health with trusted, natural, and 
        scientifically-backed supplements. We work tirelessly to ensure that each product meets the highest standards 
        of safety and efficacy, giving you peace of mind as you work towards your wellness goals.
      </Text>

      <IconWrapper>
        <FaHeartbeat />
        <GiStrongMan />
      </IconWrapper>


    </AboutUsContainer>
  );
};

export default AboutUs;
