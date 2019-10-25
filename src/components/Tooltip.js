import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors, mobileThresholdPixels, fontSizes } from './StyledComponents';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 10px;
  border-bottom: 10px dotted ${colors.greenTransparency};
  
  & span {
    visibility: hidden;
    width: 120px;
    background-color: ${colors.green};
    color: ${colors.white};
    text-align: center;
    border-radius: 3px;
    padding: 5px;
    position: absolute;
    z-index: 20;
    top: 200%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  & span:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${colors.green} transparent transparent transparent;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const Span = styled.span`
  fontSizes: 10px;
`;

const Tooltip = ({
  text
}) => (
    <TooltipContainer>
      <Span>{text}</Span>
    </TooltipContainer>
  );

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tooltip;
