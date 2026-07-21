import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api, setAuthHeader } from "../api/api";

//login
//jwtToken
export const login = createAsyncThunk("auth/login", async(userData) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/auth/signin`,userData);
        localStorage.setItem("jwt",data.jwt);
        console.log("Login Successfully !!!")
        return data;
    } catch (error) {
        console.log("Catch error",error);
        throw Error(error.response.data.error);
    }
});

//Register
export const register = createAsyncThunk("auth/register",async(userData) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/auth/signup`,userData)
        localStorage.setItem("jwt",data.jwt);
        console.log("Register Successfully !!!");
        return data;
    } catch (error) {
        console.log("Catch error",error);
        throw Error(error.response.data.error);
    }
});

//Logout
export const logout = createAsyncThunk("auth/logout",async(userData) => {
   try{
       localStorage.clear();
       console.log("Logout successfully");
   }catch(error){
     console.log("Catch error ", error);
     throw Error(error.response.data.error);
   }
});

//Profile
export const getUserProfile  = createAsyncThunk("auth/getUserProfile",async(jwt) => {

    setAuthHeader(jwt,api);
    try{
        const {data} = await api.get(`/api/user/profile`);
        return data;
    }catch(error){
        console.log("Catch error ", error);
        throw Error(error.response.data.error);
    }
});

//Get All Users
export const getUserList = createAsyncThunk("auth/userList",async(jwt) => {
   setAuthHeader(jwt,api);
   try {
       const {data} = await api.get(`/api/user/all-user`);
       return data;
   } catch (error) {
     console.log("Catch error ", error);
     throw Error(error.response.data.error);
   }
});

const authSlice = createSlice({
   name:"auth",
   initialState:{
        user : null,
        loggedIn : false,
        loading : false,
        error : null,
        jwt : null,
        users : []
   },
   extraReducers: (builder) =>{
     builder.addCase(login.pending,(state) => {
        state.loading = true;
        state.error = null;
     }).addCase(login.fulfilled,(state,action) => {
        state.loading= false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
     }).addCase(login.rejected,(state,action) => {
        state.loading = false;
        state.error = action.error.message;
     }).addCase(register.pending , (state) => {
        state.loading = true;
        state.error = null;
     }).addCase(register.fulfilled,(state,action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
     }).addCase(register.rejected,(state,action) => {
        state.loading = false;
        state.error = action.error.message;
     }).addCase(getUserProfile.pending,(state)=>{
        state.loading = false;
        state.error = null;
     }).addCase(getUserProfile.fulfilled,(state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.loggedIn = true;
     }).addCase(getUserProfile.rejected,(state,action) => {
        state.loading = false;
        state.error = action.error.message;
     }).addCase(getUserList.pending,(state)=>{
        state.loading = true;
        state.error = null;
     }).addCase(getUserList.fulfilled,(state,action) => {
        state.loading = false;
        state.users = action.payload;
        state.loggedIn = true;
     }).addCase(getUserList,(state,action) => {
        state.loading = false;
        state.error = action.error.message;
     }).addCase(logout.fulfilled,(state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
        state.users = [];
        state.jwt = null;
     });
   }

   
});

export default authSlice.reducer;

