import React, { useState } from "react";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import ProjectsGalerie from '../components/ProjectsGalerie'
import ProjectCardDetails from '../components/ProjectCardDetails';

const Portfolio = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState("");
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
          {data.allStrapiProject.edges.filter(projet => projet.id === selectedProject => (
            <ProjectCardDetails
              i={console.log(projet)}
              title="Titre"
              url="https://reactjs.org/docs/hooks-state.html"
              description="Lorem ipsum"
            />
          ))}
          <GreenTitle
            firstLine="Portfolio "
          />
        </GreenContainer>
        <ProjectsGalerie 
          // i={console.log(data.allStrapiProject.edges)}
          datas={data.allStrapiProject.edges}
          setSelectedProject={(id) => setSelectedProject(id)}
          // i={console.log(selectedProject)}
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
                fixed(quality: 90, grayscale: false, height: 10) {
                  src
                  srcWebp
                }
              }
              relativeDirectory
            }
          }
          picture {
            childImageSharp {
              fluid(quality: 90, grayscale: false) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
