import React from "react";
import { graphql } from "gatsby";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import Portrait from '../components/Portrait';

const IndexPage = ({ data }) => (
  <Layout>
    <GlobalContainer>
      <GreenContainer>
        {isMobile()
          ? "" 
          : (
          <Identity />
          )
        }
        <GreenTitle
          firstLine="Ecologeek "
          secondLine="par nature"
        />
      </GreenContainer>
      <Portrait/>
    </GlobalContainer>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiSection {
      edges {
        node {
          id
          title
          subtitle
          content
          picture {
            id
          }
          menu
        }
      }
    }
  }
`;