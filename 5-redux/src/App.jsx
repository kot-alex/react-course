import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Navigation } from "./Components/Navigation/Navigation";
import { Router } from "./Routing/Router";
import { store } from "./Store/index";
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
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <BrowserRouter>
                        <Navigation />
                        <Router />
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
