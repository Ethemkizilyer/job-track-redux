import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
} from "../../utils/localstorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.message);
      // toast.error(error.response.data.msg)
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
    // console.log(`Register User : ${JSON.stringify(user)} `);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
    // console.log(`Login User :  ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

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
  //         }
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
      });
  },
});

export default userSlice.reducer;
