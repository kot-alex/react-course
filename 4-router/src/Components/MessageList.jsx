import { useState, useEffect } from "react";
import "./MessageList.css";

export default function MessageList({ messages }) {
    const [infoStyle, setInfoStyle] = useState({ display: "none" });

    useEffect(() => {
        if (messages.length) {
            setTimeout(() => {
                setInfoStyle({ display: "block" });
            }, 1500);
            setTimeout(() => {
                setInfoStyle({ display: "none" });
            }, 4000);
            return () => {
                clearTimeout(messages);
            };
        }
    }, [messages]);

    return (
        <div className="msg-list">
            {messages.map((message) => {
                return (
                    <div className="msg" key={message.id}>
                        <span className="msg-text">{message.text}</span>
                        <br />
                        <span className="msg-author">{message.author}</span>
                    </div>
                );
            })}
            <div className="info-msg" style={infoStyle}>
                {messages.length > 0 && (
                    <span>
                        {messages[messages.length - 1].author}'s message has
                        been sent.
                    </span>
                )}
            </div>
        </div>
    );
}
