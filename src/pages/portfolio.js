import React from "react";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';

const Portfolio = ({ data }) => (
  <Layout>
    <GlobalContainer i={console.log('portfolio', data)}>
      <GreenContainer>
        {isMobile()
          ? "" 
          : (
          <Identity />
          )
        }
        <GreenTitle
          firstLine="Portfolio "
        />
        
      </GreenContainer>
    </GlobalContainer>
  </Layout>
);

export default Portfolio;

export const projectQuery = graphql`
  query PortfolioQuery {
    allStrapiProject {
      edges {
        next {
          id
          title
          subtitle
          date
          description
          link
          picture {
            childImageSharp {
              fixed(height: 10, grayscale: false) {
                src
                srcWebp
              }
            }
          }
          technos {
            id
            name
            logo {
              childImageSharp {
                fixed(height: 10) {
                  src
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
