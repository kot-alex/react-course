import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Router from "./Routing/Router";
import "./App.css";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#2196f3",
            },
            secondary: {
                main: "#00b0ff",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <Navigation />
                    <Router />
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
