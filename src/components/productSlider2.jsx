

// ProductSlider.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import car1 from '../Images3/heroimg1.jpg';
import car2 from '../Images3/heroimg2.jpg';
import car3 from '../Images3/heroimg3.jpg';
import car4 from '../Images3/heroimg4.jpg';
import car5 from '../Images3/heroimg5.jpg';
import car6 from '../Images3/heroimg6.jpg';

const slide = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;


const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background: #f8f9fa;
  padding: 2rem 0;
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(350px * 10);
  animation: ${slide} 30s linear infinite;
`;

const ProductCard = styled.div`
  width: 350px;
  margin: 0 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`

  text-align: center;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #888;
`;

const ProductSlider2 = () => {
  const products = [
    { id: 1, title: "Elegant Watch", price: "$199", image: car1 },
    { id: 2, title: "Stylish Shoes", price: "$89", image: car2 },
    { id: 3, title: "Luxury Bag", price: "$299", image: car3},
    { id: 4, title: "Designer Sunglasses", price: "$149", image: car4 },
    { id: 5, title: "Smartphone", price: "$699", image: car5 },
    { id: 6, title: "Smartphone", price: "$699", image: car6 },
  ];

  // Duplicate the array to make it loop smoothly
  const repeatedProducts = [...products, ...products];

  return (
    <SliderContainer>
      <SlideTrack>
        {repeatedProducts.map((product) => (
          <ProductCard key={product.id + Math.random()}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductInfo>

            </ProductInfo>
          </ProductCard>
        ))}
      </SlideTrack>
    </SliderContainer>
  );
};

export default ProductSlider2;
