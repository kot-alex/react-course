import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import _uniqueId from "lodash/uniqueId";
import "./AddChat.css";

export const AddChat = ({ chats, setChats }) => {
    const createChat = () => {
        const id = _uniqueId();
        setChats({
            ...chats,
            ...{
                ["id" + id]: {
                    name: "chat" + id,
                    messages: [],
                },
            },
        });
    };

    return (
        <IconButton className="add-chat-btn" onClick={createChat}>
            <CreateIcon />
        </IconButton>
    );
};
