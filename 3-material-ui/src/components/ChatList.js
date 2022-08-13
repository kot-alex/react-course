import './ChatList.css'
import { List, ListItem, Avatar, ListItemAvatar, ListItemText } from '@material-ui/core';

export default function ChatList({ messages }) {

    const chatList = messages.map((messages) =>
        <List>
            <ListItem button selected={messages.id}>
                <ListItemAvatar>
                    <Avatar alt="Avatar" />
                </ListItemAvatar>
                <ListItemText primary={messages.author} />
            </ListItem>
        </List>
    );

    return (
        <div className="chat-list">
            {chatList}
        </div>
    );
}