import React from "react";
import { useMutation } from "react-apollo-hooks";
import styled from "styled-components";
import { DELETEPOST } from "./Delete/DeleteQueries";
const Wrapper=styled.div`
width: 45vw;
height: 50vh;
opacity:1;
;
`;
const Images=styled.div`
width: 45vw;
height: 50vh;
opacity:1;
background-image:url(https://img.youtube.com/vi/-2dgpm4nIg0/hqdefault.jpg)
`;
const Detail =({id,url,onClick})=>{
const [delMutation] = useMutation(DELETEPOST,{variables:{id}});
const del =()=>
{
   // console.log(id);
    delMutation();
}
    return (<Wrapper>
        <Images onClick={onClick}>
<button onClick={del}>삭제</button>
</Images>
    </Wrapper>)
};
export default Detail;