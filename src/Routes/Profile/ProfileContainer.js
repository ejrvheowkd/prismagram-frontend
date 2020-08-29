import React from "react";
import {gql} from "apollo-boost";
import ProfilePresenter from "./ProfilePresenter";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
const GET_USER = gql `
    query seeUser($username: String!){
        seeUser(username:$username){
            id
            avatar
            username
            fullName
            isFollowing
            itSelf
            bio
            followingCount
            followersCount
            postsCount
            posts{
                id
                files {
                    url
                  }
                  likeCount
                  commentCount
            }
            
        }
    }
`;

export default withRouter(({
    match: {
        params: {
            username
        }
    }
}) => {
    const {data, loading} = useQuery(GET_USER, {variables: {
            username
        }});
        return <ProfilePresenter loading={loading} data={data}/>;
    });