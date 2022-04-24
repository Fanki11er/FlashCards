import { createGlobalStyle } from 'styled-components';
import {theme} from './theme';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box ;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html{
    font-size:62.5% ;
    //width: 100% ;
   // min-height: 100vh;
   // height: fit-content;
}
body {
    font-size:1.6rem ;
    margin:0 ;
    padding:0 ;
    //width:100% ;
    //min-height: 100vh ;
    //height: 120vh;

    ::-webkit-scrollbar{
        width: 20px;
        background-color: ${theme.colors.inputBlue};
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${theme.colors.listElementBlue};
        border-radius: 15px;
        border: 1px solid;
    }
    
}`;

export default GlobalStyle;
