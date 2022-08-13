import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Navigation } from "./Components/Navigation/Navigation";
import { Router } from "./Routing/Router";
import { theme } from "./Theme/theme";
import { store, persistor } from "./Store/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Services/firebase";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}
                    loading={<CircularProgress />}
                >
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <Navigation />
                            <Router />
                        </BrowserRouter>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
