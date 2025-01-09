import React from 'react';
import styled from 'styled-components';

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
  color: #FF550C;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: #FF550C;
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

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Heading>Welcome to GL Marketplace – Your Ultimate Online Shopping Destination!</Heading>
      <Text>
        At GL Marketplace, we redefine convenience, innovation, and diversity in online shopping. Our platform is not just an e-commerce store; it’s a world-class marketplace designed to cater to all your needs, dreams, and aspirations.
      </Text>

      <SubHeading>Why Choose GL Marketplace?</SubHeading>
      <Text>
        Discover a seamless blend of quality, variety, and innovation that caters to your personal and business needs. From everyday essentials to state-of-the-art technology, GL Marketplace is your trusted partner in lifestyle enhancement and business growth.
      </Text>

      <SubHeading>What We Offer:</SubHeading>
      <Text>
        <strong>1. A Vast Product Portfolio:</strong>
        <ul>
          <li>From the latest smartphones and gadgets to solar energy solutions, we’ve got everything you need to stay ahead in today’s world.</li>
          <li>Explore a wide range of fashion, beauty products, and dietary supplements that keep you looking and feeling your best.</li>
          <li>Transform your home with smart appliances, daily essentials, and kitchen accessories that simplify life.</li>
        </ul>
      </Text>

      <Text>
        <strong>2. Technology Meets Lifestyle:</strong>
        <ul>
          <li>Shop cutting-edge electric vehicles, renewable energy systems, and portable power stations for a sustainable future.</li>
          <li>Upgrade your life with smart home devices, electronics, and wearable tech tailored for your needs.</li>
        </ul>
      </Text>

      <Text>
        <strong>3. Health and Wellness First:</strong>
        <ul>
          <li>Access premium NAFDAC-approved traditional medicines, anti-aging foods, and dietary supplements to enrich your well-being.</li>
          <li>Stay informed and inspired with our daily health podcasts on disease prevention and lifestyle tips.</li>
        </ul>
      </Text>

      <Text>
        <strong>4. Business Solutions:</strong>
        <ul>
          <li>Collaborate with us for franchising opportunities, affiliate marketing, and expert business consultation services.</li>
          <li>Revolutionize your brand with our product design, marketing, and branding expertise.</li>
        </ul>
      </Text>

      <SubHeading>What Makes Us Stand Out?</SubHeading>
      <Text>
        <ul>
          <li><strong>Unmatched Convenience:</strong> Our intuitive platform ensures a smooth shopping experience, whether you’re shopping for groceries, gadgets, or machinery.</li>
          <li><strong>Global Reach with Local Focus:</strong> We bring international brands to your doorstep while supporting local businesses and communities.</li>
          <li><strong>Sustainability at Heart:</strong> From solar energy solutions to electric vehicles, we are committed to promoting green and renewable energy.</li>
        </ul>
      </Text>

      <SubHeading>The GL Marketplace Vision</SubHeading>
      <Text>
        At GL Marketplace, we’re not just selling products—we’re building lifestyles and empowering businesses. Our mission is to create a one-stop hub for innovation, sustainability, and growth, ensuring every customer and partner achieves their goals.
      </Text>

      <SubHeading>Explore, Shop, and Thrive!</SubHeading>
      <Text>
        Visit GL Marketplace today and experience the future of online shopping. Your journey to a smarter, healthier, and more stylish lifestyle starts here.
      </Text>

      <SubHeading>GL Marketplace – Shop. Innovate. Succeed.</SubHeading>
    </AboutUsContainer>
  );
};

export default AboutUs;
