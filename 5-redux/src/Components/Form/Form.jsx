import { useEffect, useState, useRef } from "react";
import { TextField, Button } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import "./Form.css";

export const Form = ({ chats, setChats, chatId }) => {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [msgId, setMsgId] = useState(1);
    const ref = useRef(null);

    const createMessage = (e) => {
        e.preventDefault();
        ref.current.focus();
        setMsgId(msgId + 1);
        setText("");
        setAuthor("");
        setChats({
            ...chats[chatId],
            messages: { id: msgId, text: text, author: author },
        });
    };

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <form className="form" onSubmit={createMessage}>
            <TextField
                id="outlined-basic"
                className="form-text"
                required={true}
                label="Message"
                variant="outlined"
                size="small"
                value={text}
                onChange={(e) => setText(e.target.value)}
                inputRef={ref}
            />
            <TextField
                id="outlined-basic"
                className="form-author"
                required={true}
                label="Author"
                variant="outlined"
                size="small"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <Button
                className="form-send-btn"
                variant="contained"
                type="submit"
                color="primary"
            >
                <MailIcon />
            </Button>
        </form>
    );
};
