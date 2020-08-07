import React from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
export default()=>(
  <ThemeProvider theme ={Theme}>
    <>
  <GlobalStyles/>
  <Router isLoggedIn={false}/>
  </>
  </ThemeProvider>
);
//우리는 이버전에서 components를 사용하지 않을꺼야 왜냐하면 react hooks를 사용하는게 낫다

//