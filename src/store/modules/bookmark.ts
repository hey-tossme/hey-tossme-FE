import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<any> = [];

export const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        setBookmarkList: (state, action) => {
            return action.payload;
        },
    },
});

export default bookmarkSlice.reducer;
export const { setBookmarkList } = bookmarkSlice.actions;
