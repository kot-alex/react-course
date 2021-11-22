import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { addChatWithFirebase } from "../../Store/Chats/actions";
import "./AddChat.css";

export const AddChat = () => {
    const dispatch = useDispatch();

    const onAddChat = useCallback(() => {
        dispatch(addChatWithFirebase());
    }, [dispatch]);

    return (
        <Fab color="primary" className="add-chat-btn" onClick={onAddChat}>
            <AddIcon />
        </Fab>
    );
};
