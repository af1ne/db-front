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

const MenuBurger = ({ openning, isOpen }) => (
  <Burger>
      <HamburgerSpring
        isActive={isOpen}
        toggleButton={openning()}
        barColor={colors.green}
        buttonWidth={30}
      />
  </Burger>
);

MenuBurger.propTypes = {
  openning: PropTypes.func,
  isOpen: PropTypes.bool,
  // isClose: PropTypes.bool,
};

MenuBurger.defaultProps = {
  openning() { },
  isOpen: false,
  // isClose: true,
};

export default MenuBurger;
