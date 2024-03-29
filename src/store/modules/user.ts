import { createSlice } from "@reduxjs/toolkit";

const initialState: { token: string; id: number; account: string | null } = {
    token: "",
    id: 0,
    account: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin(state, action) {
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.account = action.payload.account;
        },
    },
});

export const { setLogin } = userSlice.actions;
export default userSlice;
