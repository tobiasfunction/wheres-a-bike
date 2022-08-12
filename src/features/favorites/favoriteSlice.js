import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { add } = favoriteSlice.actions;

export default favoriteSlice.reducer;
