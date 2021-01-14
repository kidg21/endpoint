import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { colors, fonts, fontSize } from "./Variables.jsx";

const GlobalStyles = createGlobalStyle`

    /* Browser resets */
    ${styledNormalize}

    /* Document resets */
    html {
        box-sizing: border-box;
        background-color: ${colors.grey10};
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

    
    p {
        font-size: 14px;
        line-height: 22px;
    }
    h1 {
        font-size: 1.383em;
    }
    h2 {
        font-size: 1.296em;
    }
    h3 {
        font-size: 1.215em;
    }
    h4 {
        font-size: 1.138em;
    }
    h5 {
        font-size: 1.067em;
    }
    h6 {
        font-size: 16px;
        line-height: 24px;
    }
    `;

export default GlobalStyles;
