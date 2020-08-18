//모든 state랑 query랑 data hooks를 둘거야
import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { LOG_IN } from "./AuthQueries";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

//useInput은 나에게 value랑 onChange를 줄거야
export default() => {
    const [action, setAction] = useState("logIn");  
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("www@w");
    const [requestSecret] = useMutation(LOG_IN,
        {
        update:(_,{data})=>{//update가 발생하면 result를 얻는다 update는 mutation이 발생하면 실행되는 함수얌
            const {requestSecret} =data;
            if(!requestSecret){
                toast.error("계정이 없습니다.");
                setTimeout(()=> setAction("signUp"),3000);
            }
    }, 
    variables:{email:email.value}
    }
        );//mutation은 쿼리가 있어야해
    //만약 내가 text value로 받고 싶으면 email.value어야 =한다.
    const creatAccount = useMutation(CREATE_ACCOUNT,{
        variables:{
            email: email.value,
            usertname: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });
    
    const onSubmit    =(e) =>{
        e.preventDefault();
        if(action==="logIn"){
            if(email!==""){
                requestSecret();
            }else
            {
                toast.error("이메일이 필요해용~");
            }
        }
        else if(action==="signUp"){
            if(email.value!==""&&
                username.value!==""&&
                firstName.value!==""&&
                lastName.value!=="")
                {
                    createAccount();
                }
                else
                {
                    toast.error("모든 칸 채웠!");
                }
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
        onSubmit={onLogin}
        />
    )
};

//useState의 첫번째 액션은 로그인