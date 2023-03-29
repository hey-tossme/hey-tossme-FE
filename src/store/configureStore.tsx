import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";

import notify from "./modules/notify";
import dark from "./modules/dark";
import search from "./modules/search";
import chat from "./modules/chat";
import searchResult from "./modules/searchResult";
import modal from "./modules/modal";
import userSlice from "./modules/user";

const reducers = combineReducers({
    notify: notify,
    dark: dark,
    search: search,
    searchResult: searchResult,
    chat: chat,
    modal: modal,
    user: userSlice.reducer,
});

// config 작성
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
