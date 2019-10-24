import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from './StyledComponents';

export const InputContainer = styled.div`
  &.merlin-input {
    width: 25vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: left;
    margin: 1.4vh;
    background-color: none;

    @media (max-width: ${mobileThresholdPixels}) {
      width: 65vw;
    }

    .input,
    .label {
      transition: all 0.16s ease-out;
      font-family: sans-serif;
      font-weight: 300;
      font-size: 1em;
      background-color: ${colors.whiteTransparency};
    }

    .input {
      width: 100%;
      border: 1px #ddd solid;
      border-radius: 0.2em;
      padding-top: 0.1em;
      padding-left: 0.62em;
      height: 3.7vh;

    }

    .label {
      pointer-events: none;
      position: absolute;
      color: ${colors.white};
      left: 0;
      transform: translate(0.8em, 0.4em);
      transform-origin: left;
      background-color: inherit;
    }

    .input.has-content + .label {
      color: ${colors.white};
      margin-top: -1.4vw;
    }

    .input.has-content,
    .input:focus {
      & + label {
        transform: translate(0.7em, 0.3em) scale(0.80);
      }
    }

    .input:focus {
      border-color: ${colors.green};
      outline: none;


      & + .label {
        color: ${colors.white};
      }
    }
  }
`;

const Input = ({
  id,
  label,
  type,
  value,
  onChange,
}) => (
  <InputContainer className="merlin-input">
    <input
      label={label}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      className={value ? 'input has-content' : 'input'}
    />
    <label
      className="label"
      htmlFor={id}
    >
      {label}
    </label>
  </InputContainer>
);

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: '',
  label: '',
  type: '',
  value: '',
  onChange() {},
};

export default Input;
