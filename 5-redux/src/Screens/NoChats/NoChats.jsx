import { AddChat } from "../../Components/AddChat/AddChat";
import { ChatList } from "../../Components/ChatList/ChatList";
import "./NoChats.css";

export const NoChats = ({ chats, setChats }) => {
    return (
        <div className="chats">
            <div className="chats-left">
                <AddChat chats={chats} setChats={setChats} />
                <ChatList chats={chats} />
            </div>
            <div className="chats-right">
                <div className="no-chats">
                    <span className="no-chats-text">
                        Please select or add a chat
                    </span>
                </div>
            </div>
        </div>
    );
};
