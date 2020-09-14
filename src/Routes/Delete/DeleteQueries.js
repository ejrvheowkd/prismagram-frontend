import {gql} from "apollo-boost"

export const DELETEPOST = gql`
mutation editPost($id:String!){
    editPost(action:DELETE id:$id)
    {
        id
    }
}
`;