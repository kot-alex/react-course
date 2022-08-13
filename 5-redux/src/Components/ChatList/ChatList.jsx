import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./ChatList.css";

export const ChatList = ({ chats }) => {
    return (
        <List className="chat-list">
            {Object.keys(chats).map((id) => {
                return (
                    <Link to={`/chats/${id}`} key={id}>
                        <ListItem className="chat-list-item" button selected>
                            <ListItemText primary={chats[id].name} />
                        </ListItem>
                    </Link>
                );
            })}
        </List>
    );
};
