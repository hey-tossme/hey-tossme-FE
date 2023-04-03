import { createSlice } from "@reduxjs/toolkit";
import { searchStateProps } from "../../components/category/_Category.interface";

const initialState: searchStateProps = {
    category: null,
    searchTitle: null,
    region: null,
    startDue: null,
    endDue: null,
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setItems: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetItems: (state) => {
            return initialState;
        },
    },
});

export default searchSlice.reducer;
export const { setItems, resetItems } = searchSlice.actions;
