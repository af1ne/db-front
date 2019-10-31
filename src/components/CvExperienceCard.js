import React from "react";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FadeIn } from 'animate-css-styled-components';
import { 
  mobileThresholdPixels,
  colors,
  fontSizes,
  Title3,
  Date,
  Url,
  P,
  A } from './StyledComponents';

const CardContainer = styled.div`
  color: ${colors.white};
  font-family: "Overlock";
  font-size: ${fontSizes.s};
  width: 25vw;
  border-bottom: 1px solid ${colors.whiteTransparency};

  @media (max-width: ${mobileThresholdPixels}) {

  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: ${mobileThresholdPixels}) {
    flex-direction: column;
  }
`;

const JobTitle = styled(P)`
  text-align: left;
`;

const CvExperienceCard = ({
  job_title,
  start_date,
  end_date,
  compagnie,
  web_site,
  location,
}) => ( 
  <FadeIn>
    <CardContainer>
      <Row>
        <JobTitle>{job_title}</JobTitle>
      </Row>
      <Row>
        <div></div>
      </Row>
      <Row>
        <Date white xs>
          {start_date === end_date
            ? `${end_date}`
            : `${start_date} à ${end_date}`
          }
        </Date>
        <div>          
          <A white
            href={web_site}
            target="_blank"
            rel="noreferrer noopener"
          >
          {compagnie}
          </A> 
          <span> - {location}</span>
        </div>
      </Row>
    </CardContainer>
  </FadeIn>
);

CvExperienceCard.propTypes = {
  job_title: PropTypes.string.isRequired,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  compagnie: PropTypes.shape({}).isRequired,
  web_site: PropTypes.string,
  location: PropTypes.string,
};

CvExperienceCard.defaultProps = {
  web_site: "",
  location: "",
};

export default CvExperienceCard;
