import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { chatsSelector } from "../../Store/Chats/selectors";
import { showMessages } from "../../Store/Messages/actions";
import { deleteChat } from "../../Store/Chats/actions";
import "./ChatList.css";

export const ChatList = () => {
    const chats = useSelector(chatsSelector);

    const dispatch = useDispatch();

    const onShowMessages = (chatId) => {
        dispatch(showMessages(chatId));
    };

    const onDeleteChat = (chatId) => {
        dispatch(deleteChat(chatId));
    };

    return (
        <List className="chat-list">
            {chats.map((chat) => {
                return (
                    <Link to={`/chats/${chat.id}`} key={chat.id}>
                        <ListItem
                            className="chat-list-item"
                            onClick={() => onShowMessages(chat.id)}
                            button
                        >
                            <ListItemText primary={chat.name} />
                            <IconButton onClick={() => onDeleteChat(chat.id)}>
                                <HighlightOffIcon
                                    className="chat-list-delete"
                                    color="primary"
                                />
                            </IconButton>
                        </ListItem>
                    </Link>
                );
            })}
        </List>
    );
};
