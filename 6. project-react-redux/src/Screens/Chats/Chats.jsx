import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../../Routing/constants";
import { AddChat } from "../../Components/AddChat/AddChat";
import { ChatList } from "../../Components/ChatList/ChatList";
import { MessageList } from "../../Components/MessageList/MessageList";
import { Form } from "../../Components/Form/Form";
import { chatsSelector } from "../../Store/Chats/selectors";
import "./Chats.css";

export const Chats = () => {
    const { chatId } = useParams();
    const chats = useSelector(chatsSelector);

    const chat = chats.find((chat) => chat.id === chatId);

    if (!chatId || !chat) {
        return <Redirect to={ROUTES.NO_CHAT} />;
    }

    return (
        <div className="chats">
            <div className="chats-left">
                <AddChat />
                <ChatList />
            </div>
            <div className="chats-right">
                <MessageList />
                <Form chatId={chatId} />
            </div>
        </div>
    );
};
