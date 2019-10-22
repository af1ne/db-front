/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from './StyledComponents';


import BackgroundImage from 'gatsby-background-image';
import MenuList from './MenuList';

import "./layout.css";

const Main = styled.main`
  margin: auto;
  justify-content: space-between;
  height: 100vh;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${mobileThresholdPixels}) {
    height: auto;
  }
`;

const Nav = styled.nav`
  position: fixed;
  z-index: 2;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: {eq: "feuillage.png"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Main>
        <StyledBackgroundImage
            Tag="section"
            fluid={data.desktop.childImageSharp.fluid}
            backgroundColor={colors.green}
          >
          <Nav>
            <MenuList />
          </Nav>
          {children}
        </StyledBackgroundImage>
      </Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
