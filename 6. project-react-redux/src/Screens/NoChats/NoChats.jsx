import { AddChat } from "../../Components/AddChat/AddChat";
import { ChatList } from "../../Components/ChatList/ChatList";
import "./NoChats.css";

export const NoChats = () => {
    return (
        <div className="chats">
            <div className="chats-left">
                <AddChat />
                <ChatList />
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
