import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box; 
    -webkit-font-smoothing: antialiased;

    
  }

 
  body{
    background: ${(props) => props.theme["blue-300"]};
 


    font-family: 'Poppins', sans-serif;

  }

  


`
