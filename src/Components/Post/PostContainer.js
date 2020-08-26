import React, {useState} from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useInput from "../../Hooks/useInput";

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
    const [isLikedS,setIsLiked]= useState(isLiked);
    const [likeCountS,setLikeCount] = useState(likeCount);
    const comment = useInput("");
    return (<PostPresenter  
    user = {
        user
    }
    files = {
        files
    }
    caption= {caption}
    location= {location}
    likeCount = {
        likeCountS
    }
    isLiked = {
        isLikedS
    }
    comments = {
        comments
    }
    createdAt = {
       createdAt
    }
    newComment={comment}
    setIsLiked={setIsLiked}
    setLikeCount={setLikeCount}
    />
    );
};
//export default하지 않는 이유는 PostContainer.propTypes해야하기 떄문에

PostContainer.propTypes = {
    id:PropTypes.string.isRequired,
    user:PropTypes.shape({
        id:PropTypes.string.isRequired,
        avatar:PropTypes.string,
        username:PropTypes.string.isRequired
    }).isRequired,
    files:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired
    })//files{id,file}은 PropTypes.arrayOf().isRequired로 해서 안에는 두개가 있으므로 PropTypes.shape()
    ).isRequired,
    isLiked:PropTypes.bool.isRequired,
    likeCount:PropTypes.number.isRequired,
    comments:PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        user:
            PropTypes.shape({
                id:PropTypes.string.isRequired,
                username:PropTypes.string.isRequired
            }).isRequired
    })
    ).isRequired,
    caption:PropTypes.string.isRequired,
    location:PropTypes.string,
    createdAt:PropTypes.string.isRequired
};

export default PostContainer;
