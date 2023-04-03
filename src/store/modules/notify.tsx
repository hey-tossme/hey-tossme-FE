import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<any> = [];

export const notifySlice = createSlice({
    name: "notify",
    initialState,
    reducers: {
        setList: (state, action) => {
            if ((action.payload = [])) {
                return initialState;
            }
            return [...action.payload];
        },

        deleteList: (state, action) => {
            return state.filter((item: any) => item.id !== action.payload.id);
        },

        updateReadList: (state, action) => {
            const { id } = action.payload;
            const target = state.find((item: any) => item.id === id);
            if (target) {
                target.readOrNot = true;
            }
        },
    },
});

export default notifySlice.reducer;
export const { setList, deleteList, updateReadList } = notifySlice.actions;
