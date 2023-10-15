import { configureStore } from "@reduxjs/toolkit";
import slice  from "./slice/slice";
import { userApi } from "../services/UsersService";
console.log(userApi)
export default configureStore({
  reducer: {
    counter: slice,
[userApi.reducerPath]: userApi.reducer
  },
  middleware: (gDM) =>  gDM().concat(userApi.middleware)
});
