import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { ADD_COMMENT } from "../../Components/Post/PostQueries";
import useInput from "../../Hooks/useInput";
import { DELETEPOST } from "../Delete/DeleteQueries";
import DetailPresenter from "./DetailPresenter";

export default ({postId,url,onClick,posts,avatar,username})=>{
const [delMutation] = useMutation(DELETEPOST,{variables:{id:postId}});

const del =()=> {
       delMutation();
       window.location.reload(true);
}

const comment = useInput("");
const [selfComments,setSelfComments] =useState([]);

const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: {
        postId: postId,
        text: comment.value
    }
});
const onKeyPress=  async event=>{
    const{which} =event;
    
    if(which===13)
    {
        event.preventDefault();
        try{
            const {data:{addComment}}=await addCommentMutation();
            setSelfComments([...selfComments,addComment]);
            comment.setValue("");
        }catch
        {
            toast.error("Can't send comment");
        }
      }
    };
return (<DetailPresenter postId ={postId}
url ={url}
onClick ={onClick}
posts ={posts}
avatar ={avatar}
username ={username}
del={del}
onKeyPress={onKeyPress}
newComment={comment}
setSelfComments={selfComments}
/>)
}