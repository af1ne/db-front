import React from "react";
import { Link } from "gatsby";
// import styled from 'styled-components';
import { Title1 } from '../components/StyledComponents';
import Layout from "../components/layout";
import SEO from "../components/seo";

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio Delphine Brunet, développeuse web et webmobile Javascript" />
    <Title1>Portfolio</Title1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Portfolio;
