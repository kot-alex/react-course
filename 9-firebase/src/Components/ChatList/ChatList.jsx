import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { chatsSelector } from "../../Store/Chats/selectors";
import { deleteChatWithFirebase } from "../../Store/Chats/actions";
import "./ChatList.css";

export const ChatList = ({ chatId }) => {
    const dispatch = useDispatch();

    const chats = useSelector(chatsSelector);

    const onDeleteChat = useCallback(
        (chatId) => {
            dispatch(deleteChatWithFirebase(chatId));
        },
        [dispatch]
    );

    return (
        <List className="chat-list">
            {chats.map((chat) => {
                return (
                    <Link to={`/chats/${chat.id}`} key={chat.id}>
                        <ListItem
                            style={{
                                backgroundColor:
                                    chat.id === chatId ? "#3f50b5" : "",
                            }}
                            className="chat-list-item"
                            button
                        >
                            <ListItemText
                                style={{
                                    color: chat.id === chatId ? "#fff" : "#000",
                                }}
                                primary={chat.name}
                            />
                            <IconButton onClick={() => onDeleteChat(chat.id)}>
                                <HighlightOffIcon
                                    className="chat-list-delete"
                                    style={{
                                        color:
                                            chat.id === chatId
                                                ? "#fff"
                                                : "#000",
                                    }}
                                />
                            </IconButton>
                        </ListItem>
                    </Link>
                );
            })}
        </List>
    );
};
