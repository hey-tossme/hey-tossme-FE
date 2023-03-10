import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "/src/styles/main.css";
import { Provider } from "react-redux";
import store from "./store/configureStore";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
