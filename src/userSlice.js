import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    onEdit: false,
    userOnEdit: {},
  },
  reducers: {
    addUser: (state, action) => {
      const foundUser = state.users.find((user) =>
        user.fullname
          .toLowerCase()
          .includes(action.payload.fullname.toLowerCase())
      );

      if (foundUser) {
        alert("User exists!");
      } else {
        state.users.push({
          id: new Date().getTime(),
          image: action.payload.image,
          fullname: action.payload.fullname
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" "),
          age: action.payload.age,
          email: action.payload.email.toLowerCase(),
          expertise: action.payload.expertise,
        });
      }
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },

    toggleOnEdit: (state, action) => {
      state.onEdit = action.payload.onEdit;
    },

    setUserToUpdate: (state, action) => {
      state.userOnEdit = action.payload.user;
    },

    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.user.id) {
          user = action.payload.user;
        }
        return user;
      });
      state.onEdit = false;
      state.userOnEdit = {};
    },
  },
});

export const {
  addUser,
  deleteUser,
  toggleOnEdit,
  setUserToUpdate,
  updateUser,
} = userSlice.actions;
export default userSlice.reducer;
