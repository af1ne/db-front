import React from "react";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import Portrait from '../components/Portrait';

import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <GlobalContainer>
      <GreenContainer>
        {isMobile()
          ? "" 
          : (
          <Identity />
          )
        }
        <GreenTitle
          firstLine="404"
          secondLine="Perdu !?"
        />
      </GreenContainer>
      <Portrait/>
    </GlobalContainer>
  </Layout>
);

export default NotFoundPage;
