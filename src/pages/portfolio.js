import React, { useState } from "react";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import ProjectsGalerie from '../components/ProjectsGalerie'
import ProjectCardDetails from '../components/ProjectCardDetails';

const Portfolio = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const selectedData = data.allStrapiProject.edges.filter(project => selectedProject && project.node.id === selectedProject)
  const dataToRead = selectedData[0];
  return (
    <Layout>
      <GlobalContainer>
        <GreenContainer>
          
          {isMobile()
            ? "" 
            : (
            <Identity />
            )
          }

          {selectedProject && !isMobile() &&
            <ProjectCardDetails
              title={dataToRead.node.title}
              url={dataToRead.node.url}
              description={dataToRead.node.description}
              technos={dataToRead.node.technos}
            />
          }

          <GreenTitle
            firstLine="Portfolio "
          />
        </GreenContainer>
        <ProjectsGalerie 
          datas={data.allStrapiProject.edges}
          setSelectedProject={(id) => setSelectedProject(id)}
          selectedProject={selectedProject}
          dataToRead={dataToRead}
        />
      </GlobalContainer>
    </Layout>
  )
};

export default Portfolio;

export const projectQuery = graphql`
  query PortfolioQuery {
    allStrapiProject {
      edges {
        node {
          id
          title
          subtitle
          description
          date
          url
          technos {
            id
            name
            logo {
              absolutePath
              relativePath
              childImageSharp {
                fixed(quality: 90, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
              relativeDirectory
            }
          }
          picture {
            childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
