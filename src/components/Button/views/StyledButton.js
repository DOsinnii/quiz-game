import styled from 'styled-components';

const StyledButton = styled.button`
  max-width: 296px;
  width: 100%;
  padding: 1em 1.2em;
  color: #ffffff;
  background: #ff8b37;
  font-family: Inter, sans-serif;
  font-size: 1em;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: #ffac70;
  }
  &:focus {
    background: #e87928;
  }
`;

export default StyledButton;
