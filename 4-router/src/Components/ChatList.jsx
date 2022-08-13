import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./ChatList.css";

export default function ChatList({ chats, chatId }) {
    return (
        <div className="chat-list">
            {Object.keys(chats).map((chat) => {
                return (
                    <List>
                        <Link to={`/chats/${chat}`}>
                            <ListItem button selected key={chats}>
                                <ListItemText primary={chats[chat].name} />
                            </ListItem>
                        </Link>
                    </List>
                );
            })}
        </div>
    );
}
