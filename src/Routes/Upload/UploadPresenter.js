import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Input from "../../Components/Input";
import { UPLOAD } from "./UploadQueries";
import FatText from "../../Components/FatText";
import Button from "../../Components/Button";
import useInput from "../../Hooks/useInput";
import { withRouter } from "react-router-dom";
import { useMutation, useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";

const Wrapper = styled.div `
${props=>props.theme.whiteBox}
padding-top:30px;
padding-left:30px;
min-height:40vh;
`;

const Section = styled.div`
margin-bottom:50px;
margin-right:40px;
padding-top:60%;
padding-left:80%;
padding-right:30%
width:30%
`;

const UrlInput = styled(Input)`
    background-color:${props => props.theme.lightGreyColor};
    padding:5px;
    font-size:14px;
    border-radius:3px;
    height: auto;
    text-align: center;
    width: 70%;
`;


export default withRouter(({history})=>{
    const urls =useInput("");
    const {data,loading} = useQuery(ME);
    const caption = "sss";
   // console.log(url);
   const [uploadMutation] = useMutation(UPLOAD,{variables:{caption,files:urls.value}});
   const onUploadSubmit = async()=>
   {
    await uploadMutation();
    history.push(`/${data.me.username}`);
   };
   return(  
        <Wrapper>
            <>
        <Helmet><title>Upload | Prismagram</title></Helmet>
        <FatText text="URL 링크 :"/>&nbsp;&nbsp;&nbsp;
        <form>
        <UrlInput  url={urls.value} onChange={urls.onChange} placeholder={"URL"}/>
        <Section>
        <Button text="Upload"  onClick={onUploadSubmit}/>
        </Section>
        </form>
        </>
        </Wrapper>
    );
   
});