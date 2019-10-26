import React, { useState } from "react";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from './StyledComponents';
import isMobile from '../services/isMobile';
import ProjectCardDetails from './ProjectCardDetails';

const ProjectsContainer = styled.div`
  background-color: ${colors.blackTransparency};
  width: 35vw;
  height: 100vh;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  overflow: scroll;

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
  transition: .3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${mobileThresholdPixels}) {
    width: 80vw;
    height: 30vh;
  }
`;

const ProjectsGalerie = ({ datas, setSelectedProject, selectedProject, dataToRead }) => (
  <ProjectsContainer>
    {datas.map((data) => 
      <PictureContainer
        key={data.node.id}
        onClick={() => setSelectedProject(data.node.id)}
      >
        <Img fluid={data.node.picture.childImageSharp.fluid}/>
      </PictureContainer>
    )}
    { isMobile() && selectedProject &&
      <ProjectCardDetails 
        title={dataToRead.node.title}
        url={dataToRead.node.url}
        description={dataToRead.node.description}
        technos={dataToRead.node.technos}
      />
    } 
  </ProjectsContainer>
);

ProjectsGalerie.propTypes = {
  datas: PropTypes.array.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  selectedProject: PropTypes.string.isRequired,
  dataToRead: PropTypes.shape.isRequired,
};

ProjectsGalerie.defaultProps = {
  selectedProject: null,
  dataToRead: {},
};

export default ProjectsGalerie;
