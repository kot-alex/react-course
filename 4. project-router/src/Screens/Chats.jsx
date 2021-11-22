import { useState } from "react";
import { useParams, Redirect } from "react-router";
import MessageList from "../Components/MessageList";
import Form from "../Components/Form";
import ChatList from "../Components/ChatList";
import AddChat from "../Components/AddChat";
import { NoChats } from "./NoChats";
import "./Chats.css";

export const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [chats, setChats] = useState({});
    const { chatId } = useParams();

    return (
        <div className="chats">
            <div className="chats-left">
                <AddChat
                    messages={messages}
                    chats={chats}
                    setChats={setChats}
                />
                <ChatList chats={chats} chatId={chatId} />
            </div>
            {!chatId || !chats[chatId] ? (
                <div className="chats-right">
                    <Redirect to="/nochat" />
                    <NoChats />
                </div>
            ) : (
                <div className="chats-right">
                    <MessageList messages={messages} />
                    <Form messages={messages} setMessages={setMessages} />
                </div>
            )}
        </div>
    );
};
