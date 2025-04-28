// import React from "react";
// import styled from "styled-components";
// import bg from '../Images3/3603.jpg'

// // Hero section styled component
// const HeroSection = styled.section`
//   background: url(${bg}) no-repeat center center/cover;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   text-align: center;
//   padding: 0 20px;
//   position: relative;

//  h1 {
//     font-size: 3rem;
//     font-weight: bold;
//     text-transform: uppercase;
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Adds a subtle shadow */
// }


//   p {
//     font-size: 1.5rem;
//     margin-top: 20px;
//         text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
//   }
// `;

// // About container section
// const AboutContainer = styled.div`
//   background-color: #ffffff;
//   padding: 40px 20px;
//   text-align: center;
//   color: #333;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: #000080;
//   margin-bottom: 30px;
// `;

// const SectionTitle = styled.h3`
//   font-size: 2rem;
//   color: #000080;
//   margin-top: 40px;
//   margin-bottom: 20px;
// `;

// const List = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   font-size: 1.2rem;
//   text-align: left;
//   display: inline-block;
//   text-align: left;

//   li {
//     margin: 10px 0;
//   }
// `;

// // About content section
// const AboutContent = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// // About page component
// const AboutPage = () => {
//   return (
//     <>
//       <HeroSection>
//         <div>
//           <h1>Welcome to EZEKEN & ASSOCIATES INVESTMENT NIG. LIMITED</h1>
//           <p>Your Ultimate Online FOAM, BEDDINGS AND FOOTMART Shopping Destination!</p>
//         </div>
//       </HeroSection>

//       <AboutContainer>
//         <AboutContent>
//           <Title>At DEWISE MATTRESS, we redefine convenience, innovation, and diversity in online shopping.</Title>
//           <p>
//             Our platform is not just a MATTRESS AND BEDDINGS e-commerce store; it’s a world-class online shop designed to cater to all your needs, dreams, and aspirations.
//           </p>

//           <SectionTitle>Why Choose DEWISE MATTRESS ONLINE SHOP?</SectionTitle>
//           <p>
//             Discover a seamless blend of quality, variety, and innovation that caters to your personal and business needs. From everyday essentials to state-of-the-art technology, DEWISE MATTRESS ONLINE SHOP is your trusted partner in lifestyle enhancement and business growth.
//           </p>

//           <SectionTitle>What We Offer:</SectionTitle>
//           <List>
//             <li><strong>A Vast Product Portfolio:</strong></li>
//             <ul>
//               <li>From the latest smartphones and gadgets to solar energy solutions, we’ve got everything you need to stay ahead in today’s world.</li>
//               <li>Explore a wide range of fashion, beauty products, and dietary supplements that keep you looking and feeling your best.</li>
//               <li>Transform your home with smart appliances, daily essentials, and kitchen accessories that simplify life.</li>
//             </ul>

//             <li><strong>Technology Meets Lifestyle:</strong></li>
//             <ul>
//               <li>Shop cutting-edge electric vehicles, renewable energy systems, and portable power stations for a sustainable future.</li>
//               <li>Upgrade your life with smart home devices, electronics, and wearable tech tailored for your needs.</li>
//             </ul>

//             <li><strong>Health and Wellness First:</strong></li>
//             <ul>
//               <li>Access premium NAFDAC-approved traditional medicines, anti-aging foods, and dietary supplements to enrich your well-being.</li>
//               <li>Stay informed and inspired with our daily health podcasts on disease prevention and lifestyle tips.</li>
//             </ul>

//             <li><strong>Business Solutions:</strong></li>
//             <ul>
//               <li>Collaborate with us for franchising opportunities, affiliate marketing, and expert business consultation services.</li>
//               <li>Revolutionize your brand with our product design, marketing, and branding expertise.</li>
//             </ul>
//           </List>

//           <SectionTitle>What Makes Us Stand Out?</SectionTitle>
//           <ul>
//             <li><strong>Unmatched Convenience:</strong> Our intuitive platform ensures a smooth shopping experience, whether you’re shopping for groceries, gadgets, or machinery.</li>
//             <li><strong>Global Reach with Local Focus:</strong> We bring international brands to your doorstep while supporting local businesses and communities.</li>
//             <li><strong>Sustainability at Heart:</strong> From solar energy solutions to electric vehicles, we are committed to promoting green and renewable energy.</li>
//           </ul>

