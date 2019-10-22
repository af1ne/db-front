import React from "react";
import { GlobalContainer, GreenContainer } from '../components/StyledComponents';
import Layout from "../components/layout";
import GreenTitle from '../components/GreenTitle';
import Identity from '../components/Identity';
import isMobile from '../services/isMobile';
import Portrait from '../components/Portrait';
import ContactForm from '../components/ContactForm';
const Contact = ({ data }) => (
  <Layout>
    <GlobalContainer>
      
      <GreenContainer>
        {isMobile()
          ? "" 
          : (
          <Identity contact/>
          )
        }
        <ContactForm />
        <GreenTitle
          firstLine="Keep in touch"
          secondLine="..."
        />
        
      </GreenContainer>
      <Portrait/>
    </GlobalContainer>
  </Layout>
);

export default Contact;
