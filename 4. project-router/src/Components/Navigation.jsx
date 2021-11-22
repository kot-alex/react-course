import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";

export default function Navigation() {
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
            <Tab label="Home" to="/" component={Link} />
            <Tab label="Profile" to="/profile" component={Link} />
            <Tab label="Chats" to="/chats" component={Link} />
        </Tabs>
    );
}
