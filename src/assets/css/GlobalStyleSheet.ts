import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  src: url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
}

body {
  font-family: 'Open Sans', sans-serif;
  ${tw`dark:bg-neutral-800 dark:text-white`}
}
body, * {
    ${tw`p-0 m-0`}
    -webkit-tap-highlight-color: transparent;
}
a {
    ${tw`text-inherit`}
  }
`;
