import { configureStore } from "@reduxjs/toolkit";
import notify from "./modules/notify";
import dark from "./modules/dark";

const store = configureStore({
    reducer: {
        notify: notify,
        dark: dark,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
