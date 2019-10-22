import React from "react";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';

const Portfolio = ({ data }) => (
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
          firstLine="Portfolio "
        />
      </GreenContainer>
    </GlobalContainer>
  </Layout>
);

export default Portfolio;
