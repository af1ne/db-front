import React from 'react';
import PropTypes from 'prop-types';
import { HamburgerSpring } from 'react-animated-burgers';
import styled from 'styled-components';
import { mobileThresholdPixels, colors } from './StyledComponents';


const Burger = styled.div`
  position: fixed;
  top: 1vh;
  left: 95vw;
  border-radius: 1rem;
  z-index: 100;

  @media (max-width: ${mobileThresholdPixels}) {
    left: 83vw;
    margin-right: 2vw;
  }
`;

const BurgerMenu = ({ onClick, isOpen }) => (
  <Burger>
    <HamburgerSpring
      isActive={isOpen}
      toggleButton={onClick}
      barColor={colors.green}
      buttonWidth={30}
    />
  </Burger>
);

BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

BurgerMenu.defaultProps = {
  onClick() { },
  isOpen: false,
};

export default BurgerMenu;
