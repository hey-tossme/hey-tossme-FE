import { createSlice } from "@reduxjs/toolkit";

const initialState: { dark: boolean } = { dark: false };

export const darkSlice = createSlice({
    name: "dark",
    initialState,
    reducers: {
        setIsDark: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export default darkSlice.reducer;
export const { setIsDark } = darkSlice.actions;
