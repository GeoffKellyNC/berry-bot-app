import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroStyled>
      <h1 className="hero-title"> Berry Bot Control Panel </h1>
    </HeroStyled>
  );
};

export default Hero;

const HeroStyled = styled.div`
  .hero-title {
    font-family: ${(pr) => pr.theme.fonts.primary};
    font-size: ${(pr) => pr.theme.fontSizes.large};
    color: ${(pr) => pr.theme.colors.berry};
    text-align: center;
    padding: 1.4rem;
    font-weight: bold;
  }
`;
