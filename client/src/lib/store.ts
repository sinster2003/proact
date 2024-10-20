import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";

// create store per request in nextjs
export const makeStore = () => {
  return configureStore({
    reducer: {
      themeSlice: themeReducer,
      sidebarSlice: sidebarReducer,
    }
  });
};

// some inferred types
export type AppStore = ReturnType<typeof makeStore>;
export type RootType = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
