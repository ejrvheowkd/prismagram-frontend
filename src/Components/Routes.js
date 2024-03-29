import PropTypes from "prop-types";
import {Route,Switch, Redirect} from "react-router-dom";
import React from "react";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";
import Upload from "../Routes/Upload";
const LoggedInRoutes = () => (
<Switch>
<Route exact path="/" component={Feed}/>
<Route  path="/explore" component={Explore}/>
<Route  path="/search" component ={Search}/>
<Route path="/upload" component={Upload}/>
<Route path="/:username" component={Profile} />
<Redirect from="*" to="/"/>
</Switch>//Switch는 딱 하나의 라우트만 렌더링해준다
//Profile밑에 두면 왜 안되지?
);
const LoggedOutRoutes = () => (
<Switch>
<Route exact path="/" component ={Auth} />
<Redirect from="*" to="/"/>
</Switch>
);
const AppRouter = ({isLoggedIn}) => (
  isLoggedIn?<LoggedInRoutes/>:<LoggedOutRoutes/>
);


AppRouter.proTypes ={
    isLoggedIn: PropTypes.bool.isRequired
};
export default AppRouter;
//<Redirect from="*" to="/"/> home으로 다시 돌아가는것