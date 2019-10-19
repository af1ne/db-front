import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { colors, fontSizes } from './StyledComponents';


const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  text-decoration: none;
`;

const unactiveLink = {
  color: colors.white,
  fontSize: fontSizes.s,
  textDecoration: `none`,
  fontFamily: 'Overlock',
  lineHeight: '3em',
  textAlign: 'right',
};

const Menu = () => (
  <MenuContainer>
    <Link to="/" style={unactiveLink} activeStyle={{ color: colors.green }}>Home</Link>
    <Link to="/portfolio/" style={unactiveLink} activeStyle={{ color: colors.green }}>Portfolio</Link>
    <Link to="/curriculum-vitae/" style={unactiveLink} activeStyle={{ color: colors.green }}>Curriculum vitae</Link>
    <Link to="/a-propos/" style={unactiveLink} activeStyle={{ color: colors.green }}>A propos</Link>
    <Link to="/contact/" style={unactiveLink} activeStyle={{ color: colors.green }}>Contact</Link>
  </MenuContainer>
);

export default Menu;
