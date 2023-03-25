import { createSlice } from "@reduxjs/toolkit";

const initialState: { token: string } = {
    token: "",
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setLogin(state) {
            state.token = "testaaaaaaabbbbbbbb";
        },
        setLogout(state) {
            state.token = "";
        },
    },
});

export const { setLogin, setLogout } = tokenSlice.actions;
export default tokenSlice.reducer;
