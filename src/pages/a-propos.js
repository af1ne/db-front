import React from "react";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import Portrait from '../components/Portrait';

const About = ({ data }) => (
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
          firstLine="A propos "
        />
      </GreenContainer>
      <Portrait/>
    </GlobalContainer>
  </Layout>
);

export default About;
