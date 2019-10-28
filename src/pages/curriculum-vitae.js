import React from 'react';
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from '../components/layout';
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';

const CurriculumVitae = ({ data }) => (
  <Layout>
    <GlobalContainer i={console.log(data)}>
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
      nodes {
        id
        job_title
        start_date(locale: "fr-FR")
        end_date(locale: "fr-FR")
        description
        compagnie {
          id
          name
          web_site
          location
          logo {
            id
            url
          }
        }
        collaborator {
          id
        }
      }
    }
    allStrapiDiploma {
      nodes {
        id
        title
        Option
        certification_date(locale: "fr-FR")
        organisme {
          id
          location
          name
        }
      }
    }
  }
`;