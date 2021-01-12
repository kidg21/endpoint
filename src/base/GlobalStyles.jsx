import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { fonts, fontSize } from "./Variables.jsx";

const GlobalStyles = createGlobalStyle`

    /* Browser resets */
    ${styledNormalize}

    /* Document resets */
    html {
        box-sizing: border-box;
    }
    
    body {
        font-family: ${fonts.body};
        font-size: ${fontSize.base}
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }


    /* Typography resets */
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    p,
    blockquote,
    th,
    td {
      font-family: inherit;
      margin:0;
      padding:0;
    }
    `;

export default GlobalStyles;
