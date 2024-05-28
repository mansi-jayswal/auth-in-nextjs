// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// const store = configureStore({
//   reducer:{
//     user:userSlice
//   },
// })

// export default store;

//client component k andar server component wrap kr skte ha

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { user: userSlice },
  });
};
export type AppStore = ReturnType<typeof makeStore>

