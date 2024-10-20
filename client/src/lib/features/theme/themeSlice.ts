import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  isDarkMode: boolean;
}

// default theme has to be light mode
const initialState: initialStateType = {
  isDarkMode: false
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
