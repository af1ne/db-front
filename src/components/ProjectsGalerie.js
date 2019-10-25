import React, { useState } from "react";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from './StyledComponents';
import ProjectCardDetails from './ProjectCardDetails';

const ProjectsContainer = styled.div`
  background-color: ${colors.blackTransparency};
  width: 34vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100vw;
    height: 100vh;
  }
`;

const PictureContainer = styled.div`
  width: 30vw;
  height: 30vh;
  margin: 2rem;
  cursor: pointer;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 80vw;
    height: 30vh;
  }
`;

const ProjectsGalerie = ({ datas, setSelectedProject }) => (
  <ProjectsContainer>
    {datas.map((data) => 
      <PictureContainer key={data.node.id} onClick={() => setSelectedProject(data.node.id)}>
        <Img fluid={data.node.picture.childImageSharp.fluid}/>
      </PictureContainer>   
    )}
  </ProjectsContainer>
);

ProjectsGalerie.propTypes = {
  datas: PropTypes.array.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};

export default ProjectsGalerie;
