import { createSlice } from "@reduxjs/toolkit";
import { NotifyStateProps } from "../../components/notify/_Notify.interface";

const initialState: NotifyStateProps = { isNew: false, notify: [] };

export const notifySlice = createSlice({
    name: "notify",
    initialState,
    reducers: {
        setList: (state, action) => {
            state.notify = action.payload;
            return state;
        },

        deleteList: (state, action) => {
            return {
                isNew: state.isNew,
                notify: state.notify.filter((item: any) => item.id !== action.payload),
            };
        },

        updateReadList: (state, action) => {
            const { id } = action.payload;
            const target = state.notify.find((item: any) => item.id === id);
            if (target) {
                target.readOrNot = true;
            }
        },

        resetList: () => {
            return initialState;
        },

        isNewNotification: (state, action) => {
            state.isNew = action.payload;
        },
    },
});

export default notifySlice.reducer;
export const { setList, deleteList, updateReadList, resetList, isNewNotification } =
    notifySlice.actions;
