import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favorites/favoriteSlice";
import networkReducer from "../features/networks/networkSlice";
import { loadState } from "../localStorage";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    network: networkReducer,
  },
  // For browser storage
  preloadedState: loadState(),
});
