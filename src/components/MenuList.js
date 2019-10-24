import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { colors, fontSizes, mobileThresholdPixels } from './StyledComponents';

const MenuContainer = styled.div`
  margin-right: 0.5vw;
  margin-left: 90vw;
  margin-top: 2vh;
  color: ${colors.green};
  background-color: none;
 
  @media (max-width: ${mobileThresholdPixels}) {

  }
`;

const Li = styled.li`
  list-style: none;
  text-align : right;
`;

const unactiveLink = {
  color: colors.green,
  fontSize: fontSizes.xs,
  textDecoration: 'none',
  fontFamily: 'Overlock',
  lineHeight: '1em',
};

const activeLink = {
  ...unactiveLink,
  color: colors.green,
  textDecoration: 'underline',
};

const MenuList = () => (
  <MenuContainer>
    <ul>
      <Li><Link to="/" style={unactiveLink} activeStyle={activeLink}>Home</Link></Li>
      <Li><Link to="/portfolio/" style={unactiveLink} activeStyle={activeLink}>Portfolio</Link></Li>
      <Li><Link to="/curriculum-vitae/" style={unactiveLink} activeStyle={activeLink}>Curriculum vitae</Link></Li>
      <Li><Link to="/a-propos/" style={unactiveLink} activeStyle={activeLink}>A propos</Link></Li>
      <Li><Link to="/contact/" style={unactiveLink} activeStyle={activeLink}>Contact</Link></Li>
    </ul>
  </MenuContainer>
);

export default MenuList;
