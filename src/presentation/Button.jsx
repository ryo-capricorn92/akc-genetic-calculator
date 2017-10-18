import styled from 'styled-components';

const Button = styled.button.attrs({ type: 'button' }).withConfig({
  displayName: 'Button',
})`
  background-color: #563F7A;
  border: none;
  border-radius: 0;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  padding: 10px;
  text-transform: uppercase;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
