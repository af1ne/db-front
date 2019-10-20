import React from "react";
import PropTypes from 'prop-types';
import { Title1 } from './StyledComponents';
import styled from 'styled-components';
import { mobileThresholdPixels } from '../components/StyledComponents';

const IdentityContener = styled.div`

  @media (max-width: ${mobileThresholdPixels}) {
    padding-top: 60vh;
    padding-right: 15vw;
    padding-left: 35vw;
  }
`;

const Identity = ({ contact }) => (
  <IdentityContener>
    <Title1>
      Delphine Brunet <br/>
      {contact ? "06.13.32.50.60" : ""}
      {contact ? <br/> : ""}
      {contact ? "delphine.brunet@gmail.com" : ""}
      {contact ? <br/> : ""}
      Développeuse Javascript React / Node.Js
    </Title1>
  </IdentityContener>
);

Identity.propTypes = {
  contact: PropTypes.bool,
};

Identity.defaultProps = {
  contact: false,
};

export default Identity;