//           <SectionTitle>The DEWISE MATTRESS Vision</SectionTitle>
//           <p>
//             At DEWISE MATTRESS ONLINE SHOP, we’re not just selling products—we’re building lifestyles and empowering businesses. Our mission is to create a one-stop hub for innovation, sustainability, and growth, ensuring every customer and partner achieves their goals.
//           </p>

//           <SectionTitle>Explore, Shop, and Thrive!</SectionTitle>
//           <p>
//             Visit DEWISE MATTRESS ONLINE SHOP today and experience the future of online shopping. Your journey to a smarter, healthier, and more stylish lifestyle starts here.
//           </p>

//           <p><strong>DE WISE MATTRESS ONLINE STORE – Shop. Innovate. Succeed.</strong></p>
//         </AboutContent>
//       </AboutContainer>
//     </>
//   );
// };

// export default AboutPage;


import React from "react";
import styled from "styled-components";
import bg from '../Images3/3603.jpg';
import ProductSlider from "./productSlider";
import ProductSlider2 from "./productSlider2";

// Fancy wave pattern for divider
const Wave = styled.div`
  position: relative;
  height: 100px;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
`;

// Hero Section
const HeroSection = styled.section`
  background: url(${bg}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
  position: relative;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
  }

  p {
    font-size: 1.8rem;
    margin-top: 20px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
  }
`;

// About Container
const AboutContainer = styled.div`
  background: #f5f7fa;
  padding: 60px 20px;
  text-align: center;
  color: #333;
  position: relative;
`;

// Gradient Section
const GradientSection = styled.section`
  background: linear-gradient(135deg, rgba(0,0,255,0.1) 0%, rgba(0,0,255,0.3) 100%);
  padding: 80px 20px;
  color: #333;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  color: #6a11cb;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  text-align: left;

  li {
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }

    strong {
      color: #2575fc;
    }
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutPage = () => {
  return (
    <>
      <HeroSection>
        <div>
          <h1>Welcome to EZEKEN & ASSOCIATES</h1>
          <p>Your Ultimate FOAM, BEDDINGS & FOOTMART Shopping Destination!</p>
        </div>
      </HeroSection>

      <Wave />

      <AboutContainer>
        <AboutContent>
          <Title>We redefine Convenience, Innovation, and Diversity</Title>
          <p>
            Not just a store — a world-class online marketplace for your needs, dreams, and lifestyle aspirations.
          </p>
<ProductSlider/>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <p>
            Quality. Variety. Innovation. Elevating your lifestyle and business growth — all in one place.
          </p>

          <SectionTitle>Our Offerings</SectionTitle>
          <List>
            <li><strong>Vast Product Portfolio:</strong> From tech to fashion, smart living to essentials — everything under one roof.</li>
            <li><strong>Tech Meets Lifestyle:</strong> Smart devices, solar energy, EVs, and more for a smarter tomorrow.</li>
            <li><strong>Health & Wellness:</strong> Premium supplements, traditional medicine, and expert wellness podcasts.</li>
            <li><strong>Business Solutions:</strong> Franchise opportunities, brand development, and expert consultations.</li>
          </List>
        </AboutContent>
      </AboutContainer>
      <ProductSlider2/>

      <Wave style={{ transform: 'rotate(180deg)', background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }} />

      <GradientSection>
        <AboutContent>
          <SectionTitle>What Makes Us Stand Out?</SectionTitle>
          <List>
            <li><strong>Unmatched Convenience:</strong> One platform for groceries, gadgets, machinery — and more!</li>
            <li><strong>Global Reach:</strong> Bridging international brands to your local doorstep with heart.</li>
            <li><strong>Sustainability Focus:</strong> Solar solutions, electric vehicles — a greener, better future.</li>
          </List>

          <SectionTitle>Our Vision</SectionTitle>
          <p style={{ fontSize: '1.4rem', marginTop: '20px' }}>
            We’re not just selling products — we’re crafting lifestyles, inspiring dreams, and building futures.
          </p>

          <SectionTitle>Explore. Shop. Thrive.</SectionTitle>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Dive into the world of DEWISE MATTRESS today. Your journey to a smarter, healthier, and more stylish life starts here.
          </p>
        </AboutContent>
      </GradientSection>
    </>
  );
};

export default AboutPage;

