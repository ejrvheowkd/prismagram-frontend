import React from "react";
import {gql} from "apollo-boost"; //gql===graphql
import styled, {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import {useQuery} from "react-apollo-hooks";
import Footer from "./Footer";

const QUERY = gql `
{
  isLoggedIn @client
}
`;
const Wrapper = styled.div `
margin: 0 auto;
max-width: 935px;
width: 100%;
`;
//@client가 react apollo 없으면 쿼리를 API로 보내려고 한다
export default() => {

    const {data: {
            isLoggedIn
        }} = useQuery(QUERY);
    return (
        <ThemeProvider theme={Theme}>
            <Wrapper>
                <GlobalStyles/>
                <Router isLoggedIn={isLoggedIn}/>
                <Footer/>
            </Wrapper>
        </ThemeProvider>
    );
};
//이게 react-apollo-hooks를 이용해서 query를 수행하는 데 필ㄹ요한 코드