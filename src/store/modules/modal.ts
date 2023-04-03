import { createSlice } from "@reduxjs/toolkit";

const initialState: { modalOpen: boolean } = {
    modalOpen: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalOpen(state) {
            state.modalOpen = true;
            document.body.style.overflow = "hidden";
        },
        setModalClose(state) {
            state.modalOpen = false;
            document.body.style.overflow = "unset";
        },
    },
});

export const { setModalOpen, setModalClose } = modalSlice.actions;
export default modalSlice.reducer;
