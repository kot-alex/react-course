import { useState } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { ROUTES } from "../../Routing/constants";
import { SignOut } from "../SignOut/SignOut";

export const Navigation = () => {
    const location = useLocation();

    const match = useRouteMatch("/chats/:id");

    const chatId = match ? match.params.id : null;

    const TabNameToIndex = {
        [ROUTES.MAIN]: 0,
        [ROUTES.PROFILE]: 1,
        [ROUTES.NO_CHAT]: 2,
        [`/chats/${chatId}`]: 2,
        [ROUTES.SPACE_PHOTOS]: 3,
    };

    const [selectedTab, setSelectedTab] = useState(
        TabNameToIndex[location.pathname]
    );

    const changeTab = (_event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <AppBar position="static">
            <Tabs onChange={changeTab} value={selectedTab} centered>
                <Tab label="Home" to={ROUTES.MAIN} component={Link} />
                <Tab label="Profile" to={ROUTES.PROFILE} component={Link} />
                <Tab label="Chats" to={ROUTES.CHATS} component={Link} />
                <Tab
                    label="Space Photos"
                    to={ROUTES.SPACE_PHOTOS}
                    component={Link}
                />
                <SignOut />
            </Tabs>
        </AppBar>
    );
};
