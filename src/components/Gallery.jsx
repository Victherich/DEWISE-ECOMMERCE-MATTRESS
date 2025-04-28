import React from 'react';
import styled from 'styled-components';

// Example Images (replace with your own beautiful cozy mattress images)
import car1 from '../Images3/heroimg1.jpg';
import car2 from '../Images3/heroimg2.jpg';
import car3 from '../Images3/heroimg3.jpg';
import car4 from '../Images3/heroimg4.jpg';
import car5 from '../Images3/heroimg5.jpg';
import car6 from '../Images3/heroimg6.jpg';

const GalleryContainer = styled.div`
  background: linear-gradient(to bottom right, #e0e7ff, #f0f4ff);
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #001f54;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Quote = styled.p`
  padding: 20px;
  font-size: 1.1rem;
  color: #333;
  font-style: italic;
  background-color: #f9f9ff;
`;

const Gallery = () => {
  const galleryItems = [
    { img: car1, quote: "Dream Big, Sleep Deep." },
    { img: car2, quote: "Every Night Deserves Luxury." },
    { img: car3, quote: "Where Comfort Meets Dreams." },
    { img: car4, quote: "Wake Up Renewed, Every Morning." },
    { img: car5, quote: "Sleep Deeper, Live Brighter." },
    { img: car6, quote: "Luxury You Can Feel, Dreams You Can Touch." },
  ];

  return (
    <GalleryContainer>
      <Title>Discover Your Perfect Comfort</Title>
      <SubTitle>Because every great day starts with a great night's sleep.</SubTitle>
      
      <Grid>
        {galleryItems.map((item, index) => (
          <Card key={index}>
            <Image src={item.img} alt="Comfort Image" />
            <Quote>"{item.quote}"</Quote>
          </Card>
        ))}
      </Grid>
    </GalleryContainer>
  );
};

export default Gallery;
