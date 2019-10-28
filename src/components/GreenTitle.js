import React from "react";
import PropTypes from 'prop-types';
import { Title2 } from './StyledComponents';
import { FadeIn } from 'animate-css-styled-components';




const GreenTitle = ({ firstLine, secondLine }) => (
  <FadeIn duration="2s">
    <Title2>
      {firstLine} <br/>
      {secondLine === null ? "" : secondLine}
    </Title2>
  </FadeIn>
);

GreenTitle.propTypes = {
  firstLine: PropTypes.string.isRequired,
  secondLine: PropTypes.string,
};

GreenTitle.defaultProps = {
  secondLine: "",
};

export default GreenTitle;
