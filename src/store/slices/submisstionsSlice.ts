import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../localStorage";

export interface DataType {
  key: React.Key;
  title: string;
  firstName: string;
  lastName: string;
  birth?: string;
  nation: string;
  idCard?: string;
  gender: string;
  phoneCode?: string;
  phoneNumber: string;
  passportId?: string;
  salary: number;
}

const initialState: DataType[] = getLocalStorage();

const submissionsSlice = createSlice({
  name: "submissions",
  initialState: initialState,
  reducers: {
    addSubmission: (state, action) => {
      state.push(action.payload);
    },
    removeSubmission: (state, action) => {
      const submission = action.payload;
      const index = state.findIndex((s) => s.key === submission.key);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    removeMultiSubmissions: (state, action) => {
      const keys = action.payload;
      return state.filter((submission) => !keys.includes(submission.key));
    },
  },
});

export const { addSubmission, removeSubmission, removeMultiSubmissions } =
  submissionsSlice.actions;
export default submissionsSlice.reducer;
