//Local State는 기본적으로 Client에 없는 state다
//엄청나게 많은 UI를 가진 application을 갖고 있다고 한다면 예를들면 local state는 창을 닫고 여는등의 기능을 하지만
//여기서는 authenticate(인증)되는지 확인 그리고 Router의 isLoggedIn을 true 혹은 false로 변경할 수 있도록 해줄거야


//isLoggedIn을 false로 둘 거야
export const defaults={
    isLoggedIn: Boolean(localStorage.getItem("token"))||false

};
    //resolvers는 ture,false를 바꾼다

export const resolvers ={
    Mutation:{
        //누군가 Log in 하도록 Mutation을 만들 건데 token이 있으면 isLoggendIn은 true
        logUserIn:(_,{token},{cache}) =>{
            localStorage.setItem("token",token);
            cache.writeData({
                data:{
                    isLoggedIn:true
                }
            });
            return null;
        },
        logUserOut:(_,__,{cache})=>{
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }

    }
};

//client state는 이 app이 오프라인 상태에서 발생하는 건데 우린 redux를 할 필요없다어던사람음 하느데