import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: [],
};

export const searchResultSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchResult: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export default searchResultSlice.reducer;
export const { setSearchResult } = searchResultSlice.actions;
