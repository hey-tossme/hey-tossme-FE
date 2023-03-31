import { createSlice } from "@reduxjs/toolkit";

const initialState: { token: string; id: number; account: string } = {
    token: "",
    id: 0,
    account: "",
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
export const stateToken = (state: any) => state.user.token;
export const stateId = (state: any) => state.user.id;
export const stateAccount = (state: any) => state.user.account;
export default userSlice;
