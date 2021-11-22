import './Message.css';

function Message(props) {
    return (
        <div className="message">
            React был создан Джорданом Валке, разработчиком программного обеспечения из Facebook. На него оказал влияние XHP — компонентный HTML-фреймворк для PHP.<p className="text">{props.text}</p>
        </div>
    );
}

export default Message