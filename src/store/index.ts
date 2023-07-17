// store.js
import { configureStore } from "@reduxjs/toolkit";
import submissionsReducer from "./slices/submisstionsSlice";
import editingRedecer from "./slices/editingSlice";

const store = configureStore({
  reducer: {
    submissions: submissionsReducer,
    editing: editingRedecer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
