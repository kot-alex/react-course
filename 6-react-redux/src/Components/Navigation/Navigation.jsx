import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { ROUTES } from "../../Routing/constants";

export const Navigation = () => {
    const [value, setValue] = useState(0);

    const changeTab = (_event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            onChange={changeTab}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Home" to={ROUTES.MAIN} component={Link} />
            <Tab label="Profile" to={ROUTES.PROFILE} component={Link} />
            <Tab label="Chats" to={ROUTES.CHATS} component={Link} />
        </Tabs>
    );
};
