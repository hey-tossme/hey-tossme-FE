import { createSlice } from "@reduxjs/toolkit";
import { searchStateProps } from "../../components/category/Category.interface";

const initialState: searchStateProps = {
    category: "",
    keyword: "",
    sido_area: "",
    sigun_area: "",
    duedate: "",
    deadline: false,
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchData: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetData: (state) => {
            return initialState;
        },
    },
});

export default searchSlice.reducer;
export const { setSearchData, resetData } = searchSlice.actions;
