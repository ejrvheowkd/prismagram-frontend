//모든 state랑 query랑 data hooks를 둘거야
import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { LOG_IN } from "./AuthQueries";
import { useMutation } from "react-apollo-hooks";

//useInput은 나에게 value랑 onChange를 줄거야
export default() => {
    const [action, setAction] = useState("logIn");  
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const [requestSecret] = useMutation(LOG_IN,{variables:{email:email.value}});//mutation은 쿼리가 있어야해
    //만약 내가 text value로 받고 싶으면 email.value어야 =한다.
    const onLogin    =(e) =>{
        e.preventDefault();
        if(email!==""){
            requestSecret();
        }
    };
    return (
        <AuthPresenter 
        setAction={setAction} 
        action={action} 
        username={username}
        firstName={firstName}
        lastName ={lastName}
        email={email}
        onLogin={onLogin}
        />
    )
};

//useState의 첫번째 액션은 로그인