import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: Inter, sans-serif;
    font-size: 20px;
  }
`;

export default GlobalStyle;
