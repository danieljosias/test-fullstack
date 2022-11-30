import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Poppins', sans-serif;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
}

::-webkit-scrollbar {
  width: 20px;
  background-color: var(--grey-3);
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px var(--green);
}
::-webkit-scrollbar-thumb {
  background: var(--green);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--green);
}
.toastify-color-progress-success {
  background-color: var(--green);
  color: var(--white);
  font-size: 1rem;
}
.toastify-color-progress-error {
  background-color: var(--red);
  color: var(--white);
  font-size: 1rem;
}
.Toastify__progress-bar-theme--light {
  background: var(--grey-2);
}
:root{
  --white: #FFFFFF;
  --black: #000000;
  --grey-1: #cecece;
  --grey-2: #1E1E1E;
  --blue: #0F64F7;
}
`