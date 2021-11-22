import './MessageList.css'
export default function Messages({ messages }) {

    const list = messages.map((message) =>
        <div className="message" key={message.id}>
            <p>{message.text}</p>
            <p style={{ textAlign: "end" }}>{message.author}</p>
        </div>
    );

    return (
        <div className="list">
            {list}
        </div>
    );
}