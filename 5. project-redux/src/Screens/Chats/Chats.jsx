import { useParams, Redirect } from "react-router";
import { ROUTES } from "../../Routing/constants";
import { AddChat } from "../../Components/AddChat/AddChat";
import { ChatList } from "../../Components/ChatList/ChatList";
import { MessageList } from "../../Components/MessageList/MessageList";
import { Form } from "../../Components/Form/Form";
import "./Chats.css";

export const Chats = ({ chats, setChats }) => {
    const { chatId } = useParams();

    if (!chatId || !chats[chatId]) {
        return <Redirect to={ROUTES.NO_CHAT} />;
    }

    return (
        <div className="chats">
            <div className="chats-left">
                <AddChat chats={chats} setChats={setChats} />
                <ChatList chats={chats} />
            </div>
            <div className="chats-right">
                <MessageList messages={chats[chatId].messages} />
                <Form chats={chats} setChats={setChats} chatId={chatId} />
            </div>
        </div>
    );
};
