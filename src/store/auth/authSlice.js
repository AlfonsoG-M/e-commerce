import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      localStorage.setItem("isLogged", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = {};
      localStorage.removeItem("user");
      localStorage.removeItem("isLogged");
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
