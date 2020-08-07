import React from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
export default()=>(
  <ThemeProvider theme ={Theme}>
  <GlobalStyles/>
  </ThemeProvider>
);
//우리는 이버전에서 components를 사용하지 않을꺼야 왜냐하면 react hooks를 사용하는게 낫다