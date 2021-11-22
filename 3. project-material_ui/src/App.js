import './App.css';
import Messages from './components/MessageList'
import Form from './components/Form'
import ChatList from './components/ChatList'
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

function App() {
  const [messages, setMessages] = useState([]);

  const updateMessages = (message) => {
    setMessages([...messages, message]);
  }

  const [infoMsg, setInfoMsg] = useState({ display: "none" })

  useEffect(() => {
    if (messages.length) {
      setTimeout(() => {
        setInfoMsg({ display: "block" })
      }, 1500);
      setTimeout(() => {
        setInfoMsg({ display: "none" })
      }, 4000);
    }
  }, [messages]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
      }, secondary: {
        main: "#00b0ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ChatList messages={messages} />
        <div className="app-right">
          <Messages messages={messages} infoStyle={infoMsg} />
          <Form updateMessages={updateMessages} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;