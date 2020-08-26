import React from "react";
import styled from "styled-components";
import {gql} from "apollo-boost";
import {useQuery} from "react-apollo-hooks";
import Loader from "../Components/Loader";

const FEED_QUERY = gql `
{
    seeFeed
    {
        id
        location
        caption
        user
        {
            id
            avatar
            username
        }
        files
        {
          id
          url  
        }
        likeCount
        isLiked
        comments
        {
            id
            text
            user
            {
                id
                username
            }
        }
        createdAt
    }
}
`;
const Wrapper = styled.div `
display: flex;
flex-direction: column;
align-items: center;
min-height:80vh;
`; 
/*display: flex;
flex-direction: column;
align-items: center;*///전부 가운데 정렬하려고 그리고 min-height:80vh;는 footer아래로

export default() => {
    const {data, loading} = useQuery(FEED_QUERY);
    return <Wrapper>
        {loading && <Loader/>}
    </Wrapper>;
}
;