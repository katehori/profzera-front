import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: #202020;
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        min-height: 100vh;
        padding-bottom: 8rem;
        position: relative;
    }
`

export default GlobalStyles;