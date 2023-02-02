import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../image/backgroud.png';

const background: string = `url(${backgroundImage})`;

const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  /* html, body, :root {
    min-height: 100%;
  } */

  body {    
    background-image: ${background};
  }
`;

export default GlobalStyle;
