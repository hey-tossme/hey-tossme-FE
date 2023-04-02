import { createSlice } from "@reduxjs/toolkit";

const initialState: { openChat: boolean; enterChat: boolean; chatId: number } = {
    openChat: false,
    enterChat: false,
    chatId: -1,
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setOpenChat(state) {
            state.openChat = true;
        },
        setCloseChat(state) {
            state.openChat = false;
            state.enterChat = false;
        },
        setEnterChat(state) {
            state.enterChat = true;
        },
        setLeaveChat(state) {
            state.enterChat = false;
        },
        setChatId(state, action) {
            state.chatId = action.payload;
        },
    },
});

export const { setOpenChat, setCloseChat, setEnterChat, setLeaveChat, setChatId } =
    chatSlice.actions;
export default chatSlice.reducer;
