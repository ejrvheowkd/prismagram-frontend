import {useState} from "react";
export default (defaultValue)=>{
    const [value,setValue] = useState(defaultValue);

    //아래는 이벤트 targetvalue
    const onChange= (e) => {
         const {
             target: {value}
         } = e;
    setValue(value);

    };
    
    return {value,onChange,setValue};
};

//useInput는 하나의 value를 가지는데 우리는 useState에서 그 value를 사용할 거고
//useState는 우리에게 value와 setValue를 줄 거야 그러면 우리는 value를 return 하고
// onChange 라는 function을 export 할 수 있게 되지