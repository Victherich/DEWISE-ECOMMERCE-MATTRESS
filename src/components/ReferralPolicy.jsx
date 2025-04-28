
import React from "react";
import styled from "styled-components";

const ReferralPolicyPage = () => {
  return (
    <Wrapper>
      <Content>
        <Heading>Referral Policy</Heading>
        <SubHeading>Referrals Terms & Conditions</SubHeading>

        <Paragraph>
          At <strong>EZEKEN & ASSOCIATES INVESTMENT NIG. LIMITED</strong>, we’re
          on a mission to become the leading on-demand provider of mattresses. We
          value our clients, and we know they’re our best advocates. If you’re a
          satisfied customer, refer your friends, family, or colleagues and earn
          cash rewards! WhatsApp or Call: <Highlight>+2348061549031</Highlight>
        </Paragraph>

        <SectionTitle>How Does It Work?</SectionTitle>
        <List>
          <li>
            📌 Register to become a referrer and get a code immediately. Call or
            WhatsApp <Highlight>+2348061549031</Highlight>
          </li>
          <li>
            🛒 Refer someone to buy a mattress and ensure they quote your referral
            code during their order.
          </li>
          <li>🔑 Referee must provide your unique referral code.</li>
          <li>
            💰 Earn <strong>2%</strong> of the referee’s order total after purchase.
          </li>
          <li>
            🥇 First come, first rewarded — only the first registered referral will
            earn the bonus.
          </li>
          <li>🚀 No limit to how many people you can refer!</li>
          <li>
            ❌ If the client was already introduced by someone else, you won’t be
            eligible.
          </li>
        </List>

        <SectionTitle>Exclusions</SectionTitle>
        <List>
          <li>You can’t refer existing clients of our company.</li>
          <li>You can’t refer yourself.</li>
          <li>
            You can’t refer anyone who opted out of our services within the last 6
            months.
          </li>
        </List>

        <SectionTitle>Other Conditions</SectionTitle>
        <Paragraph>
          We reserve the right to modify or withdraw the referral program, and to
          suspend accounts found to be abusing this policy at any time, with or
          without notice.
        </Paragraph>

        <Note>
          📩 Interested in earning commissions through referrals? Reach out via
          WhatsApp/Call at <Highlight>+2348061549031</Highlight> or email us at{" "}
          <a href="mailto:Info@dewisemattress.com">
            Info@dewisemattress.com
          </a>
        </Note>
      </Content>
    </Wrapper>
  );
};

export default ReferralPolicyPage;

// ---------------- Styled Components ----------------

const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #fff3e0, #e1f5fe);
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 2.5rem;
  max-width: 850px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  font-family: "Segoe UI", sans-serif;
  color: #333;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  color: #000080;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  color: #000080;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #1565c0;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #00796b;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  line-height: 1.8;
  font-size: 0.95rem;

  li {
    margin-bottom: 0.75rem;
    color: #444;
    position: relative;
    padding-left: 1.2rem;

    &::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: #43a047;
    }
  }
`;

const Note = styled.div`
  margin-top: 2rem;
  background-color: #e3f2fd;
  padding: 1rem 1.2rem;
  border-left: 4px solid #0288d1;
  font-size: 0.95rem;
  border-radius: 6px;

  a {
    color: #0277bd;
    text-decoration: underline;
  }
`;
