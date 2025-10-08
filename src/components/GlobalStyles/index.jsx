import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    * {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;

        
        @media (max-width: 768px) {
            font-size: 14px;
        }
        
        @media (max-width: 480px) {
            font-size: 12px;
        }
    }

    body {
        -webkit-text-size-adjust: 100%;
        line-height: 1.6;
        min-height: 100dvh;
        min-height: 100vh;
        overflow-x: hidden;
        padding-bottom: 8rem;
        position: relative;
        text-size-adjust: 100%;

        @media (max-width: 768px) {
            padding-bottom: 6rem;
        }
        
        @media (max-width: 480px) {
            padding-bottom: 4rem;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.3;
    }

    p {
        line-height: 1.6;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    a,
    button {
        touch-action: manipulation;
        
        @media (max-width: 768px) {
            cursor: pointer;
        }
    }

    button {
        min-height: 44px;
        min-width: 44px;
    }

    input, 
    textarea, 
    select {
        font-size: 16px; /* Previne zoom em iOS */
        
        @media (max-width: 768px) {
            font-size: 16px; /* Mantém legível em mobile */
        }
    }

    @supports(padding: max(0px)) {
        body {
            padding-left: min(0vmin, env(safe-area-inset-left));
            padding-right: min(0vmin, env(safe-area-inset-right));
            padding-top: min(0vmin, env(safe-area-inset-top));
        }
    }
`

export default GlobalStyles;