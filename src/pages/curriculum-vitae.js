import React from 'react';
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from '../components/layout';
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';

const CurriculumVitae = ({ data }) => (
  <Layout>
    <GlobalContainer>
      <GreenContainer>
        {isMobile()
          ? "" 
          : (
          <Identity/>
          )
        }
        <GreenTitle
          firstLine="Curriculum"
          secondLine="vitae"
        />
      </GreenContainer>

    </GlobalContainer>
  </Layout>
);

export default CurriculumVitae;

export const experienceQuery = graphql`
  query cvQuery {
    allStrapiExperience {
      edges {
        node {
          id
          job_title
        }
      }
    }
  }
`;