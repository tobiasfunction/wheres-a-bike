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
    remove: (state, action) => {
      const itemIndex = state.list.findIndex((e) => e.id === action.payload);
      if (itemIndex >= 0) state.list.splice(itemIndex, 1);
    },
  },
});

export const { add, remove } = favoriteSlice.actions;

export default favoriteSlice.reducer;
