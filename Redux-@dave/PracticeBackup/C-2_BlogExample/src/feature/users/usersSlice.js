import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Karkuvel Pandi" },
  { id: "1", name: "Mani Ganden" },
  { id: "2", name: "vijay kumar" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
