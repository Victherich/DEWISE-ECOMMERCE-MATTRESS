
// PrivacyPolicyPage.jsx
import React from "react";
import styled from "styled-components";

const PrivacyPolicyPage = () => {
  return (
    <PageWrapper>
      <ContentBox>
        <Title>Privacy Policy</Title>
        <Section>
          <Paragraph>
            The following information is gathered via form submission from our
            website visitors: name, phone number, e-mail address, street
            address.
          </Paragraph>
          <Paragraph>
            We use the information to contact you in regards to our
            products/services. Your information is not shared with anyone else.
          </Paragraph>
          <Paragraph>
            Your personal information is accessible only to dewisemattress.com
            website administrators. Personal information is transmitted through
            a secure gateway and stored in a secure database available only to
            authorized users.
          </Paragraph>
        </Section>
      </ContentBox>
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;

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
