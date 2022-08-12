import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favorites/favoriteSlice";
import { loadState } from "../localStorage";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
  preloadedState: loadState(),
});
