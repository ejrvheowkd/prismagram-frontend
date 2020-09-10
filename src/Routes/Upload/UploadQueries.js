import {gql} from "apollo-boost";

export const UPLOAD = gql`
mutation upload($caption:String! , $files:[String!]!){
    upload(caption:$caption,files:$files)
    {
        user{
            username
        }
    }
}
`;