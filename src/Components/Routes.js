import PropTypes from "prop-types";
import {Route,Switch} from "react-router-dom";
import React from "react";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";
const LoggedInRoutes = () => (
<Switch>
<Route exact path="/" component={Feed}/>
<Route  path="/explore" component={Explore}/>
<Route  path="/search" component ={Search}/>
<Route path="/:username" component={Profile} />
</Switch>//Switch는 딱 하나의 라우트만 렌더링해준다
);
const LoggedOutRoutes = () => (
<Switch>
<Route exact path="/" component ={Auth} />
</Switch>
);
const AppRouter = ({isLoggedIn}) => (
  isLoggedIn?<LoggedInRoutes/>:<LoggedOutRoutes/>
);


AppRouter.proTypes ={
    isLoggedIn: PropTypes.bool.isRequired
};
export default AppRouter;