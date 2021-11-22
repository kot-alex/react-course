import { Switch, Route } from "react-router-dom";
import { Profile } from "../Screens/Profile";
import { Chats } from "../Screens/Chats";
import { Home } from "../Screens/Home";
import { NoChats } from "../Screens/NoChats";

export default function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/chats/:chatId?">
                <Chats />
            </Route>
            <Route path="/nochat">
                <Chats>
                    <NoChats />
                </Chats>
            </Route>
            <Route>
                <h3>Page not found</h3>
            </Route>
        </Switch>
    );
}
