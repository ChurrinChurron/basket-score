import { createGlobalStyle } from "styled-components";
import Cursed from "./../fonts/CursedTimerUlil-Aznm.ttf"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }  

  @font-face {
      font-family: "Cursed";
      src: url(${Cursed})
    }

    body {
      display: grid;
      margin: 3em 0;
      place-content: center;
      background: #1b244a;
    }

    span, button {
      font-family: "Cursed";
    }

    @media screen and (width >= 500px) {
      body {
        height: 100dvh;
        margin: 0;
      }
    }
  `;

  export default GlobalStyle;