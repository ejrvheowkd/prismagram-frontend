//loading중인 무언가가 있을때 원하는 곳 어디든 넣을 수 있는 lodaer가 될거야
//loading 중 애니메이션
import React from "react";
import styled, {keyframes} from "styled-components";
import {Logo} from "./Icons";

const Animation = keyframes`
0%{
    opacity:0
}
50%{
    opacity:1
}
100%{
    opacity:0;
}
`;
const Loader= styled.div`
    animation: ${Animation} 1s linear infinite;
`;

export default () =>(
   <Loader>
       <Logo size={48}/>
   </Loader>  
);