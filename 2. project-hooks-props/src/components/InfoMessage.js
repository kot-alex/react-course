import './InfoMessage.css'
export default function InfoMessage({ infoStyle, messages }) {

    return (
        <div className="infoMsg" style={infoStyle}>{messages.length > 0 && <span>{messages[messages.length - 1].author}'s message has been sent.</span>}</div>
    );
}