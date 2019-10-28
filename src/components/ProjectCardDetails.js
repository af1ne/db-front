import React from "react";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FadeIn } from 'animate-css-styled-components';
import { 
  mobileThresholdPixels,
  Title3,
  Date,
  Url,
  P,
  A } from './StyledComponents';

const CardContainer = styled.div`
  width: 35vw;
  height: 35vh;
  margin-left: 10vw;
  padding-right: 1vw;
  align-item: right;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 80vw;
    height: 30vh;
  }
`;

const TechnoContainer = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: flex-end;
`;

const Techno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1vw;
  filter: grayscale(100%);
  transform: scale(1);
  transition: .3s ease-in-out;

  &:hover {
    filter: grayscale(0);
    transform: scale(1.2);
  }
`;

const ProjectCardDetails = ({ title, url, description, technos, date }) => ( 
    <FadeIn>
      <CardContainer>
      <Title3>
        {title}
        </Title3>
        <Date>{date}</Date>
        <Url>
          <A
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          >
          {url}
          </A>
        </Url>
        <P>{description}</P>
        <TechnoContainer>
          {technos.map(techno => (
            <Techno key={techno.id}>
              <Img
                key={techno.id}
                fixed={techno.logo.childImageSharp.fixed}
                title={techno.name}
                alt={`logo ${techno.name}`}
              />
            </Techno>
          ))}
        </TechnoContainer>
    </CardContainer>
  </FadeIn>
);

ProjectCardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
};

export default ProjectCardDetails;
