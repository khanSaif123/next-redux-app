
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";

// configureStore take one parameter which is an object.
export let appStore = configureStore({
    reducer:{
        appReducer: appReducer
    }
})