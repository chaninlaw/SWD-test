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
  initialState,
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
    editSubmission: (state, action) => {
      const updatedSubmission = action.payload;
      const index = state.findIndex((s) => s.key === updatedSubmission.key);
      if (index !== -1) {
        state[index] = updatedSubmission;
      }
    },
  },
});

export const {
  addSubmission,
  removeSubmission,
  removeMultiSubmissions,
  editSubmission,
} = submissionsSlice.actions;
export default submissionsSlice.reducer;
