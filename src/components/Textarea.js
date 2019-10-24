import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputContainer } from './Input';

const TextareaContainer = styled(InputContainer)`
  &.merlin-input {
    .input {
      height: 20vh;
    }
  } 
`;

const Textarea = ({
  id,
  label,
  type,
  value,
  onChange,
}) => (
  <TextareaContainer className="merlin-input">
    <textarea
      label={label}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      className={value ? 'input has-content' : 'input'}
    />
    <label
      htmlFor={id}
      className="label"
    >
      {label}
    </label>
  </TextareaContainer>
);

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  id: '',
  label: '',
  type: '',
  value: '',
  onChange() { },
};

export default Textarea;
