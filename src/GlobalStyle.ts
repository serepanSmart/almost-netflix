import { Colors } from '@/UI';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background: ${Colors.Tuna};
    margin: 0;
    padding: 0;
    overflow: scroll;
  }

  * {
    font-family: 'Montserrat';
    color: ${Colors.White};
  }

  #app {
    min-height: calc(100vh - 17px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1, h2, h3 {
    font-weight: 400;
  }
  
  h3 {
    font-size: 18px;
  }

  img {
    display: block;
    max-width: 100%;
  }
  
  a {
    font-size: 20px;
    color: ${Colors.Scarlet};
    cursor: pointer;
    text-decoration: none;
    * {
    color: ${Colors.Scarlet};
    }
  }
  p {
    font-size: 14px;
  }
  li, label {
    font-size: 1rem;
    font-weight: 500;
    list-style: none;
    list-style-position: inside;
    text-transform: uppercase;
  }
`;

export default GlobalStyle;