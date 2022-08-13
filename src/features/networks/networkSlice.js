import { createSlice } from "@reduxjs/toolkit";

export const networkSlice = createSlice({
  name: "network",
  initialState: {
    id: "capital-bikeshare",
    name: "Capital BikeShare",
    location: { city: "Washington, DC" },
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = networkSlice.actions;

export default networkSlice.reducer;
