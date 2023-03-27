import { createSlice } from "@reduxjs/toolkit";

const initialState: { token: string; id: number; account: string } = {
    token: "",
    id: 0,
    account: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin(state, action) {
            return { ...state, ...action.payload };
        },
        setLogout(state) {
            return initialState;
        },
    },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
