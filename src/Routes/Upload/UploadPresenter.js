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
const CaptionInput = styled(Input)`
    background-color:${props=>props.theme.lightGreyColor};
    height: 200px;
    width:500px;
    margin-top:50px;
    margin-left:300px;
`;

export default withRouter(({history})=>{
    const url =useInput("");
    const arr = ['img.youtube.com/vi/','','/hqdefault.jpg'];
    const caption = useInput("");
    const {data,loading} = useQuery(ME);
   const [uploadMutation] = useMutation(UPLOAD,{variables:{caption:caption.value,files:url.value}});
   const onUploadSubmit = async()=>
   {
    arr[1] = url.value.split("=")[1];
    //url.value = arr.join('');
    url.value = arr[0]+arr[1]+arr[2];
    //console.log(url.value)
    await uploadMutation();
    history.push(`/${data.me.username}`);
   };
   return(  
        <Wrapper>
        <>
        <Helmet><title>Upload | Prismagram</title></Helmet>
        <FatText text="URL 링크 :"/>&nbsp;&nbsp;&nbsp;
        <UrlInput  url={url.value} onChange={url.onChange} placeholder={"URL"}/>
        <><CaptionInput placeholder={"영상에 대해서 말해주세요!"} caption={caption.value} onChange={caption.onChange}/></>
        <Section>
        <Button text="Upload"  onClick={onUploadSubmit}/>
        </Section>
        </>
        </Wrapper>
    );
   
});