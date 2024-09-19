import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1 {
        color: rgb(15, 110, 110);
        text-shadow: 6px 4px 6px rgba(0, 0, 0, 0.42);
    }

    h2 {
        color: rgb(11, 104, 211);
    }

    h3 {
        color: rgb(22, 128, 214);
        font-size: 1.3em;
    }

    h4 {
        color: rgb(106, 15, 253);
    }

    a {
        text-decoration: none;
        color: black;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;