import './Form.css'
import { useState } from 'react';

export default function Form({ updateMessages }) {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(1);

    const createMessage = (e) => {
        e.preventDefault();
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

    return (
        <form className="form" onSubmit={createMessage}>
            <input className="text" placeholder="Message" required value={text} onChange={e => setText(e.target.value)} />
            <input className="author" placeholder="Author" required value={author} onChange={e => setAuthor(e.target.value)} />
            <input className="submitBtn" type="submit" value="Send" />
        </form>
    );
}