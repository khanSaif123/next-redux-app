'use client'
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";
import logger from "redux-logger";

// configureStore take one parameter which is an object.
export let appStore = configureStore({
    reducer:{
        appReducer: appReducer
    },
    middleware:()=>{
        return [logger]
    }
})