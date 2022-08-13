import { createSlice } from "@reduxjs/toolkit";

export const networkSlice = createSlice({
  name: "network",
  initialState: {
    info: {
      id: "capital-bikeshare",
      name: "Capital BikeShare",
      location: { city: "Washington, DC" },
    },
  },
  reducers: {
    set: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { set } = networkSlice.actions;

export default networkSlice.reducer;
