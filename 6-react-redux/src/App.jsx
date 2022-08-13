import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Navigation } from "./Components/Navigation/Navigation";
import { Router } from "./Routing/Router";
import { theme } from "./Theme/theme";
import { store } from "./Store/index";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Navigation />
                        <Router />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;
