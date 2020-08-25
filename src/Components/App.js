import React from "react";
import {gql} from "apollo-boost"; //gql===graphql
import styled, {ThemeProvider} from "styled-components";
import {HashRouter as Router} from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import {useQuery} from "react-apollo-hooks";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import Header from "./Header";

const QUERY = gql `
{
  isLoggedIn @client
}
`;
const Wrapper = styled.div `
margin: 0 auto;
max-width: ${props => props.theme.maxWidth};
width: 100%;
`;
//@client가 react apollo 없으면 쿼리를 API로 보내려고 한다
export default() => {

    const {data: {
            isLoggedIn
        }} = useQuery(QUERY);
    return (
        <ThemeProvider theme={Theme}>
            <>
            <GlobalStyles/>
            <Router>
                <>
                <Header/>
            <Wrapper>
                <Routes isLoggedIn={isLoggedIn}/>
                <Footer/>
            </Wrapper>
            </>
            </Router>
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
            </>
        </ThemeProvider>
    );
};
//이게 react-apollo-hooks를 이용해서 query를 수행하는 데 필ㄹ요한 코드