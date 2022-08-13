import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getMessagesByChatId } from "../../Store/Messages/selectors";
import "./MessageList.css";

export const MessageList = ({ chatId }) => {
    const getSelectedChat = useMemo(
        () => getMessagesByChatId(chatId),
        [chatId]
    );

    const selectedChat = useSelector(getSelectedChat);

    return (
        <div className="msg-list">
            {selectedChat.map((message) => {
                return (
                    <div className="msg" key={message.id}>
                        <span className="msg-text">{message.text}</span>
                        <br />
                        <span className="msg-author">{message.author}</span>
                    </div>
                );
            })}
        </div>
    );
};
