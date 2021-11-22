import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { chatsSelector } from "../../Store/Chats/selectors";
import { ROUTES } from "../../Routing/constants";
import { AddChat } from "../../Components/AddChat/AddChat";
import { ChatList } from "../../Components/ChatList/ChatList";
import { MessageList } from "../../Components/MessageList/MessageList";
import { Form } from "../../Components/Form/Form";
import "./Chats.css";

export const Chats = () => {
    const { chatId } = useParams();

    const chats = useSelector(chatsSelector);

    const isChatExists = chats.find((chat) => chat.id === chatId);

    const showChat = chatId && isChatExists;

    if (showChat) {
        return (
            <div className="chats">
                <div className="chats-left">
                    <AddChat />
                    <ChatList chatId={chatId} />
                </div>
                <div className="chats-right">
                    <MessageList chatId={chatId} />
                    <Form chatId={chatId} />
                </div>
            </div>
        );
    } else {
        return <Redirect to={ROUTES.NO_CHAT} />;
    }
};
