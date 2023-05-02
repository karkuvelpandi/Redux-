import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "11", name: "Karkuvel Pandi" },
  { id: "12", name: "Mari" },
  { id: "13", name: "Vijay Kumar" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
