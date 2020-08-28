import React, { useState } from "react";
import PropTypes from "prop-types";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import { useMutation } from "react-apollo-hooks";
import FollowButtonPresenter from "./FollowButtonPresenter";

//state에 업데이트하면 기다리는거보다 더 빠르게 업데이트 할 수 있다.
const FollowButtonContainer=({isFollowing,id}) =>{
    const [isFollowingS,setIsFollowing] = useState(isFollowing);
    const [followMutation] = useMutation(FOLLOW,{variables:{id}});
    const [unfollowMutation] = useMutation(UNFOLLOW,{variables:{id}});


    const onClick = () =>{
        if(isFollowingS===true)
        {
            setIsFollowing(false);
            unfollowMutation();

        }
        else
        {
            setIsFollowing(true);
            followMutation();
        }
    };
    return <FollowButtonPresenter onClick={onClick} isFollowing={isFollowingS}/>;
};
FollowButtonContainer.propTypes ={
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default FollowButtonContainer;


