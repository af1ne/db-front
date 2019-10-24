import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, mobileThresholdPixels, fontSizes } from './StyledComponents';

const ButtonContainer = styled.div`
  width: 40%;
  background: ${colors.green};
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -webkit-appearance: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.xs};
  font-family: sans-serif;
  font-weight: 700;
  height: 45px;
  margin: 10px auto 0;
  opacity: 0.8;
`;

const Button = ({
  label,
  type,
}) => (
    <ButtonContainer type={type}>
      {label}
    </ButtonContainer>
  );

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
