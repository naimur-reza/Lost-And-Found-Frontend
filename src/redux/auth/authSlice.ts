import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit/react";

type TUser = {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};
type TInitialState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.authSlice.token;
export const selectCurrentUser = (state: RootState) => state.authSlice.user;
