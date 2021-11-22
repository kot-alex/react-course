import { useCallback } from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import { addChat } from "../../Store/Chats/actions";
import "./AddChat.css";

export const AddChat = () => {
    const dispatch = useDispatch();

    const onAddChat = useCallback(() => {
        dispatch(addChat());
    }, [dispatch]);

    return (
        <IconButton className="add-chat-btn" onClick={onAddChat}>
            <CreateIcon />
        </IconButton>
    );
};
