import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useInput from "../../Hooks/useInput";
import {useMutation, useQuery} from "react-apollo-hooks";
import {TOGGLE_LIKE, ADD_COMMENT} from "./PostQueries";
import { toast } from "react-toastify";

const PostContainer = ({
    id,
    user,
    files,
    isLiked,
    likeCount,
    comments,
    createdAt,
    caption,
    location
}) => {
    const [isLikedS, setIsLiked] = useState(isLiked);
    const [likeCountS, setLikeCount] = useState(likeCount);
    const [currentItem, setCurrentItem] = useState(0);
    const [selfComments,setSelfComments] =useState([]);
    const comment = useInput("");
    const [createdAtS,setCreatedAt] = useState(createdAt);
    const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
        variables: {
            postId: id
        }
    });
    const [addCommentMutation] = useMutation(ADD_COMMENT, {
        variables: {
            postId: id,
            text: comment.value
        }
    });
    const Cut =()=>
    {
        setCreatedAt(createdAtS.slice(0,10));
    };
    const slide = () => {
        const totalFiles = files.length;
        if (currentItem === totalFiles - 1) {

            setTimeout(() => setCurrentItem(0), 2000);
        } else {
            setTimeout(() => setCurrentItem(currentItem + 1), 2000);
        }
    };
    useEffect(() => {
        slide();
    }, [currentItem]); //component가 mount되면 slide function이 시작될거야
    useEffect(() => {
        Cut();
      },[]);
    const toggleLike =  () => {
        toggleLikeMutation();
        if (isLikedS === true) {
            setIsLiked(false);
            setLikeCount(likeCountS - 1);
        } else {
            setIsLiked(true);
            setLikeCount(likeCountS + 1);
        }
    };
 

const onKeyPress=  async event=>{
const{which} =event;

if(which===13)
{
    event.preventDefault();
    try{
        const {data:{addComment}}= await addCommentMutation();
        setSelfComments([...selfComments,addComment]);
        comment.setValue("");
    }catch
    {
        toast.error("Can't send comment");
    }
  }
};

return (
    <PostPresenter
        user={user}
        files={files}
        caption={caption}
        location={location}
        likeCount={likeCountS}
        isLiked={isLikedS}
        comments={comments}
        createdAt={createdAtS}
        newComment={comment}
        setIsLiked={setIsLiked}
        setLikeCount={setLikeCount}
        currentItem={currentItem}
        toggleLike={toggleLike}
        onKeyPress={onKeyPress}
        selfComments={selfComments}
        />
);
};
//export default하지 않는 이유는 PostContainer.propTypes해야하기 떄문에

PostContainer.propTypes = {
id: PropTypes.string.isRequired,
user: PropTypes
    .shape(
        {id: PropTypes.string.isRequired, avatar: PropTypes.string, username: PropTypes.string.isRequired}
    )
    .isRequired,
files: PropTypes
    .arrayOf(
        PropTypes.shape({id: PropTypes.string.isRequired, url: PropTypes.string.isRequired}) //files{id,file}은 PropTypes.arrayOf().isRequired로 해서 안에는 두개가 있으므로 PropTypes.shape()
    )
    .isRequired,
isLiked: PropTypes.bool.isRequired,
likeCount: PropTypes.number.isRequired,
comments: PropTypes
    .arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes
            .shape(
                {id: PropTypes.string.isRequired, username: PropTypes.string.isRequired}
            )
            .isRequired
    }))
    .isRequired,
caption: PropTypes.string.isRequired,
location: PropTypes.string,
createdAt: PropTypes.string.isRequired
};

export default PostContainer;
