// Brands.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';

// Dummy logo array – replace these with your actual logo URLs


const BrandsSection = styled.section`
  padding: 60px 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #000080;
  margin-bottom: 40px;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Brands = () => {
    const {subCategories} =useContext(Context)
  return (
    <BrandsSection>
      <Title>Brands</Title>
      <h3>Coming soon...</h3>
      {/* <LogoGrid>
        {subCategories.map((category, index) => (
          <Logo key={index} src={category.logo} alt={`Brand ${index + 1}`} />
        ))}
      </LogoGrid> */}
    </BrandsSection>
  );
};

export default Brands;
