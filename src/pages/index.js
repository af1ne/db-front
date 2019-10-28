import React from "react";
import { graphql } from "gatsby";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import Portrait from '../components/Portrait';
import { FadeIn, FadeInRight } from 'animate-css-styled-components';

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
          pageOrigin="IndexPage"
        />
      </GreenContainer>
      <FadeInRight duration="2s">
        <Portrait/>
      </FadeInRight>
    </GlobalContainer>
  </Layout>
);

export default IndexPage;
