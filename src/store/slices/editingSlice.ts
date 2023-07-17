import { createSlice } from "@reduxjs/toolkit";
import type { DataType } from "./submisstionsSlice";

const initialState: DataType | null = null;

const editingSlice = createSlice({
  name: "editing",
  initialState,
  reducers: {
    setEditingRecord: (state, action) => {
      return action.payload;
    },
    resetEditing: (state) => {
      return initialState;
    },
  },
});

export const { setEditingRecord, resetEditing } = editingSlice.actions;
export default editingSlice.reducer;
