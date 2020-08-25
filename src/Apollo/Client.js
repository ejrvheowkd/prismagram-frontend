import ApolloClient from 'apollo-boost';
import {defaults,resolvers} from "./LocalState";
export default new ApolloClient({
    uri:"http://localhost:4000",
    clientState:{
        defaults,
        resolvers
    },
    headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`//LocalState에서 token가져옴
    }
});

// configuration 배열 첫번쨰는 uri
//Apollo client인데 implementation(실행)a