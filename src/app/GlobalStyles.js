import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

html, body {
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.theme.background};
}

a, a:visited {
  color: #fff;
  text-decoration: none;
}
`;
