import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authSlice from "./AuthSlice";
import taskSlice from "./TaskSlice";
import taskSlice from "./SubmissionSlice";

const rootReducer = combineReducers({
    auth : authSlice,
    task : taskSlice,
    submission : submissionSlice
});

const store = configureStore({

    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
    
});

export default store;