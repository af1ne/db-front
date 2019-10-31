import React, { useState } from 'react';
import { graphql } from "gatsby";
import styled from 'styled-components';
import {
  colors,
  mobileThresholdPixels,
  GlobalContainer,
  GreenContainer,
  fontSizes,
  ScrollingContainer,
} from '../components/StyledComponents';
import Layout from '../components/layout';
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import CvExperienceCard from '../components/CvExperienceCard';
import More from '../assets/expand_more.svg';

const CVContainer = styled.div`
  background-color: ${colors.blackTransparency};
  width: 34vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-item: center;
  font-family: "Aclonica";
  color: ${colors.green};
  font-size: ${fontSizes.m};


  @media (max-width: ${mobileThresholdPixels}) {
    width: 100vw;
    height: 100vh;
    font-size: ${fontSizes.s};
  }
`;


const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: transform 0.5s ease-in-out;
  background-color: blue;
`;

const UlHiddenNiv1 = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
justify-content: center;

transition: transform 0.5s ease-in-out;
  transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%) scale(1, 0)'};

`;

const UlHiddenNiv2 = styled(Ul)`
  transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
`;

const Li = styled.li`

`;

const MoreRotatif = styled(More)`
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.open ? 'rotate(0deg)' : 'rotate(-90deg)'};
  cursor: pointer;
`;

const Span = styled.span`
  vertical-align: super;
  cursor: pointer;
`;


const CurriculumVitae = ({ data }) => {
  const [openExperiences, setOpenExperiences] = useState(true);
  const [openWebDev, setOpenWebDev] = useState(false);
  const [openAudiovisuel, setOpenAudiovisuel] = useState(false);
  const [openTechno, setOpenTechno] = useState(false);
  const [openEnvironnementTravail, setOpenEnvironnementTravail] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);

  const devFilter = /d[eé]v/;

  return (
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
            firstLine="Curriculum"
            secondLine="vitae"
          />
        </GreenContainer>

        <CVContainer>
          <Ul>
            <Li>
              <MoreRotatif
                open={openExperiences}
                onClick={() => setOpenExperiences(!openExperiences) & setOpenWebDev(false) & setOpenAudiovisuel(false)}
              />
              <Span onClick={() => setOpenExperiences(!openExperiences) & setOpenWebDev(false) & setOpenAudiovisuel(false)}>expériences</Span>

              <UlHiddenNiv1 open={openExperiences}>
                <Li>
                  <MoreRotatif open={openWebDev} onClick={() => setOpenWebDev(!openWebDev) & setOpenAudiovisuel(false)} />
                  <Span onClick={() => setOpenWebDev(!openWebDev) & setOpenAudiovisuel(false)}>développement web</Span>
                  <ScrollingContainer>
                    <UlHiddenNiv2 open={openWebDev}>
                      {data.allStrapiExperience.nodes
                        .filter(experience => experience.job_title.includes(experience.job_title.match(devFilter)))
                        .map(experience =>
                          <Li key={experience.id}>
                            <CvExperienceCard
                              job_title={experience.job_title}
                              start_date={experience.start_date}
                              end_date={experience.end_date}
                              compagnie={experience.compagnie.name}
                              web_site={experience.compagnie.web_site}
                              location={experience.compagnie.location}
                            />
                          </Li>
                        )}
                    </UlHiddenNiv2>
                  </ScrollingContainer>
                </Li>

                <Li>
                  <MoreRotatif open={openAudiovisuel} onClick={() => setOpenAudiovisuel(!openAudiovisuel) & setOpenWebDev(false)} />
                  <Span onClick={() => setOpenAudiovisuel(!openAudiovisuel) & setOpenWebDev(false)}>audiovisuel</Span>
                  <ScrollingContainer>
                    <UlHiddenNiv2 open={openAudiovisuel}>
                      {data.allStrapiExperience.nodes
                        .filter(experience => !experience.job_title.includes(experience.job_title.match(devFilter)))
                        .map(experience =>
                          <Li key={experience.id}>
                            <CvExperienceCard
                              job_title={experience.job_title}
                              start_date={experience.start_date}
                              end_date={experience.end_date}
                              compagnie={experience.compagnie.name}
                              web_site={experience.compagnie.web_site}
                              location={experience.compagnie.location}
                            />
                          </Li>
                        )}
                    </UlHiddenNiv2>
                  </ScrollingContainer>
                </Li>
              </UlHiddenNiv1>

            </Li>
            <Li>
              <MoreRotatif open={openTechno} onClick={() => setOpenTechno(!openTechno)} />
              <Span onClick={() => setOpenTechno(!openTechno)}>mes technologies</Span></Li>
            <Li>
              <MoreRotatif open={openEnvironnementTravail} onClick={() => setOpenEnvironnementTravail(!openEnvironnementTravail)} />
              <Span onClick={() => setOpenEnvironnementTravail(!openEnvironnementTravail)}>environnement de travail</Span></Li>
            <Li>
              <MoreRotatif open={openEducation} onClick={() => setOpenEducation(!openEducation)} />
              <Span onClick={() => setOpenEducation(!openEducation)}>éducation et diplomes</Span></Li>
          </Ul>
        </CVContainer>

      </GlobalContainer>
    </Layout>
  );
};

export default CurriculumVitae;

export const experienceQuery = graphql`
  query cvQuery {
    allStrapiExperience {
      nodes {
        id
        job_title
        start_date(
          formatString: "MMM YYYY"
          locale: "fr-FR"
        )
        end_date(
          formatString: "MMM YYYY"
          locale: "fr-FR"
        )
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
        collaborator1 {
          fonction
          name
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