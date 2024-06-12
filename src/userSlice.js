import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: new Date().getTime(),
        image: action.payload.image,
        fullname: action.payload.fullname,
        age: action.payload.age,
        email: action.payload.email,
        expertise: action.payload.expertise,
      });
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
