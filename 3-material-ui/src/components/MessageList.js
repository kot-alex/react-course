import './MessageList.css'

export default function Messages({ messages, infoStyle }) {

    const list = messages.map((message) =>
        <div className="msg-message" key={message.id}>
            <p>{message.text}</p>
            <p className="msg-author">{message.author}</p>
        </div>
    );

    return (
        <div className="msg-list">
            {list}
            <div className="info-msg" style={infoStyle}>{messages.length > 0 && <span>{messages[messages.length - 1].author}'s message has been sent.</span>}</div>
        </div>
    );
}