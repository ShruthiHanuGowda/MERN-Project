import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export const RootState = typeof store.getState
export const AppDispatch = typeof store.despatch