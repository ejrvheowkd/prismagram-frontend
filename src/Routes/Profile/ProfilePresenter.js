import React, { useState } from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import {useQuery} from "react-apollo-hooks";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import {Helmet} from "react-helmet";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";
import Detail from "../Detail";


const Wrapper = styled.div `
min-height:100vh;
`;
const Header = styled.header `
display:flex;
align-items:center;
justify-content:space-around;
width:60%;
margin:0 auto;
margin-bottom:40px;
`;

const HeaderColumn = styled.div ``;

const UsernameRow = styled.div`
    display:flex;
    align-items:center;
`;

const Username = styled.span`
font-size:26px;
display:block;
`;

const Counts = styled.ul`
display:flex;
margin:15px 0px;
`;

const Count = styled.li`
font-size:16px;
&:not(:last-child) {
    margin-right:10px;
}
`;

const FullName = styled(FatText)`
font-size:16px;
`;

const Bio = styled.p`
    margin: 10px 0px;
`;

const Posts = styled.div`
display:grid;
grid-template-columns:repeat(4,200px);
grid-template-rows:200px;
grid-auto-rows:200px;
`;
export default ({data, loading,logOut,onClick,flag,onChose,urlS,postId}) =>
{
    if (loading===true) 
    {
        return (<Wrapper><Loader/></Wrapper>);
    }
    else if(!loading&&data&&data.seeUser){
        const {
            seeUser: {
                id,
                avatar,
                username,
                fullName,
                isFollowing,
                itSelf,
                bio,
                followingCount,
                followersCount,
                postsCount,
                posts
            }  
        } = data;
        if(flag)
        {
        return (
        <Wrapper>
        <Helmet>
            <title>{username}|Prismagram</title>
        </Helmet>
            <Header>
                <HeaderColumn> 
                    <Avatar size = "lg" url = {avatar} />
                </HeaderColumn>
                <HeaderColumn>
                    <UsernameRow>
                        <Username>
                        {username}</Username>{" "}
                         {itSelf?(<Button onClick={logOut} text="Log Out"/>):(<FollowButton isFollowing={isFollowing} id={id}/>)}
                    </UsernameRow>
                    <Counts>
                        <Count>
                            <FatText text={String(postsCount)}/> posts
                        </Count>
                        <Count>
                            <FatText text={String(followersCount)}/> followers
                        </Count>
                        <Count>
                            <FatText text={String(followingCount)}/> following
                        </Count>
                    </Counts>
                    <FullName text={fullName}/>
                    <Bio>{bio}</Bio>
                </HeaderColumn>
            </Header>
            
            <Posts>
                {posts&&posts.map(post=>(
                     <SquarePost onClick={onClick}
                     onChose ={onChose}
                     key={post.id}
                     id={post.id}
                     likeCount={post.likeCount}
                     commentCount={post.commentCount}
                     file={post.files[0]}/>
                ))}
            </Posts>
         </Wrapper>
      );
      }else
      {
        return <Detail onClick={onClick} url={urlS} posts={posts} avatar={avatar} username={username} postId={postId}></Detail>
      }
    }
    return null;
};