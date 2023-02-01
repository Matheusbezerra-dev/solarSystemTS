import { createGlobalStyle } from 'styled-components';
import imgbackgroud from '../image/background';

const GlobalStyled = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, :root {
    min-height: 100%;
  }

  body {
    display: flex;
    /* justify-content: center;
    flex-direction: column; */
    background-image: url(${imgbackgroud});
  }
`;

export default GlobalStyled;
