import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { Home } from "../Pages/Home/Home";
import { Profile } from "../Pages/Profile/Profile";
import { Chats } from "../Pages/Chats/Chats";
import { NoChats } from "../Components/NoChats/NoChats";
import { Space } from "../Pages/Space/Space";

export const Router = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.MAIN}>
                <Home />
            </Route>
            <Route exact path={ROUTES.PROFILE}>
                <Profile />
            </Route>
            <Route path={ROUTES.CHATS}>
                <Chats />
            </Route>
            <Route path={ROUTES.NO_CHAT}>
                <NoChats />
            </Route>
            <Route path={ROUTES.SPACE_PHOTOS}>
                <Space />
            </Route>
            <Route>
                <h3>Page not found</h3>
            </Route>
        </Switch>
    );
};
