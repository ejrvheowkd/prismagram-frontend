import {gql} from "apollo-boost";

export const LOG_IN = gql `
    mutation requestSecret($email: String!){
        requestSecret(email:$email)
    }
`;

exprot const CREATE_ACCOUNT = gql `
mutation createAccount(
    $username : String!
    $email:String!
    $firstName : String
    $lastName: String
){
    createAccount(
    username: $username 
    email: $email
    firstName: $firstName
    lastName: $lastNam
    )
}
`;