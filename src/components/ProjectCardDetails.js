import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, mobileThresholdPixels, fontSizes, Title2, A } from './StyledComponents';

const CardContainer = styled.div`
  width: 35vw;
  height: 35vh;
  margin-left: 10vw;
  padding-right: 3vw;
  align-item: right;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 80vw;
    height: 30vh;
  }
`;

const TitleProject = styled(Title2)`
  font-size: ${fontSizes.s};
`;

const UrlProject = styled(Title2)`
  font-size: ${fontSizes.xs};
`;

const DescriptionProject = styled.p`
  font-family: 'Overlock';
  color: ${colors.white};
  font-size: ${fontSizes.xs};
  text-align: right;
`;

const ProjectCardDetails = ({ title, url, description }) => ( 
    <CardContainer>
      <TitleProject>{title}</TitleProject>
        <UrlProject>
          <A
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          >
          {url}
          </A>
        </UrlProject>
        <DescriptionProject>{description}</DescriptionProject>
    </CardContainer>
);

ProjectCardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default ProjectCardDetails;
