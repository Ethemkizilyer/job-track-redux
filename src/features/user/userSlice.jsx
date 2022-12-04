import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localstorage";
import { clearStoreThunk, loginUserThunk, registerUserThunk, updateUserThunk } from "./userThunk";




const initialState = {
  isLoading: false,
  isSidebarOpen:false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register",user,thunkAPI)
    // console.log(`Register User : ${JSON.stringify(user)} `);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login",user,thunkAPI)
    // console.log(`Login User :  ${JSON.stringify(user)}`);
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk("/auth/updateUser",user,thunkAPI)
    // console.log(`Login User :  ${JSON.stringify(user)}`);
  }
);
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;

      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },

  //   //! OBJECT NOTATION
  //   extraReducers:{
  //       [registerUser.pending]: (state)=>{
  //           state.isLoading=true;
  //       },
  //       [registerUser.fulfilled]: (state, {payload})=>{
  //           const {user} =payload;
  //           state.isLoading=false;
  //           state.user=user;
  //           toast.success(`Hello There ${user.name}`);
  //       },
  //       [registerUser.rejected]: (state, {payload})=>{
  //           state.isLoading= false;
  //           toast.error(payload);
  //       },
  //         [loginUser.pending]:(state)=>{
  //             state.isLoading=true;
  //         },
  //         [loginUser.fulfilled]:(state,{payload})=>{
  //             const {user}=payload;
  //             state.isLoading=false;
  //             state.user=user;
  //             toast.success(`Hello There ${user.name}`)
  //         },
  //         [loginUser.rejected]:(state,{payload})=>{
  //             state.isLoading=false;
  //             toast.error(payload)
  //         },
  // [updateUser.pending]: (state) => {
  //   state.isLoading = true;
  // },
  // [updateUser.fulfilled]: (state, { payload }) => {
  //   const { user } = payload;
  //   state.isLoading = false;
  //   state.user = user;

  //   addUserToLocalStorage(user);
  //   toast.success("User Updated");
  // },
  // [updateUser.rejected]: (state, { payload }) => {
  //   state.isLoading = false;
  //   toast.error(payload);
  // },
  // [clearStore.rejected]: () => {
  //   toast.error("There was an error");
  // },
  //   }

  //! BUILDER CALLBACK NOTATION

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello there ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`User Updated`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected,()=>{
        toast.error("There was an error")
        console.log("clearstore.rejected")
      })
  }
});

export default userSlice.reducer;
export const { toggleSidebar, logoutUser } = userSlice.actions;
