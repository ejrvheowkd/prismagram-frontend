import React from "react";
import styled from "styled-components";
import {Link,withRouter} from "react-router-dom";
import Input from "./Input";
import {gql} from"apollo-boost";
import useInput from "../Hooks/useInput";
import {useQuery} from "react-apollo-hooks";
import { HeartEmpty, Cat, Compass,Logo } from "./Icons";
const Header = styled.header`
    width:100%;
    border:0;
    position:fixed;
    top:0;
    left:0;
    background-color:white;
    border-bottom: ${props => props.theme.boxBorder};
    border-radius:0px;
    display : flex;
    justify-content:center;
    align-items:center;
    padding:25px 0px;
`;

const HeaderWrapper = styled.div `
    width:100%;
    max-width:${props => props.theme.maxWidth};
    display:flex;
    justify-content:center;
`;

const HeaderColumn = styled.div `
width:33%;
text-align:center;
    &:first-child{
        margin-right:auto;
        text-align:left;
    }
    &:last-child{
        margin-left:auto;
        text-align:right;
    }
`;

const SearchInput = styled(Input)`
    background-color:${props => props.theme.bgColor};
    padding:5px;
    font-size:14px;
    border-radius:3px;
    height: auto;
    text-align: center;
    width: 70%;
    &::placeholder{
        opacity:0.8;
        font-weight:200;
    }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px; 
  }
`;

const ME = gql `
 { me{
      user{
          username
      }
  }
}
`;
export default withRouter(({history}) => {
    const search = useInput("");
    const meQuery = useQuery(ME);
    console.log(meQuery);
    const onSearchSubmit = (e) =>
    {
        e.preventDefault();
        history.push(`/search?term=${search.value}`);//이 hook은 search를 준다는 것과 이거는 onChange와 value를 준다는 것을 기억해야해
    };
    return (
    <Header>
        <HeaderWrapper>
            <HeaderColumn>
                <Link to="/">
                    <Logo />
                    </Link>
            </HeaderColumn>
            <HeaderColumn>
                <form onSubmit={onSearchSubmit}>
                <SearchInput {...search} placeholder="Search"/>
                </form>
            </HeaderColumn>
            <HeaderColumn>
                <HeaderLink to="/explore">
                <Compass/>
                </HeaderLink>
                <HeaderLink to="/notifications">
                <HeartEmpty/>
                </HeaderLink>
                <HeaderLink to="/username">
                <Cat/>
                </HeaderLink>
            </HeaderColumn>
        </HeaderWrapper>
    </Header>
    );
});
