import { configureStore } from "@reduxjs/toolkit";
import notify from "./modules/notify";
import dark from "./modules/dark";
import search from "./modules/search";
import chat from "./modules/chat";
import searchResult from "./modules/searchResult";
import modal from "./modules/modal";
import user from "./modules/user";

const store = configureStore({
    reducer: {
        notify: notify,
        dark: dark,
        search: search,
        searchResult: searchResult,
        chat: chat,
        modal: modal,
        user: user,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
