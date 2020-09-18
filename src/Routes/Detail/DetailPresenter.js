import React from "react";
import TextareaAutosize from "react-autosize-textarea/lib";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";


const Wrapper=styled.div`
display:grid;
grid-template-columns:repeat(2,500px);
min-height:100vh;
min-width:100vh;
`;
const Images=styled.div`
width: 500px;
height: 50vh;
opacity:1;
background-image:url(${props=>props.url});
background-size: 500px 50vh;
`;
const Comments=styled.div`
display:grid;
grid-template-rows:100px 370px 80px;
width: 500px;
height: 50vh;

`;
const Comment=styled.div`
margin-top:15px;
`;
const Info=styled.div`
display:grid;
grid-template-columns:70px 230px 200px;
padding-top:20px;
padding-left:20px;
background-image:${props=>props.theme.whiteBox};`;

const Text=styled.div`
padding-top:14px;
font-size:20px;
`;
const Textarea=styled.div`
margin-top:5px;
background-image:${props=>props.theme.whiteBox};
`;
const Span =styled.div`
margin-left:150px;
margin-top:0px;
`;
const AddComment=styled(TextareaAutosize)`
margin-top:10px;
border:none;
width:100%;
resize:none;
font-size:13px;
&:focus{
    outline:none
}
`;
const Detail =({postId,url,onClick,posts,avatar,username,del,onKeyPress,newComment,setSelfComments})=>{
console.log(setSelfComments);
    return (
        <Wrapper>
        <Images onClick={onClick} url={url}>
        </Images>
        <Comments url={url}>
            <Info>
                <Avatar size="md" url={avatar}/>
                <Text>
                    <FatText text={username}/>
                </Text>
                <Span>
                    <button onClick={del}>삭제</button>
                </Span>
            </Info>
            <Textarea>
                {posts.map(
                    post=>(post.id===postId&&post.commentCount!==0&&post.comments.map(
                        texts=>(<Comment><FatText text={texts.user.username+" : "+texts.text}/></Comment>))))}
              {setSelfComments.map(
                texts=>(<Comment><FatText text={texts.user.username+" : " +texts.text}/></Comment>))}
            </Textarea>
          
        <AddComment value ={newComment.value} onChange={newComment.onChange} onKeyPress={onKeyPress} placeholder={"Add a Comment..."}/>
        </Comments>

        </Wrapper>
    )
};
export default Detail;