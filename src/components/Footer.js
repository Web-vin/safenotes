import React from 'react';
import './style.css'
import styled, { keyframes } from 'styled-components';

// Animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components for the footer
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  text-align: center;
  padding: 40px 20px;
  animation: ${fadeIn} 1.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.5s ease-out 0.2s backwards;
`;

const FooterText = styled.p`
  font-size: 14px;
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.5s ease-out 0.4s backwards;
`;

const AnimationWrapper = styled.div`
  animation: ${fadeIn} 1.5s ease-out 0.6s backwards;
`;

// Footer Component
const Footer = () => {
  return (
    <div>

<FooterContainer>
      <FooterTitle>Explore the Vibes</FooterTitle>
      <FooterText>
      SafeNotes is a cutting-edge app designed to keep your personal information and sensitive data secure and accessible only to you. Whether it's confidential notes, passwords, or private thoughts, SafeNotes offers a safe and intuitive environment to store your information. With state-of-the-art encryption, your data is protected from unauthorized access, ensuring your privacy at all times.
      </FooterText>
      <AnimationWrapper>
        <p>&copy; 2024 Safe-Notes. All rights reserved.</p>
      </AnimationWrapper>
    </FooterContainer>
    </div>
  );
};

export default Footer;
