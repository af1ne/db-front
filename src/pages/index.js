import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import { Title1, Title2 } from '../components/StyledComponents';
import Image from "../components/image";
import Layout from "../components/layout";

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-top: 10vh;
  padding-bottom: 5vh;
  padding-right: 4em;
  width: 50vw;
`;

const RightContener = styled.div`
  width: 50vw;
`;


const IndexPage = ({ data }) => (
  <Layout>
    <GlobalContainer>
      <LeftContainer>
        <Title1>
          Delphine Brunet <br/>
          Développeuse Javascript React / Node.Js
        </Title1>
        <Title2>Ecologeek <br/> par nature</Title2>
      </LeftContainer>
      <RightContener>
        <Image/>
      </RightContener>
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