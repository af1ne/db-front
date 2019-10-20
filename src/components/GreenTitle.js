import React from "react";
import PropTypes from 'prop-types';
import { Title2 } from './StyledComponents';


const GreenTitle = ({ firstLine, secondLine }) => (
  <div>
    <Title2>
      {firstLine} <br/>
      {secondLine === null ? "" : secondLine}
    </Title2>
  </div>
);

GreenTitle.propTypes = {
  firstLine: PropTypes.string.isRequired,
  secondLine: PropTypes.string,
};

GreenTitle.defaultProps = {
  secondLine: "",
};

export default GreenTitle;
