import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import { bool } from 'prop-types';
import { colors, fontSizes, mobileThresholdPixels } from './StyledComponents';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${colors.transparent};
  height: 100vh;
  text-align: right;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 90;  

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100%;
    background: black;
  }

  & ul {
    font-family: 'Overlock';
    font-size: ${fontSizes.xs};
    padding: 1rem 0;
    margin-top: 7vh;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    list-style-type: none;
  }

  li {
    @media (max-width: ${mobileThresholdPixels}) {
      margin-bottom: 6vh;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.green};
  transition: color 0.2s linear;

  &:hover {
    color: ${colors.purple};
  }
`;

const MenuList = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li><StyledLink to="/" >Home</StyledLink></li>
        <li><StyledLink to="/portfolio/" >Portfolio</StyledLink></li>
        <li><StyledLink to="/curriculum-vitae/" >Curriculum vitae</StyledLink></li>
        <li><StyledLink to="/a-propos/" >A propos</StyledLink></li>
        <li><StyledLink to="/contact/" >Contact</StyledLink></li>
      </ul>
    </StyledMenu>
  )
};

MenuList.propTypes = {
  open: bool.isRequired,
}

export default MenuList;