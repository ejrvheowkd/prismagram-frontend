//모든 state랑 query랑 data hooks를 둘거야
import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { LOG_IN ,CREATE_ACCOUNT} from "./AuthQueries";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

//useInput은 나에게 value랑 onChange를 줄거야
export default() => {
    const [action, setAction] = useState("logIn");  
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const secret = useInput("");
    const email = useInput("");
    const [requestSecretMutation] = useMutation(LOG_IN,
        {
    variables:{email:email.value}
    }
        );//mutation은 쿼리가 있어야해
    //만약 내가 text value로 받고 싶으면 email.value어야 =한다.
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT,{
        variables:{
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });
    const onSubmit =async(e) =>{
        e.preventDefault();
        if(action==="logIn"){
            if(email.value!==""){
                try{
                    const {data:{requestSecret}} = await requestSecretMutation();
                        if(!requestSecret){
                            toast.error("계정이 없습니다.");
                            setTimeout(()=> setAction("signUp"),3000);
                        }else
                        {
                            toast.success("Check your inbox for your login secret");
                    setAction("confirm");

                        }
                }
                catch{
                    toast.error("Can't request secret, try again");
                }
            }else
            {
                toast.error("이메일이 필요해용~");
            }
        }
        else if(action==="signUp"){
      if (email.value !== "" && username.value !== "" && firstName.value !== "" && lastName.value !== "")
                {
                    try{
                   const {data:{createAccount}} = await createAccountMutation();
                   if(!createAccount)
                   {
                       toast.error("Can't create account");
                   }
                   else
                   {
                       toast.success("Account created! Log In now");
                       setTimeout(()=> setAction("logIn"),3000);
                   }
                }catch (e){
                    toast.error(e.message);
                }
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
        secret={secret}
        onSubmit={onSubmit}
        />
    );
};

//useState의 첫번째 액션은 로그인