import { createGlobalStyle } from "styled-components";
import { CSSVariables } from "../CSSVariables";
import FigtreeRegular from "./fonts/Figtree-Regular.ttf";
import FigtreeBold from "./fonts/Figtree-Bold.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'FigtreeRegular' ;
  src: local("Figtree Regular"), local('FigtreeRegular'), url(${FigtreeRegular});
}

@font-face {
  font-family: 'FigtreeBold' ;
  src: local('Figtree Bold'), local('FigtreeBold'), url(${FigtreeBold});
}

html {
  font-family: FigtreeRegular;
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 

}
body {
  margin: 0;
  min-height: 100vh;
}
main {
  display: block;
}
h1 {
  color: ${CSSVariables.colors.activeText};
  font-size: 2em;
  margin: 0.67em 0;
}

h2, h3, p {
  color: ${CSSVariables.colors.activeText};
  margin: 0;
}

hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}

ul {
 list-style: none;
}

a {
  background-color: transparent;
  color: ${CSSVariables.colors.activeText};
  text-decoration: none;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}

button {
  border: none;
  cursor: pointer;
  padding: 10px;
}

button,
input,
optgroup,
select,
textarea {
  color: ${CSSVariables.colors.inactiveText};
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}

  `;

export default GlobalStyles;
