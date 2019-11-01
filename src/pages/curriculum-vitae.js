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
  P,
} from '../components/StyledComponents';
import Layout from '../components/layout';
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import CvCard from '../components/CvCard';
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
    overflow: scroll;
  }
`;


const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 1s ease-in-out;
  height: ${props => props.open ? 'auto' : '0vh'};
  max-height: 50vh;

  @media (max-width: ${mobileThresholdPixels}) {
    
  }
`;

const UlHidden = styled(Ul)`
  transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
`;

const Li = styled.li`

`;

const MoreRotatif = styled(More)`
  transition: transform 0.8s ease-in-out;
  transform: ${props => props.open ? 'rotate(0deg)' : 'rotate(-90deg)'};
  cursor: pointer;
`;

const Span = styled.span`
  vertical-align: super;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${colors.purple};
  } 
`;

const CurriculumVitae = ({ data }) => {
  const [openExperiences, setOpenExperiences] = useState(true);
  const [openWebDev, setOpenWebDev] = useState(false);
  const [openAudiovisuel, setOpenAudiovisuel] = useState(false);
  const [openTechno, setOpenTechno] = useState(false);
  const [openEnvironnementTravail, setOpenEnvironnementTravail] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
          {selectedItem && !isMobile() &&
            <P>TODO</P>
          }
          <GreenTitle
            firstLine="Curriculum"
            secondLine="vitae"
          />
        </GreenContainer>
{/* ************** */}
        <CVContainer>
          <Ul>
            <Li>
              <MoreRotatif
                open={openExperiences}
                onClick={() => setOpenExperiences(!openExperiences) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenEducation(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}
              />
              <Span 
                onClick={() => setOpenExperiences(!openExperiences) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenEducation(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}
              >
                expériences
              </Span>

              {openExperiences && <UlHidden open={openExperiences}>
                <Li>
                  <MoreRotatif
                    open={openWebDev}
                    onClick={() => setOpenWebDev(!openWebDev) & setOpenAudiovisuel(false) & setOpenEducation(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}
                  />
                  <Span
                    onClick={() => setOpenWebDev(!openWebDev) & setOpenAudiovisuel(false) & setOpenEducation(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}
                  >
                    développement web
                  </Span>
                  <ScrollingContainer open={openWebDev && openExperiences}>
                    <UlHidden open={openWebDev}>
                      {data.allStrapiExperience.nodes
                        .filter(experience => experience.job_title.includes(experience.job_title.match(devFilter)))
                        .map(experience =>
                          <Li key={experience.id} onClick={() => setSelectedItem(experience.id)}>
                            <CvCard
                              title={experience.job_title}
                              start_date={experience.start_date}
                              end_date={experience.end_date}
                              compagnie={experience.compagnie.name}
                              web_site={experience.compagnie.web_site}
                              location={experience.compagnie.location}
                            />
                          </Li>
                        )}
                    </UlHidden>
                  </ScrollingContainer>
                </Li>

                <Li>
                  <MoreRotatif
                    open={openAudiovisuel}
                    onClick={() => setOpenAudiovisuel(!openAudiovisuel) & setOpenWebDev(false) & setOpenEducation(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}
                  />
                  <Span
                    onClick={() => setOpenAudiovisuel(!openAudiovisuel) & setOpenWebDev(false) & setOpenEducation(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}
                  >
                    audiovisuel
                  </Span>
                  <ScrollingContainer>
                    <UlHidden open={openAudiovisuel && openExperiences}>
                      {data.allStrapiExperience.nodes
                        .filter(experience => !experience.job_title.includes(experience.job_title.match(devFilter)))
                        .map(experience =>
                          <Li key={experience.id} onClick={() => setSelectedItem(experience.id)}>
                            <CvCard
                              title={experience.job_title}
                              start_date={experience.start_date}
                              end_date={experience.end_date}
                              compagnie={experience.compagnie.name}
                              web_site={experience.compagnie.web_site}
                              location={experience.compagnie.location}
                            />
                          </Li>
                        )}
                    </UlHidden>
                  </ScrollingContainer>
                </Li>
              </UlHidden>
              }
            </Li>
{/* ************** */}
            <Li>
              <MoreRotatif
                open={openTechno}
                onClick={() => setOpenTechno(!openTechno) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenEducation(false) & setOpenEnvironnementTravail(false)}
              />
              <Span
                onClick={() => setOpenTechno(!openTechno) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenEducation(false) & setOpenEnvironnementTravail(false)}
              >
                mes technologies
              </Span>
              <ScrollingContainer open={openTechno}>
                <UlHidden open={openTechno}>
                  {data.allStrapiTechno.nodes.map(techno =>
                  <Li key={techno.id}>
                    <P>{techno.name}</P>
                  </Li>
                  )}
                </UlHidden>
              </ScrollingContainer>
            </Li>
{/* ************** */}
            <Li>
              <MoreRotatif
                open={openEnvironnementTravail}
                onClick={() => setOpenEnvironnementTravail(!openEnvironnementTravail) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenTechno(false) & setOpenEducation(false)}
              />
              <Span
                onClick={() => setOpenEnvironnementTravail(!openEnvironnementTravail) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenTechno(false) & setOpenEducation(false)}
              >
                environnement de travail
              </Span>
              <ScrollingContainer open={openEnvironnementTravail}>
                  <UlHidden open={openEnvironnementTravail} >
                    <Li><P>Linux</P></Li>
                    <Li><P>Windows</P></Li>
                    <Li><P>Visual Studio Code</P></Li>
                    <Li><P>Git</P></Li>
                    <Li><P>Github</P></Li>
                    <Li><P>Google suite</P></Li>
                    <Li><P>Slack</P></Li>
                    <Li><P>Trello</P></Li>
                    <Li><P>Agile - scrum</P></Li>
                    <Li><P>Adobe XD</P></Li>
                    <Li><P>TDD</P></Li>
                </UlHidden>
              </ScrollingContainer>
            </Li>
{/* ************** */}
            <Li>
              <MoreRotatif
                open={openEducation}
                onClick={() => setOpenEducation(!openEducation) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}
              />
              <Span onClick={() => setOpenEducation(!openEducation) & setOpenWebDev(false) & setOpenAudiovisuel(false) & setOpenTechno(false) & setOpenEnvironnementTravail(false)}>
                éducation et diplomes
              </Span>
              <ScrollingContainer open={openEducation}>
                <UlHidden open={openEducation}>
                  {data.allStrapiDiploma.nodes.map(diploma =>
                    <Li key={diploma.id} onClick={() => setSelectedItem(diploma.id)}>
                      <CvCard
                        title={diploma.title}
                        end_date={diploma.certification_date}
                        compagnie={diploma.organisme.name}
                        web_site={diploma.organisme.web_site}
                        location={diploma.organisme.location}
                      />
                    </Li>
                  )}
                </UlHidden>
              </ScrollingContainer>
            </Li>
          </Ul>
        </CVContainer>

      </GlobalContainer>
    </Layout>
  );
};

export default CurriculumVitae;

export const experienceQuery = graphql`
  query cvQuery {
    allStrapiExperience(sort: {order: DESC, fields: end_date}) {
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
    allStrapiDiploma(sort: {order: DESC, fields: certification_date}) {
      nodes {
        id
        title
        certification_date(
          formatString: "MMM YYYY"
          locale: "fr-FR"
        )
        organisme {
          id
          location
          name
        }
      }
    }
    allStrapiTechno(sort: {order: ASC, fields: name}) {
      nodes {
        id
        name
        logo {
          childImageSharp {
            fixed(quality: 90, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;