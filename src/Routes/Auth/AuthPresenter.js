//style

import React from "react";
import styled from "styled-components"; //라이브러리
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div `
    min-height: 80vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    `;

const Box = styled.div `
${props => props.theme.whiteBox}
border-radius:0px;
width:100%;
max-width:350px;
`;
const Form = styled(Box)`
    padding:40px;
    padding-right:30px;
    margin-bottom:15px;
    form{
        width:100%;
    input{
        widthL100%;
        &:not(:last-child){
            margin-bottom:px;
        }
    }
    button{
        margin-top:10px;
    }
}
`;
const StateChanger = styled(Box)`
    text-align:center;
    padding:20px 0px;
`

const Link = styled.span `
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;
export default({
    action,
    username,
    firstname,
    lastname,
    email,
    setAction,
    onLogin
}) => (
        <Wrapper>
            <Form>
                {
                    action === "logIn"
                        ? (
                            <form onSubmit={onLogin}>
                                <Input placeholder={"Email"} {...email} type="email"/>
<Button text ={"Log in"} />
                            </form>
                        )
                :  <form onSubmit={onLogin}>
                <Input placeholder={"First name"} {...firstname}/>
                <Input placeholder={"Last name"} {...lastname}/>
                <Input placeholder={"Email"} {...email} type="email"/>
                <Input placeholder={"Username"}{...username}/>

<Button text ={"Sign up"} />
            </form>}
            </Form>
            <StateChanger>
                {
                    action === "logIn"
                        ? (
                            <> Don 't have an account?{" "}
 < Link onClick = {
                                () => setAction("signUp")
                            } > Sign up</Link> </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link > </>
                        )
                }
                </StateChanger>
        </Wrapper>
    );


//useState의 첫번째 액션은 로그인