import './Form.css'
import { useEffect, useState, useRef } from 'react';
import { TextField, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

export default function Form({ updateMessages }) {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(1);
    const ref = useRef(null);

    const createMessage = (e) => {
        e.preventDefault();
        ref.current.focus();
        setId(id + 1);
        let message = {
            id: id,
            text: text,
            author: author
        };
        setText('');
        setAuthor('');
        updateMessages(message);

    }

    useEffect(() => {
        ref.current?.focus();
    }, [])

    const styles = {
        author: {
            margin: "0 10px",
        },
        button: {
            borderRadius: "10px",
        }
    };

    return (
        <form className="form" onSubmit={createMessage}>
            <TextField id="outlined-basic" className="form-text" style={styles.text} required={true} label="Message" variant="outlined" size="small" value={text} onChange={e => setText(e.target.value)} inputRef={ref} />
            <TextField id="outlined-basic" className="form-author" style={styles.author} required={true} label="Author" variant="outlined" size="small" value={author} onChange={e => setAuthor(e.target.value)} />
            <Button style={styles.button} variant="contained" type="submit" color="primary"><MailIcon /></Button>
        </form>
    );
}