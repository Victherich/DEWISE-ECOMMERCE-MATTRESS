import React from "react";
import styled from "styled-components";

const TermsAndConditionsPage = () => {
  return (
    <PageWrapper>
      <ContentBox>
        <Title>Terms and Conditions</Title>
        <Section>
          <Paragraph>
            Use of this website and any transactions made through dewisemattress.com are subject to the terms and conditions outlined below. Please review them carefully.
          </Paragraph>

          <Subtitle>1. Orders & Payments</Subtitle>
          <Paragraph>
            Orders placed through this website are processed based on item availability and internal approval. Payment is required at the time of order. Supported payment methods include credit cards, debit cards, and PayPal.
          </Paragraph>

          <Subtitle>2. Shipping & Delivery</Subtitle>
          <Paragraph>
            Order processing typically takes between 1–3 business days. Delivery schedules may differ depending on destination and other external factors. Any applicable shipping fees will be calculated during checkout.
          </Paragraph>

          <Subtitle>3. Returns & Refunds</Subtitle>
          <Paragraph>
            Customers may request a return within 30 days of receiving their mattress. Returned items should be in good condition and, when feasible, in their original packaging. Eligibility for refunds is assessed on a case-by-case basis.
          </Paragraph>

          <Subtitle>4. Warranty</Subtitle>
          <Paragraph>
            Mattresses may include a limited 10-year warranty that covers certain manufacturing defects. This does not extend to damage resulting from misuse, improper handling, or standard wear and tear.
          </Paragraph>

          <Subtitle>5. Use of Website</Subtitle>
          <Paragraph>
            All content on this website is intended for general informational purposes only. Any unauthorized copying or distribution of content may lead to appropriate action.
          </Paragraph>

          <Subtitle>6. Privacy</Subtitle>
          <Paragraph>
            Information regarding how personal data is collected and used can be found in the <a href="/privacypolicy" style={{ color: '#0077cc' }}>Privacy Policy</a>.
          </Paragraph>

          <Subtitle>7. Contact</Subtitle>
          <Paragraph>
            For inquiries related to these Terms and Conditions, contact contact@dewisemattress.com or call +234 806 154 9031.
          </Paragraph>
        </Section>
      </ContentBox>
    </PageWrapper>
  );
};

export default TermsAndConditionsPage;

// ---------------- Styled Components ----------------

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
  background: linear-gradient(to bottom right, #f2f2f2, #e0f7fa);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #000080;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  color: #000080;
  margin-top: 1rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #555;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
