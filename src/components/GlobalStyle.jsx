import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.04em;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  
}

Section{
   width: 480px;
   margin: 0 auto;
   background-color: #cdb89d;
}

`