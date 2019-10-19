import { Link } from "gatsby";
import PropTypes from "prop-types";
// import styled from 'styled-components';
// import { Title1, Title2 } from './StyledComponents';
import React from "react";

// import BurgerMenu from "./BurgerMenu";


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `red`,
    }}
  >
        <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    
      
    
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
