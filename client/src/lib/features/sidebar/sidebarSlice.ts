import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  isSideBarOpen: boolean;
}

// default theme has to be light mode
const initialState: initialStateType = {
  isSideBarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<boolean>) => {
      state.isSideBarOpen = action.payload;
    },
  },
});

export const { toggleState } = sidebarSlice.actions;
export default sidebarSlice.reducer;
