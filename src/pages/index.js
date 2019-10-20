import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import { mobileThresholdPixels } from '../components/StyledComponents';
// import Image from "../components/image";
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import Portrait from '../components/Portrait';

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: ${mobileThresholdPixels}) {
    display: flex;
    flex-direction: column;

  }
`;

const GreenContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-top: 10vh;
  padding-bottom: 5vh;
  padding-right: 4em;
  width: 50vw;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100vw;
    padding-top: 3vh;
    padding-bottom: 0;
    padding-left: 1em;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <GlobalContainer>
      <GreenContainer>
        {isMobile()
          ? "" 
          : (
          <Identity
          firstLine="Delphine Brunet"
          secondLine="Développeuse Javascript React / Node.Js"
          />
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