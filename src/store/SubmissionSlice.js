import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api, setAuthHeader } from "../api/api";


export const submitTask = createAsyncThunk("submission/submitTask",async({taskId,githublink}) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.post(`/api/submission?task_id=${taskId}&github_link=${githublink}`,{});
        console.log("Submitted Task===>",data);
    } catch (error) {
        console.log("error ===>",error);
        throw Error(error.response.data.error);
    }     
});

export const findAllSubmisiions = createAsyncThunk("submission/findAllSubmisiions",async() => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.get(`/api/submission`);
        console.log("All submissions===>",data);
    } catch (error) {
        console.log("error ===>",error);
        throw Error(error.response.data.error);
    }     
});

export const findSubmisiionByTaskId = createAsyncThunk("submission/findSubmisiionByTaskId",async(taskId) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.get(`/api/submission/task/${taskId}`);
        console.log("Get submission by task id===>",data);
    } catch (error) {
        console.log("error ===>",error);
        throw Error(error.response.data.error);
    }     
});

export const findSubmissionById = createAsyncThunk("submission/findSubmissionById",async(id) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.get(`/api/submission/task/${id}`);
        console.log("Get submission by task id===>",data);
    } catch (error) {
        console.log("error ===>",error);
        throw Error(error.response.data.error);
    }     
});

export const acceptDeclinedSubmission = createAsyncThunk("submission/acceptDeclinedSubmission",async({id,status}) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.get(`/api/submission/task/${id}?status=${status}`);
        console.log("accept  task===>",data);
    } catch (error) {
        console.log("error ===>",error);
        throw Error(error.response.data.error);
    }     
});

const submissionSlice  = createSlice({
    name:"submission",
    initialState:{
        submission : [],
        error : null,
        status :''
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(submitTask.pending , (state) => {
           state.status = 'loading';
        }).addCase(submitTask.fulfilled,(state,action) => {
            console.log("submitTask.fulfilled payload:", action.payload);
            state.loading = 'succeeded';
            state.submission.push(action.payload);
        }).addCase(submitTask.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(findAllSubmisiions.fulfilled,(state,action) => {
            state.loading = 'succeeded';
            state.submission.push(action.payload);
        }).addCase(findAllSubmisiions.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(findSubmisiionByTaskId.fulfilled,(state,action) => {
            state.loading = 'succeeded';
            state.submission.push(action.payload);
        }).addCase(findSubmisiionByTaskId.rejected,(state,action) => {
             state.status = 'failed';
            state.error = action.error.message;
        }).addCase(findSubmisiionById.fulfilled,(state,action) => {
            state.loading = 'succeeded';
            state.submission.push(action.payload);
        }).addCase(findSubmisiionById.rejected,(state,action) => {
             state.status = 'failed';
            state.error = action.error.message;
        }).addCase(acceptDeclinedSubmission.fulfilled,(state,action) => {
            state.loading = 'succeeded';
            console.log("before accept map (snapshot):", JSON.parse(JSON.stringify(state.submission)));
            console.log("fulfilled action.payload:", action.payload);
            state.submission = state.submission.map((item) => item.id !== action.payload.id ? item : action.payload);
        });
    } 
});

export default submissionSlice.reducer;
