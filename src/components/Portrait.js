import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { mobileThresholdPixels, colors } from '../components/StyledComponents';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const PortraitContener = styled.div`
  width: 50vw;
  height: 100vh;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100vw;
    height: 100vh;
  }
`;

const StyledBackgroundPortrait = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Portrait = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: {eq: "2018-12_Delphine_BRUNET_portrait.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <StyledBackgroundPortrait
      Tag="portrait"
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={colors.green}
    >
      <PortraitContener>
          {!isMobile()
            ? ""
            : (
            <Identity
              firstLine="Delphine Brunet"
              secondLine="Développeuse Javascript React / Node.Js"
            />
            )
          }
      </PortraitContener>
    </StyledBackgroundPortrait>
  );
};

export default Portrait;
