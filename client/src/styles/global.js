import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
  border: none;
}

li{
  list-style: none;
}

.link{
  text-decoration: none;
  color: var(--blue);
  font-weight: bold;
}

::-webkit-scrollbar {
  display: none;
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
  --grey-2: rgba(0,0,0,.1);
  --blue: #0F64F7;
}
`