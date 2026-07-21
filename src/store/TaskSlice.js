import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../api/api";
import axios from "axios";

export const fetchTask = createAsyncThunk("task/fetchTasks",async(status) => {
    setAuthHeader(localStorage.getItemItem("jwt"),api);
    try {
        const {data} = await api.get(`/api/tasks`, {
            params : {status}
        });
        console.log("Fetch Tasks===>",data);
        return data;
    } catch (error) {
        console.log("error =>", error);
        throw Error(error.response.data.error);
    }
});

export const fetchUserTasks = createAsyncThunk("task/fetchUserTask",async(status) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.get(`/api/tasks/user`,{params : {status}});
        console.log("Fetch User Tasks===>",data);
        return data;
    } catch (error) {
       console.log("error =>", error);
       throw Error(error.response.data.error);
    }
});

export const fetchTaskById = createAsyncThunk("task/fetchTaskById",async(taskId) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.get(`/api/tasks/${taskId}`);
        console.log("Fetch task by id===>",data);
        return data;
    } catch (error) {
       console.log("error =>", error);
       throw Error(error.response.data.error);
    }
});

export const createTask = createAsyncThunk("task/createTask",async(taskData) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.post(`/api/tasks`,taskData);
        console.log("Task Created===>",data);
        return data;
    } catch (error) {
       console.log("error =>", error);
       throw Error(error.response.data.error);
    }
});

export const updateTask = createAsyncThunk("task/updateTask",async({id,taskData}) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.put(`/api/tasks/${taskId}`,taskData);
        console.log("Task Updated===>",data);
        return data;
    } catch (error) {
       console.log("error =>", error);
       throw Error(error.response.data.error);
    }
});

export const deleteTask = createAsyncThunk("task/deleteTask",async(taskId) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.delete(`/api/tasks/${taskId}`);
        console.log("Task Deleted===>",data);
        return data;
    } catch (error) {
       console.log("error =>", error);
       throw Error(error.response.data.error);
    }
});

export const completeTask = createAsyncThunk("task/completeTask",async(taskId) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.delete(`/api/tasks/${taskId}/complete`);
        console.log("Task Deleted===>",data);
        return data;
    } catch (error) {
       console.log("error =>", error);
       throw Error(error.response.data.error);
    }
});

export const assignToUser = createAsyncThunk("task/assignToUser",async({taskId,userId}) => {
    setAuthHeader(localStorage.getItem("jwt"),api);
    try {
        const {data} = await api.put(`/api/tasks/${taskId}/user/${userId}/assigned`);
        console.log("Assigned task to user===>",data);
        return data;
    } catch (error) {
       console.log("error =>", error);
       throw Error(error.response.data.error);
    }
});

const taskSlice = createSlice({
    name:"task",
    initialState:{
        tasks : [],
        loading : false,
        error : null,
        taskDetails : null,
        userTask : []
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchTask.pending , (state) => {
           state.loading = true;
           state.error  = null;
        }).addCase(fetchTask.fulfilled,(state,action) => {
            state.loading = false;
            state.tasks = action.payload;
        }).addCase(fetchTask.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        }).addCase(fetchUserTasks.pending , (state) => {
           state.loading = true;
           state.error  = null;
        }).addCase(fetchUserTasks.fulfilled,(state,action) => {
            state.loading = false;
            state.userTask = action.payload;
        }).addCase(fetchUserTasks.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        }).addCase(createTask.pending , (state) => {
           state.loading = true;
           state.error  = null;
        }).addCase(createTask.fulfilled,(state,action) => {
            state.loading = false;
            state.tasks.push(action.payload);
        }).addCase(createTask.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        }).addCase(updateTask.fulfilled,(state,action) => {
            const updatedTask = action.payload;
            state.loading = false;
            state.tasks = state.tasks.map((task) =>
                           task.id === updatedTask.id ? { ...task, ...updatedTask } : task
                        );
        }).addCase(assignToUser.fulfilled,(state,action) => {
            const updatedTask = action.payload;
            state.loading = false;
            state.tasks = state.tasks.map((task) =>
                           task.id === updatedTask.id ? { ...task, ...updatedTask } : task
                        );
        }).addCase(deleteTask.fulfilled,(state,action) => {
            
            state.loading = false;
            state.tasks = state.tasks.filter(task.id != action.payload);
        });
    }
});

export default taskSlice.reducer;