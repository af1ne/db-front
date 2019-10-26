import React, { useState } from "react";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, mobileThresholdPixels, Title2, fontSizes } from './StyledComponents';
import isMobile from '../services/isMobile';
import ProjectCardDetails from './ProjectCardDetails';

const ProjectsContainer = styled.div`
  background-color: ${colors.blackTransparency};
  width: 34vw;
  height: 100vh;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100vw;
    height: 100vh;
  }
`;

const ScrollingContainer = styled.div`
  overflow: scroll;
  width: 34vw;
  height: 100vh;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.transparent}; 
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.greenTransparency}; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.green}; 
  }
  &::-webkit-scrollbar-corner {
    display: none;
  }
`;

const PictureContainer = styled.div`
  width: 30vw;
  height: 30vh;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: .3s ease-in-out;
  transform: scale(1);
  color: ${colors.white};

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${mobileThresholdPixels}) {
    width: 80vw;
    height: 30vh;
  }
`;

const NextProject = styled(PictureContainer)`
  height: 15vh;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  padding-top: 7vh;
  cursor: help;
`;

const ProjectsGalerie = ({ datas, setSelectedProject, selectedProject, dataToRead }) => (
  <ProjectsContainer>
    <ScrollingContainer>
      <NextProject>
        <p>Mon prochain projet sera peut-être le vôtre...</p>
      </NextProject>
      {datas.map((data) =>
        <PictureContainer
          key={data.node.id}
          onClick={() => setSelectedProject(data.node.id)}
        >
          <Img fluid={data.node.picture.childImageSharp.fluid} />
        </PictureContainer>
      )}
      <PictureContainer />
      {isMobile() && selectedProject &&
        <ProjectCardDetails
          title={dataToRead.node.title}
          url={dataToRead.node.url}
          description={dataToRead.node.description}
          technos={dataToRead.node.technos}
          date={dataToRead.node.date}
        />
      }
    </ScrollingContainer>
  </ProjectsContainer>
);

ProjectsGalerie.propTypes = {
  datas: PropTypes.array.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  selectedProject: PropTypes.string,
  dataToRead: PropTypes.shape({}),
};

ProjectsGalerie.defaultProps = {
  selectedProject: null,
  dataToRead: {},
};

export default ProjectsGalerie;
