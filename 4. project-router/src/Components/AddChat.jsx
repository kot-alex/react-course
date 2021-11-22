import { useState } from "react";
import { IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import "./AddChat.css";

export default function AddChat({ messages, chats, setChats }) {
    const [chatId, setChatId] = useState(1);

    const createChat = () => {
        setChatId(chatId + 1);
        let chat = {
            name: "chat" + chatId,
            messages: messages,
        };
        setChats({ ...chats, ...{ ["id" + chatId]: chat } });
    };

    return (
        <IconButton className="add-chat-btn" onClick={createChat}>
            <CreateIcon />
        </IconButton>
    );
}
