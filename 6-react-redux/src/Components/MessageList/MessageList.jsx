import { useSelector } from "react-redux";
import { selectedMessagesSelector } from "../../Store/Messages/selectors";
import "./MessageList.css";

export const MessageList = () => {
    const messages = useSelector(selectedMessagesSelector);

    return (
        <div className="msg-list">
            {messages.map((message) => {
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
