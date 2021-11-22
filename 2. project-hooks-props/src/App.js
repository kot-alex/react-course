import './App.css';
import Messages from './components/MessageList'
import Form from './components/Form'
import InfoMessage from './components/InfoMessage';
import { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  const updateMessages = (message) => {
    setMessages([...messages, message]);
  }

  const [infoStyle, setInfoStyle] = useState({ display: "none" })

  useEffect(() => {
    if (messages.length) {
      setTimeout(() => {
        setInfoStyle({ display: "block" })
      }, 1500);
      setTimeout(() => {
        setInfoStyle({ display: "none" })
      }, 4000);
    }
  }, [messages]);

  return (
    <div className="App">
      <Messages messages={messages} />
      <Form updateMessages={updateMessages} />
      <InfoMessage infoStyle={infoStyle} messages={messages} />
    </div>
  );
}

export default App;