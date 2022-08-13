import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import { addMessage, showMessages } from "../../Store/Messages/actions";
import "./Form.css";

export const Form = ({ chatId }) => {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const ref = useRef(null);

    const dispatch = useDispatch();

    const onAddMessage = (event) => {
        event.preventDefault();
        dispatch(addMessage(text, author, chatId));
        dispatch(showMessages(chatId));
        setText("");
        setAuthor("");
    };

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <form className="form" onSubmit={onAddMessage}>
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
