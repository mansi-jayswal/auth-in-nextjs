import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {};

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state = action.payload;
//     },
//     clearUser: (state) => {
//       state= null;
//     },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;

// export default userSlice.reducer;


