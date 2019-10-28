/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from './StyledComponents';
import { useOnClickOutside } from '../hooks';

import BackgroundImage from 'gatsby-background-image';
import MenuBurger from './MenuBurger';
import MenuList from './MenuList';

import './layout.css';

const Main = styled.main`
  margin: auto;
  justify-content: space-between;
  overflow: hidden;
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

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
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
          <div ref={node}>
            <MenuBurger open={open} setOpen={setOpen}/>
            <MenuList open={open} setOpen={setOpen}/>
          </div>
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
