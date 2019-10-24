import React, { Component } from 'react';
import styled from 'styled-components';
import { mobileThresholdPixels } from './StyledComponents';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin: auto;
  align-items: center;
  padding-bottom: 3vh;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 85vw;
  }
`;

export default class ContactForm extends Component {
  state = {
    name: "",
    mail: "",
    phone: "",
    message: "",
  }

  setInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log("envoyer le form");
  }

  render() {
    console.log(this.state);
    const { name, mail, phone, message } = this.state;
    return (
      <Form onSubmit={this.submitForm}>

          <Input
            label="Nom *"
            type="text"
            id="name"
            value={name}
            onChange={this.setInput}
            required
          />

          <Input
            label="Mail *"
            type="mail"
            id="mail"
            value={mail}
            onChange={this.setInput}
            required
          />

          <Input
            label="Téléphone"
            type="text"
            id="phone"
            value={phone}
            onChange={this.setInput}
          />

          <Textarea
            label="Message *"
            type="text"
            id="message"
            value={message}
            onChange={this.setInput}
            required
          />
        <Button type="submit" label="Envoyer" />

      </Form>
    );
  }
}
