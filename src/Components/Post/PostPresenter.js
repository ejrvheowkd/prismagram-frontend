import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment } from "../Icons";

const Post = styled.div `
${props => props.theme.whiteBox};
width:100%;
max-width:600px;
margin-bottom:25px;
`;

const Header = styled.header `
padding: 15px;
display: flex;
align-items;: center;
`;

const UseColumn = styled.div `
margin-left:10px;
`;

const Location = styled.span `
    display:block;
    margin-top:5px;
    font-size:12px;
`;

const Files = styled.div ``;

const File = styled.img `
max-width:100%
`;
const Button = styled.span`
cursor:pointer;
`;

const Meta = styled.div`
padding:15px;

`;

const Buttons = styled.div`
${Button}{
    &:first-child{
        margin-right:10px;
    }
}`;
const Timestamp = styled.span`
font-weight:400;
text-transform:uppercase;
opacity:0.5;
display:block;
font-siez:12px;
margin:10px 0px;
padding-bottom:10px;
board-bottom: ${props=>props.theme.lightGreyColor} 1px solid
`;

export default({
    user: {
        username,
        avatar
    },
    location,
    files,isLiked,likeCount,createdAt
}) => (
    <Post>
        <Header>
            <Avatar size="sm" url={avatar}/>
            <UseColumn>
                <FatText text={username + " "}/>
                <Location>{location}</Location>
            </UseColumn>
        </Header>
        <Files>
            {
                files && files.map(file =><File id = {
                    file.id
                }
                src = {
                    file.url
                } />)
            }
        </Files>
        <Meta>
        <Buttons>
        <Button>
            {isLiked?<HeartFull/>:<HeartEmpty/>}
            </Button>
            <Button><Comment /></Button>
            </Buttons>
            <FatText text={likeCount === 1?"1 like":`${likeCount} like`}/>
            <Timestamp>{createdAt}</Timestamp>
            </Meta> 
    </Post>
);