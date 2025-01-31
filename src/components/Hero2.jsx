
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import h1 from '../Images/h1.jpg';
import h2 from '../Images/h2.jpg';
import h3 from '../Images/h3.jpg';


// import { useSelector } from 'react-redux';


// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50vh;
  background: linear-gradient(90deg, #0f172a, #1e293b);
  overflow: hidden;
  color: #ffffff;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  // color: #fbbf24;
  // color:rgba(0,0,255,0.7);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  opacity: 0;
  transform: translateY(50px);
  animation: ${(props) => props.isVisible ? 'flyInFromBottom 3s ease-out forwards' : 'none'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

   @media (max-width: 428px) {
    font-size: 1.5rem;
  }

  @keyframes flyInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${(props) => props.isVisible ? 'flyInFromTop 1s ease-out forwards' : 'none'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

   @media (max-width: 428px) {
    font-size: 1rem;
  }

  @keyframes flyInFromTop {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Slider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s linear;
`;

const CarImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  flex-shrink: 0;
`;

// Hero Component
const Hero2 = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  const carImages = [h1,h2,h3];



  

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalImages = carImages.length;
        const nextPosition = (prev + 1) % totalImages;
        return nextPosition;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carImages.length]);

  // Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <HeroContainer ref={sliderRef}>
      <HeroContent>
        <HeroTitle isVisible={isVisible}>OUR SOLAR AND GREEN ENERGY</HeroTitle>
        {/* <HeroSubtitle isVisible={isVisible}>
        Find What You Need, Sell What You Don’t
        </HeroSubtitle> */}
      </HeroContent>
      <Slider
        style={{ transform: `translateX(-${position * 100}vw)` }}
      >
        {carImages.concat(carImages).map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero2;

