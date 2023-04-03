import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "/src/styles/main.css";
import { Provider } from "react-redux";
import store from "./store/configureStore";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
export const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
