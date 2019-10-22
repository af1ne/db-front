import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../components/StyledComponents';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin: auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-bottom: 1vh;
  color: ${colors.green}
`;

export default class ContactForm extends Component {
  state = {
    name: "",
    mail: "",
    phone: "",
    message: "",
  }

  setInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    const { name, mail, phone, message } = this.state;
    return (
      <Form>
        <Label>
          Nom
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.setInput}
          />
        </Label>
        <Label>
          Mail
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={this.setInput}
          />
        </Label>
        <Label>
          Téléphone
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.setInput}
          />
        </Label>
        <Label>
          Message
          <input
            type="text"
            name="message"
            value={message}
            onChange={this.setInput}
          />
        </Label>
        <button type="submit">Envoyer</button>
      </Form>
    );
  }
}
